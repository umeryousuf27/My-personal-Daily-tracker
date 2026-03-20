import { PRAYERS } from '../data'
import PrayerGrid from './PrayerGrid'
import ScreenTracker from './ScreenTracker'
import WeekHeatmap from './WeekHeatmap'
import NotifLog from './NotifLog'
import styles from './RightPanel.module.css'

function pad(n) { return String(n).padStart(2, '0') }
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

function MiniClock({ now }) {
  const h = pad(now.getHours())
  const m = pad(now.getMinutes())
  const s = pad(now.getSeconds())
  const dayName = DAYS[now.getDay()]
  const monthName = MONTHS[now.getMonth()]
  const day = now.getDate()

  // Day progress: 5am = 0%, 10pm = 100%
  const totalMins = 17 * 60 // 5am to 10pm = 17h
  const elapsedMins = Math.max(0, (now.getHours() - 5) * 60 + now.getMinutes())
  const pct = Math.min((elapsedMins / totalMins) * 100, 100)

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
  now, tasks, screenMins, weekScores,
  notifLog, onToggleTask, onAddScreen, onResetScreen, onClearLog
}) {
  return (
    <aside className={styles.panel}>
      <MiniClock now={now} />
      <PrayerGrid prayers={PRAYERS} tasks={tasks} onToggle={onToggleTask} />
      <ScreenTracker screenMins={screenMins} onAdd={onAddScreen} onReset={onResetScreen} />
      <WeekHeatmap weekScores={weekScores} />
      <NotifLog log={notifLog} onClear={onClearLog} />
    </aside>
  )
}
