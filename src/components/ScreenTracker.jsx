import styles from './ScreenTracker.module.css'

function screenColor(mins) {
  if (mins > 90) return 'var(--red)'
  if (mins > 60) return 'var(--amber)'
  return 'var(--green)'
}

export default function ScreenTracker({ screenMins, onAdd, onReset }) {
  const mins = screenMins || 0
  const color = screenColor(mins)
  const pct = Math.min((mins / 240) * 100, 100)
  const display = mins >= 60 ? `${(mins / 60).toFixed(1)}h` : `${mins}m`

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Screen Time</span>
        <span className={styles.limit}>limit: 1.5h</span>
      </div>

      <div className={styles.bigNum} style={{ color }}>{display}</div>

      <div className={styles.barTrack}>
        <div
          className={styles.barFill}
          style={{ width: `${pct}%`, background: color }}
        />
        {/* Tick marks */}
        <div className={styles.tick} style={{ left: '0%' }} />
        <div className={styles.tick} style={{ left: `${(60/240)*100}%` }} />
        <div className={styles.tick} style={{ left: `${(90/240)*100}%`, background: 'var(--amber)' }} />
        <div className={styles.tick} style={{ left: '100%' }} />
      </div>

      <div className={styles.tickLabels}>
        <span>0</span>
        <span>1h</span>
        <span>1.5h</span>
        <span>4h</span>
      </div>

      <div className={styles.addBtns}>
        <button id="screen-15" className={styles.addBtn} onClick={() => onAdd(15)}>+15 min</button>
        <button id="screen-30" className={styles.addBtn} onClick={() => onAdd(30)}>+30 min</button>
        <button id="screen-60" className={styles.addBtn} onClick={() => onAdd(60)}>+1 hr</button>
      </div>

      <button id="screen-reset" className={styles.resetBtn} onClick={onReset}>
        Reset Screen Time
      </button>
    </div>
  )
}
