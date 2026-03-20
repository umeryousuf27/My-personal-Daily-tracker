// src/utils/sound.js

class SoundEngine {
  constructor() {
    this.ctx = null
    this.masterGain = null
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume()
      return
    }
    this.ctx = new (window.AudioContext || window.webkitAudioContext)()
    this.masterGain = this.ctx.createGain()
    this.masterGain.connect(this.ctx.destination)
  }

  setVolume(v) {
    if (this.masterGain) this.masterGain.gain.setValueAtTime(v, this.ctx.currentTime)
  }

  // ── Core primitive: plays a tone with envelope ──────────────────
  tone({ freq = 440, type = 'sine', attack = 0.01, decay = 0.1,
          sustain = 0.3, release = 0.3, gain = 0.5, duration = 0.5 }) {
    this.init()
    const osc = this.ctx.createOscillator()
    const env = this.ctx.createGain()
    osc.connect(env)
    env.connect(this.masterGain)
    osc.type = type
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime)
    // ADSR envelope
    const t = this.ctx.currentTime
    env.gain.setValueAtTime(0, t)
    env.gain.linearRampToValueAtTime(gain, t + attack)
    env.gain.linearRampToValueAtTime(gain * sustain, t + attack + decay)
    env.gain.setValueAtTime(gain * sustain, t + duration - release)
    env.gain.linearRampToValueAtTime(0, t + duration)
    osc.start(t)
    osc.stop(t + duration)
  }

  // ── Chord: multiple tones at once ───────────────────────────────
  chord(freqs, opts = {}) {
    freqs.forEach(f => this.tone({ freq: f, ...opts }))
  }

  // ── Noise burst (for click/hover effects) ────────────────────────
  noise({ duration = 0.05, gain = 0.15, bandpass = 800 }) {
    this.init()
    const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * duration, this.ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1
    const source = this.ctx.createBufferSource()
    source.buffer = buffer
    const filter = this.ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.value = bandpass
    const env = this.ctx.createGain()
    source.connect(filter)
    filter.connect(env)
    env.connect(this.masterGain)
    env.gain.setValueAtTime(gain, this.ctx.currentTime)
    env.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration)
    source.start()
    source.stop(this.ctx.currentTime + duration)
  }
}

export const soundEngine = new SoundEngine()
