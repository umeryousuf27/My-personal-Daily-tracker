import { soundEngine as S } from './sound.js'

export const Sounds = {

  // ── CUE PHASE — sounds that trigger awareness ───────────────────

  notificationChime() {
    S.tone({ freq: 523, type: 'sine', duration: 0.3, gain: 0.4, release: 0.25 })
    setTimeout(() => S.tone({ freq: 784, type: 'sine', duration: 0.4, gain: 0.35, release: 0.35 }), 150)
  },

  prayerCall() {
    const freqs = [659, 587, 523]
    freqs.forEach((f, i) => {
      setTimeout(() => S.tone({ freq: f, type: 'sine', duration: 0.5, gain: 0.3,
        attack: 0.05, decay: 0.1, sustain: 0.6, release: 0.4 }), i * 300)
    })
  },

  warningBuzz() {
    [0, 200].forEach(delay => {
      setTimeout(() => S.tone({ freq: 220, type: 'sawtooth', duration: 0.12,
        gain: 0.25, attack: 0.005, release: 0.08 }), delay)
    })
  },

  advanceWarning() {
    S.tone({ freq: 880, type: 'sine', duration: 0.25, gain: 0.2,
      attack: 0.01, decay: 0.05, sustain: 0.4, release: 0.2 })
  },

  // ── ACTION PHASE — sounds that confirm behavior ─────────────────

  taskComplete() {
    S.tone({ freq: 392, type: 'sine', duration: 0.08, gain: 0.45, release: 0.06 })
    setTimeout(() => S.tone({ freq: 523, type: 'sine', duration: 0.18, gain: 0.4,
      attack: 0.005, release: 0.15 }), 70)
  },

  taskUncomplete() {
    S.tone({ freq: 523, type: 'sine', duration: 0.08, gain: 0.2, release: 0.06 })
    setTimeout(() => S.tone({ freq: 392, type: 'sine', duration: 0.15, gain: 0.18,
      attack: 0.005, release: 0.12 }), 60)
  },

  timerStart() {
    S.noise({ duration: 0.04, gain: 0.2, bandpass: 2400 })
    S.tone({ freq: 1047, type: 'sine', duration: 0.12, gain: 0.15, attack: 0.005, release: 0.1 })
  },

  timerStop() {
    S.tone({ freq: 698, type: 'sine', duration: 0.6, gain: 0.3,
      attack: 0.01, decay: 0.1, sustain: 0.5, release: 0.5 })
  },

  hoverTick() {
    S.noise({ duration: 0.025, gain: 0.06, bandpass: 3500 })
  },

  buttonPress() {
    S.noise({ duration: 0.03, gain: 0.12, bandpass: 600 })
  },

  prayerComplete() {
    S.tone({ freq: 440, type: 'sine', duration: 0.4, gain: 0.25,
      attack: 0.02, decay: 0.1, sustain: 0.6, release: 0.35 })
  },

  // ── REWARD PHASE — sounds that reinforce the loop ───────────────

  allPrayersDone() {
    const notes = [523, 659, 784]
    notes.forEach((f, i) => {
      setTimeout(() => S.tone({ freq: f, type: 'sine', duration: 0.5, gain: 0.3,
        attack: 0.02, decay: 0.08, sustain: 0.6, release: 0.4 }), i * 200)
    })
    setTimeout(() => S.chord([523, 659, 784], { type: 'sine', duration: 0.8,
      gain: 0.15, attack: 0.05, release: 0.7 }), 700)
  },

  streakMilestone() {
    const notes = [392, 494, 587, 698, 784]
    notes.forEach((f, i) => {
      setTimeout(() => S.tone({ freq: f, type: 'sine', duration: 0.3, gain: 0.3,
        attack: 0.01, release: 0.25 }), i * 80)
    })
  },

  allTasksDone() {
    const progression = [
      { freqs: [261, 329, 392], delay: 0    },
      { freqs: [293, 370, 440], delay: 300  },
      { freqs: [392, 494, 587], delay: 600  },
    ]
    progression.forEach(({ freqs, delay }) => {
      setTimeout(() => S.chord(freqs, { type: 'sine', duration: 0.5, gain: 0.25,
        attack: 0.02, decay: 0.1, sustain: 0.5, release: 0.4 }), delay)
    })
    setTimeout(() => S.chord([523, 659, 784], { type: 'sine', duration: 1.0,
      gain: 0.2, attack: 0.05, release: 0.9 }), 1100)
  },

  lcMilestone() {
    S.chord([392, 494, 587], { type: 'triangle', duration: 0.4, gain: 0.3,
      attack: 0.01, release: 0.35 })
    setTimeout(() => S.chord([440, 554, 659], { type: 'triangle', duration: 0.5,
      gain: 0.25, attack: 0.01, release: 0.45 }), 250)
  },

  screenTimeGoal() {
    S.tone({ freq: 587, type: 'sine', duration: 0.3, gain: 0.25, release: 0.25 })
    setTimeout(() => S.tone({ freq: 784, type: 'sine', duration: 0.45, gain: 0.22,
      attack: 0.02, release: 0.4 }), 200)
  },

  dailySummaryReady() {
    [0, 180, 360].forEach(d => {
      setTimeout(() => S.noise({ duration: 0.04, gain: 0.18, bandpass: 900 }), d)
    })
  },
}
