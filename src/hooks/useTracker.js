import { useState, useEffect, useRef, useCallback } from 'react'
import { SCHEDULE, PRAYERS } from '../data'

const STORAGE_KEY = 'umer_tracker_v3'
const LC_KEY = 'umer_lc_progress'

function todayISO() {
  return new Date().toISOString().slice(0, 10)
}

function formatHHMM(date) {
  return date.toTimeString().slice(0, 5)
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return null
}

function freshState(weekScores = {}) {
  return {
    date: todayISO(),
    tasks: {},
    lcSeconds: 0,
    screenMins: 0,
    weekScores,
  }
}

function maybeReset(saved) {
  const today = todayISO()
  if (!saved || saved.date !== today) {
    const weekScores = saved?.weekScores || {}
    if (saved?.date) {
      const tasksDone = Object.values(saved.tasks || {}).filter(Boolean).length
      weekScores[saved.date] = tasksDone
    }
    return freshState(weekScores)
  }
  return saved
}

let toastIdCounter = 0
let notifIdCounter = 0

export function useTracker() {
  const [state, setState] = useState(() => maybeReset(loadState()))
  const [now, setNow] = useState(new Date())
  const [timer, setTimer] = useState(null)
  const [toasts, setToasts] = useState([])
  const [notifLog, setNotifLog] = useState([])
  const [notifGranted, setNotifGranted] = useState(
    typeof Notification !== 'undefined' && Notification.permission === 'granted'
  )

  const notifFired = useRef({})
  const timerRef = useRef(null)

  // Persist state
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  // Clock tick — every second
  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  // Timer tick
  useEffect(() => {
    if (!timer) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }
    timerRef.current = setInterval(() => {
      setTimer(t => t ? { ...t, elapsed: Math.floor((Date.now() - t.startMs) / 1000) } : null)
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [timer?.taskId, timer?.startMs])

  // Notification system
  const pushNotif = useCallback((title, body, color = 'blue') => {
    const id = ++notifIdCounter
    const entry = { id, title, body, color, time: formatHHMM(new Date()) }

    setToasts(prev => [{ ...entry, toastId: ++toastIdCounter }, ...prev])
    setNotifLog(prev => [entry, ...prev].slice(0, 20))

    if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
      try { new Notification(`Umer Tracker — ${title}`, { body }) } catch {}
    }
  }, [])

  // Schedule notifications
  useEffect(() => {
    if (now.getSeconds() !== 0) return
    const dateKey = todayISO()
    const h = now.getHours()
    const m = now.getMinutes()

    SCHEDULE.forEach(item => {
      // Exact task time
      const onKey = `${item.id}_on_${dateKey}`
      if (h === item.h && m === item.m && !notifFired.current[onKey]) {
        notifFired.current[onKey] = true
        pushNotif(item.task, item.sub, item.color)
      }
      // 5-min warning
      const warnKey = `${item.id}_warn_${dateKey}`
      const warnH = item.m >= 5 ? item.h : item.h - 1
      const warnM = item.m >= 5 ? item.m - 5 : item.m + 55
      if (h === warnH && m === warnM && !notifFired.current[warnKey]) {
        notifFired.current[warnKey] = true
        pushNotif(`Coming up: ${item.task}`, `Starting at ${item.time}`, item.color)
      }
    })

    // Screen time warning
    const screenWarnKey = `screen_warn_${dateKey}`
    if (state.screenMins >= 90 && !notifFired.current[screenWarnKey]) {
      notifFired.current[screenWarnKey] = true
      pushNotif('Screen Time Limit Hit', `You've used ${state.screenMins}m of social media today`, 'amber')
    }
  }, [now, state.screenMins, pushNotif])

  // Derived
  const tasksDone = Object.values(state.tasks).filter(Boolean).length
  const prayersDone = PRAYERS.filter(p => state.tasks[p.id]).length

  const currentTaskId = (() => {
    const h = now.getHours()
    const m = now.getMinutes()
    const total = h * 60 + m
    let current = null
    for (let i = 0; i < SCHEDULE.length; i++) {
      const s = SCHEDULE[i]
      const start = s.h * 60 + s.m
      const next = SCHEDULE[i + 1] ? SCHEDULE[i + 1].h * 60 + SCHEDULE[i + 1].m : 24 * 60
      if (total >= start && total < next) { current = s.id; break }
    }
    return current
  })()

  const weekScores = (() => {
    const scores = { ...state.weekScores }
    scores[todayISO()] = tasksDone
    return scores
  })()

  // Actions
  const toggleTask = useCallback((id) => {
    setState(s => ({ ...s, tasks: { ...s.tasks, [id]: !s.tasks[id] } }))
  }, [])

  const addScreen = useCallback((mins) => {
    setState(s => ({ ...s, screenMins: (s.screenMins || 0) + mins }))
  }, [])

  const resetScreen = useCallback(() => {
    setState(s => ({ ...s, screenMins: 0 }))
  }, [])

  const resetDay = useCallback(() => {
    setState(s => ({ ...freshState(s.weekScores), weekScores: s.weekScores }))
    setTimer(null)
    notifFired.current = {}
  }, [])

  const startTimer = useCallback((id, name, color) => {
    setTimer({ taskId: id, taskName: name, color, startMs: Date.now(), elapsed: 0 })
  }, [])

  const stopTimer = useCallback(() => {
    setTimer(t => {
      if (!t) return null
      if (t.taskId === 'lc') {
        setState(s => ({ ...s, lcSeconds: (s.lcSeconds || 0) + t.elapsed }))
      }
      pushNotif(`${t.taskName} logged`, `${Math.floor(t.elapsed / 60)}m ${t.elapsed % 60}s recorded`, t.color)
      return null
    })
  }, [pushNotif])

  const cancelTimer = useCallback(() => {
    setTimer(null)
  }, [])

  const requestNotifPerm = useCallback(async () => {
    if (typeof Notification === 'undefined') return
    const perm = await Notification.requestPermission()
    setNotifGranted(perm === 'granted')
  }, [])

  const dismissToast = useCallback((toastId) => {
    setToasts(prev => prev.filter(t => t.toastId !== toastId))
  }, [])

  const clearLog = useCallback(() => {
    setNotifLog([])
  }, [])

  return {
    state, now, timer, toasts, notifLog,
    currentTaskId, tasksDone, prayersDone, notifGranted, weekScores,
    toggleTask, addScreen, resetScreen, resetDay,
    startTimer, stopTimer, cancelTimer,
    requestNotifPerm, dismissToast, clearLog, pushNotif,
  }
}
