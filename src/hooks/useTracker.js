import { useState, useEffect, useRef, useCallback } from 'react'
import { SCHEDULE, PRAYERS } from '../data'
import { useSettingsCtx } from '../context/SettingsContext'
import { Sounds } from '../utils/sounds'

const STORAGE_KEY = 'umer_tracker_v3'
const LC_KEY = 'umer_lc_progress'

function todayISO() {
  return new Date().toISOString().slice(0, 10)
}

function formatHHMM(date) {
  return date.toTimeString().slice(0, 5)
}

// ─── State helpers ────────────────────────────────────────────────────────────
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return null
}

function freshState(weekScores = {}, weekData = {}, saved = null) {
  return {
    date: todayISO(),
    tasks: {},
    lcSeconds: 0,
    screenMins: 0,
    entertainmentMode: false,
    weekScores,
    weekData,
    streaks: saved?.streaks || { current: 0, longest: 0, lastCompletedDate: null },
    xp: saved?.xp || { total: 0, level: 1, levelXP: 0 },
  }
}

function maybeReset(saved) {
  const today = todayISO()
  if (!saved || saved.date !== today) {
    const weekScores = saved?.weekScores || {}
    const weekData   = saved?.weekData   || {}
    if (saved?.date) {
      const tasksDone = Object.values(saved.tasks || {}).filter(Boolean).length
      weekScores[saved.date] = tasksDone
      // Save full day snapshot
      weekData[saved.date] = {
        tasks:     saved.tasks     || {},
        lcSeconds: saved.lcSeconds || 0,
        screenMins:saved.screenMins|| 0,
        score:     tasksDone,
      }
      // Only keep last 14 days of snapshots
      const keys = Object.keys(weekData).sort().slice(-14)
      const trimmed = {}
      keys.forEach(k => { trimmed[k] = weekData[k] })
      let newStreaks = { ...(saved.streaks || { current: 0, longest: 0, lastCompletedDate: null }) };
      if (tasksDone >= 8) {
        // Did they miss a day?
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yDayStr = yesterday.toISOString().slice(0, 10);
        
        if (newStreaks.lastCompletedDate === yDayStr) {
          newStreaks.current += 1; // Streak continues!
        } else if (newStreaks.lastCompletedDate !== saved.date) {
          newStreaks.current = 1; // Start new streak
        }
        newStreaks.lastCompletedDate = saved.date;
        if (newStreaks.current > newStreaks.longest) newStreaks.longest = newStreaks.current;
      } else {
        newStreaks.current = 0; // Broken streak
      }

      return freshState(weekScores, trimmed, { ...saved, streaks: newStreaks })
    }
    return freshState(weekScores, weekData, saved)
  }
  return saved
}

let toastIdCounter = 0
let notifIdCounter = 0

