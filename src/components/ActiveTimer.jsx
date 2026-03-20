import styles from './ActiveTimer.module.css'

function pad(n) { return String(n).padStart(2, '0') }

const COLOR_MAP = {
  blue: '#4a9eff', green: '#22c77a', amber: '#f5a623',
  purple: '#a78bfa', pink: '#f472b6', red: '#f87171', teal: '#2dd4bf'
}
const DIM_MAP = {
  blue: 'rgba(74,158,255,0.12)', green: 'rgba(34,199,122,0.12)', amber: 'rgba(245,166,35,0.12)',
  purple: 'rgba(167,139,250,0.12)', pink: 'rgba(244,114,182,0.12)', red: 'rgba(248,113,113,0.12)', teal: 'rgba(45,212,191,0.12)'
}

export default function ActiveTimer({ timer, onStop, onCancel }) {
  if (!timer) return null

  const { elapsed, taskName, color } = timer
  const h = Math.floor(elapsed / 3600)
  const m = Math.floor((elapsed % 3600) / 60)
  const s = elapsed % 60
  const accent = COLOR_MAP[color] || 'var(--blue)'
  const dim = DIM_MAP[color] || 'var(--blue-d)'

  return (
    <div
      className={styles.wrapper}
      style={{ background: dim, borderColor: `${accent}30` }}
    >
      <div className={styles.badge} style={{ color: accent }}>⏱ TIMER RUNNING</div>
      <div className={styles.row}>
        <div>
          <div className={styles.taskName}>{taskName}</div>
          <div className={styles.display} style={{ color: accent }}>
            {pad(h)}:{pad(m)}:{pad(s)}
          </div>
        </div>
        <div className={styles.btns}>
          <button
            id="timer-stop"
            className={styles.stopBtn}
            style={{ background: accent }}
            onClick={onStop}
          >
            Stop & Log
          </button>
          <button
            id="timer-cancel"
            className={styles.cancelBtn}
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
