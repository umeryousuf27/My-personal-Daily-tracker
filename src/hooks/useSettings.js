import { useState, useEffect } from 'react'
import { soundEngine } from '../utils/sound'

const DEFAULT_SETTINGS = {
  theme: 'dark',
  soundEnabled: true,
  volume: 0.7,
  sounds: {
    notificationChime: true,
    prayerCall: true,
    warningBuzz: true,
    taskComplete: true,
    taskUncomplete: true,
    timerStart: true,
    timerStop: true,
    hoverTick: false,
    buttonPress: true,
    streakMilestone: true,
    allTasksDone: true,
    prayerComplete: true,
    allPrayersDone: true,
    lcMilestone: true,
    screenTimeGoal: true,
  },
  notifications: {
    enabled: true,
    advanceWarning: 5,
    prayers: true,
    studyBlocks: true,
    screenTimeWarning: true,
    dailySummary: true,
    morningMotivation: true,
  },
  habit: {
    cueStyle: 'moderate',
    showStreak: true,
    showXP: true,
    anticipationMode: true,
    rewardIntensity: 'high',
    celebrationStyle: 'spiritual',
    identityStatement: "I am a disciplined engineer who prays on time.",
    weeklyReview: true,
  },
  goals: {
    dailyLcMinutes: 90,
    maxScreenMins: 90,
    streakTarget: 30,
    weeklyLcProblems: 7,
  }
}

function loadSettings() {
  try {
    const raw = localStorage.getItem('umer_settings_v1')
    if (!raw) return DEFAULT_SETTINGS
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) }
  } catch { return DEFAULT_SETTINGS }
}

export function useSettings() {
  const [settings, setSettingsRaw] = useState(loadSettings)

  const setSettings = (updater) => {
    setSettingsRaw(prev => {
      const next = typeof updater === 'function' ? updater(prev) : { ...prev, ...updater }
      localStorage.setItem('umer_settings_v1', JSON.stringify(next))
      return next
    })
  }

  const setSoundEnabled = (key, value) =>
    setSettings(s => ({ ...s, sounds: { ...s.sounds, [key]: value } }))

  const setNotifEnabled = (key, value) =>
    setSettings(s => ({ ...s, notifications: { ...s.notifications, [key]: value } }))

  const setHabit = (key, value) =>
    setSettings(s => ({ ...s, habit: { ...s.habit, [key]: value } }))

  const setGoal = (key, value) =>
    setSettings(s => ({ ...s, goals: { ...s.goals, [key]: value } }))

  // Apply theme
  useEffect(() => {
    const html = document.documentElement
    if (settings.theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      html.setAttribute('data-theme', mq.matches ? 'dark' : 'light')
      const h = e => html.setAttribute('data-theme', e.matches ? 'dark' : 'light')
      mq.addEventListener('change', h)
      return () => mq.removeEventListener('change', h)
    } else {
      html.setAttribute('data-theme', settings.theme)
    }
  }, [settings.theme])

  // Apply master volume
  useEffect(() => {
    soundEngine.setVolume(settings.soundEnabled ? settings.volume : 0)
  }, [settings.volume, settings.soundEnabled])

  return {
    settings,
    setSettings,
    setSoundEnabled,
    setNotifEnabled,
    setHabit,
    setGoal,
  }
}