export function useTracker() {
  const { settings } = useSettingsCtx() || { settings: { soundEnabled: true, sounds: {} } }
  
  const [state, setState]       = useState(() => maybeReset(loadState()))
  const [now, setNow]           = useState(new Date())
  const [timer, setTimer]       = useState(null)
  const [toasts, setToasts]     = useState([])
  const [notifLog, setNotifLog] = useState([])
  const [notifGranted, setNotifGranted] = useState(
    typeof Notification !== 'undefined' && Notification.permission === 'granted'
  )

  const notifFired = useRef({})
  const timerRef   = useRef(null)

  // Persist state
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  // Clock tick
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  // Timer tick
  useEffect(() => {
    if (!timer) { if (timerRef.current) clearInterval(timerRef.current); return }
    timerRef.current = setInterval(() => {
      setTimer(t => t ? { ...t, elapsed: Math.floor((Date.now() - t.startMs) / 1000) } : null)
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [timer?.taskId, timer?.startMs])

  // Push notification (internal + toast + sound + browser)
  const pushNotif = useCallback((title, body, color = 'blue', isPrayer = false) => {
    const id    = ++notifIdCounter
    const entry = { id, title, body, color, time: formatHHMM(new Date()) }

    setToasts(prev  => [{ ...entry, toastId: ++toastIdCounter }, ...prev])
    setNotifLog(prev => [entry, ...prev].slice(0, 20))

    if (settings.soundEnabled) {
      if (isPrayer && settings.sounds?.prayerCall) Sounds.prayerCall()
      else if (settings.sounds?.notificationChime) Sounds.notificationChime()
    }

    if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
      try { new Notification(`Umer Tracker — ${title}`, { body }) } catch {}
    }
  }, [settings])

  // Schedule notifications (fires on exact second=0)
  useEffect(() => {
    if (now.getSeconds() !== 0) return
    const dateKey = todayISO()
    const h = now.getHours()
    const m = now.getMinutes()

    SCHEDULE.forEach(item => {
      const onKey = `${item.id}_on_${dateKey}`
      if (h === item.h && m === item.m && !notifFired.current[onKey]) {
        notifFired.current[onKey] = true
        pushNotif(item.task, item.sub, item.color)
      }
      const warnKey = `${item.id}_warn_${dateKey}`
      const warnH = item.m >= 5 ? item.h : item.h - 1
      const warnM = item.m >= 5 ? item.m - 5 : item.m + 55
      if (h === warnH && m === warnM && !notifFired.current[warnKey]) {
        notifFired.current[warnKey] = true
        pushNotif(`Coming up: ${item.task}`, `Starting at ${item.time}`, item.color)
      }
    })

    const screenWarnKey = `screen_warn_${dateKey}`
    if (state.screenMins >= 90 && !notifFired.current[screenWarnKey]) {
      notifFired.current[screenWarnKey] = true
      pushNotif('Screen Time Limit Hit', `You've used ${state.screenMins}m today`, 'amber')
    }
  }, [now, state.screenMins, pushNotif])

  // ─── Derived values ──────────────────────────────────────────────────────────
  const tasksDone  = Object.values(state.tasks).filter(Boolean).length
  const prayersDone = PRAYERS.filter(p => state.tasks[p.id]).length

  const currentTaskId = (() => {
    const h = now.getHours(), m = now.getMinutes()
    const total = h * 60 + m
    for (let i = 0; i < SCHEDULE.length; i++) {
      const s    = SCHEDULE[i]
      const next = SCHEDULE[i + 1] ? SCHEDULE[i + 1].h * 60 + SCHEDULE[i + 1].m : 24 * 60
      if (total >= s.h * 60 + s.m && total < next) return s.id
    }
    return null
  })()

  const weekScores = (() => {
    const scores = { ...state.weekScores }
    scores[todayISO()] = tasksDone
    return scores
  })()

  // ─── Actions ──────────────────────────────────────────────────────────────────
  // ─── XP logic ─────────────────────────────────────────────────────────────────
  const addXP = useCallback((amount) => {
    setState(s => {
      let { total, level, levelXP } = s.xp || { total: 0, level: 1, levelXP: 0 };
      total += amount;
      levelXP += amount;
      let threshold = 200 + (level * 100);
      while (levelXP >= threshold) { // Level up
        levelXP -= threshold;
        level += 1;
        threshold = 200 + (level * 100);
      }
      return { ...s, xp: { total, level, levelXP } };
    });
  }, []);

  // ─── Actions ──────────────────────────────────────────────────────────────────
  const toggleTask = useCallback((id) => {
    setState(s => {
      const nowDone = !s.tasks[id];
      const nextTasks = { ...s.tasks, [id]: nowDone };
      const tasksDoneNow = Object.values(nextTasks).filter(Boolean).length;
      const prayersDoneNow = PRAYERS.filter(p => nextTasks[p.id]).length;
      const isPrayer = PRAYERS.some(p => p.id === id);

      if (nowDone) {
        if (settings.soundEnabled) {
          if (settings.sounds?.taskComplete) Sounds.taskComplete();
          if (isPrayer && settings.sounds?.prayerComplete) Sounds.prayerComplete();
          if (prayersDoneNow === 5 && !s.tasks[id] && settings.sounds?.allPrayersDone) Sounds.allPrayersDone();
          if (tasksDoneNow === SCHEDULE.length && !s.tasks[id] && settings.sounds?.allTasksDone) Sounds.allTasksDone();
        }
        addXP(isPrayer ? 50 : 30);
      } else {
        if (settings.soundEnabled && settings.sounds?.taskUncomplete) Sounds.taskUncomplete();
      }

      return { ...s, tasks: nextTasks };
    });
  }, [settings, addXP]);

  const addScreen       = useCallback((mins) => setState(s => ({ ...s, screenMins: (s.screenMins || 0) + mins })), [])
  const resetScreen     = useCallback(() => setState(s => ({ ...s, screenMins: 0 })), [])
  const resetDay        = useCallback(() => { setState(s => ({ ...freshState(s.weekScores, s.weekData, s) })); setTimer(null); notifFired.current = {} }, [])
  const startTimer      = useCallback((id, name, color) => {
    if (settings.soundEnabled && settings.sounds?.timerStart) Sounds.timerStart();
    setTimer({ taskId: id, taskName: name, color, startMs: Date.now(), elapsed: 0 })
  }, [settings])
  const stopTimer       = useCallback(() => {
    if (settings.soundEnabled && settings.sounds?.timerStop) Sounds.timerStop();
    setTimer(t => {
      if (!t) return null
      if (t.taskId === 'lc') setState(s => ({ ...s, lcSeconds: (s.lcSeconds || 0) + t.elapsed }))
      addXP(Math.floor(t.elapsed / 60)); // 1 XP per minute
      pushNotif(`${t.taskName} logged`, `${Math.floor(t.elapsed / 60)}m ${t.elapsed % 60}s recorded`, t.color)
      return null
    })
  }, [pushNotif, settings, addXP])
  const cancelTimer     = useCallback(() => setTimer(null), [])
  const requestNotifPerm = useCallback(async () => {
    if (typeof Notification === 'undefined') return
    const perm = await Notification.requestPermission()
    setNotifGranted(perm === 'granted')
  }, [])
  const dismissToast    = useCallback((toastId) => setToasts(prev => prev.filter(t => t.toastId !== toastId)), [])
  const clearLog        = useCallback(() => setNotifLog([]), [])

  const toggleEntertainmentMode = useCallback(() => {
    if (settings.soundEnabled && settings.sounds?.timerStop) Sounds.timerStop()
    setTimer(null)
    setState(s => ({ ...s, entertainmentMode: !s.entertainmentMode }))
  }, [settings])

  return {
    state, now, timer, toasts, notifLog,
    currentTaskId, tasksDone, prayersDone, notifGranted, weekScores,
    soundEnabled: settings.soundEnabled,
    entertainmentMode: state.entertainmentMode,
    toggleTask, addScreen, resetScreen, resetDay,
    startTimer, stopTimer, cancelTimer,
    requestNotifPerm, dismissToast, clearLog, pushNotif,
    addXP, toggleEntertainmentMode,
  }
}
