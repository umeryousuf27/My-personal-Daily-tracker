import styles from './Topbar.module.css'

function pad(n) { return String(n).padStart(2, '0') }

const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']

export default function Topbar({ now, tasksDone, total, notifGranted, onNotif }) {
  const hh = pad(now.getHours())
  const mm = pad(now.getMinutes())
  const ss = pad(now.getSeconds())

  const dayName = DAYS[now.getDay()]
  const monthName = MONTHS[now.getMonth()]
  const day = now.getDate()

  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <span>U</span>
        </div>
        <span className={styles.appName}>Daily Tracker</span>
      </div>

      <div className={styles.center}>
        <span className={styles.clock}>
          <span className={styles.clockMain}>{hh}:{mm}</span>
          <span className={styles.clockSec}>:{ss}</span>
        </span>
      </div>

      <div className={styles.right}>
        <span className={styles.date}>{dayName}, {monthName} {day}</span>
        <div className={styles.pill}>
          <span className={styles.pillLabel}>Tasks</span>
          <span className={styles.pillVal}>{tasksDone} / {total}</span>
        </div>
        <button
          id="notif-btn"
          className={styles.bellBtn}
          onClick={onNotif}
          title={notifGranted ? 'Notifications on' : 'Enable notifications'}
        >
          <span className={styles.bellIcon}>{notifGranted ? '🔔' : '🔕'}</span>
          <span
            className={styles.bellDot}
            style={{ background: notifGranted ? 'var(--green)' : 'var(--text3)' }}
          />
        </button>
      </div>
    </header>
  )
}
