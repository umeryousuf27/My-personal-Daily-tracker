import React from 'react'
import styles from './SoundRow.module.css'
import Toggle from './Toggle'
import { Sounds } from '../utils/sounds'
import { soundEngine } from '../utils/sound'

export default function SoundRow({ label, phase, soundKey, enabled, onToggle }) {
  const phaseColors = {
    cue: 'amber',
    action: 'blue',
    reward: 'green'
  }

  const phaseColor = phaseColors[phase] || 'blue'

  const playPreview = () => {
    soundEngine.init()
    soundEngine.setVolume(0.7) // force audible preview
    if (Sounds[soundKey]) Sounds[soundKey]()
  }

  return (
    <div className={styles.row}>
      <div className={styles.info}>
        <span className={styles.label}>{label}</span>
        <span className={`${styles.badge} ${styles[phaseColor]}`}>{phase.toUpperCase()}</span>
      </div>
      <div className={styles.controls}>
        <Toggle checked={enabled} onChange={onToggle} />
        <button onClick={playPreview} className={styles.previewBtn} title="Play preview">▶</button>
      </div>
    </div>
  )
}
