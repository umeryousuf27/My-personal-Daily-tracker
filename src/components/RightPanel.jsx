import { PRAYERS } from '../data'
import PrayerGrid from './PrayerGrid'
import ScreenTracker from './ScreenTracker'
import WeekChart from './WeekChart'
import NotifLog from './NotifLog'
import styles from './RightPanel.module.css'

function pad(n) { return String(n).padStart(2, '0') }
const DAYS_SHORT  = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

function MiniClock({ now }) {
  const h = pad(now.getHours()), m = pad(now.getMinutes()), s = pad(now.getSeconds())
  const dayName   = DAYS_SHORT[now.getDay()]
  const monthName = MONTHS_SHORT[now.getMonth()]
  const day       = now.getDate()

  const totalMins   = 17 * 60  // 5am–10pm window
  const elapsedMins = Math.max(0, (now.getHours() - 5) * 60 + now.getMinutes())
  const pct         = Math.min((elapsedMins / totalMins) * 100, 100)

  return (
    <div className={styles.miniClock}>
      <div className={`${styles.clockDisplay} mono`}>
        {h}:{m}<span className={styles.clockSec}>:{s}</span>
      </div>
      <div className={styles.clockDate}>{dayName}, {monthName} {day}</div>
      <div className={styles.dayBarTrack}>
        <div className={styles.dayBarFill} style={{ width: `${pct}%` }} />
      </div>
      <div className={styles.dayBarLabels}>
        <span>5am</span>
        <span>{Math.round(pct)}% of day</span>
        <span>10pm</span>
      </div>
    </div>
  )
}

export default function RightPanel({
  now, tasks, screenMins, weekScores, weekData,
  notifLog, onToggleTask, onAddScreen, onResetScreen, onClearLog
}) {
  return (
    <aside className={styles.panel}>
      <MiniClock now={now} />
      <PrayerGrid prayers={PRAYERS} tasks={tasks} onToggle={onToggleTask} />
      <ScreenTracker screenMins={screenMins} onAdd={onAddScreen} onReset={onResetScreen} />
      <WeekChart weekScores={weekScores} weekData={weekData} />
      <NotifLog log={notifLog} onClear={onClearLog} />
    </aside>
  )
}
