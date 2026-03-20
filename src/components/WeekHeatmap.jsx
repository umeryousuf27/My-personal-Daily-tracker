import styles from './WeekHeatmap.module.css'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function getDayISO(date) {
  return date.toISOString().slice(0, 10)
}

function getWeekDates() {
  const today = new Date()
  const dow = today.getDay() // 0=Sun
  const monday = new Date(today)
  monday.setDate(today.getDate() - ((dow + 6) % 7))
  return DAYS.map((_, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    return getDayISO(d)
  })
}

function cellClass(score, isToday) {
  if (score === undefined || score === null) return ''
  if (score >= 9) return 'full'
  if (score >= 6) return 'good'
  if (score >= 3) return 'partial'
  if (score > 0) return 'faint'
  return ''
}

export default function WeekHeatmap({ weekScores }) {
  const todayISO = getDayISO(new Date())
  const weekDates = getWeekDates()

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>This Week</span>
      </div>
      <div className={styles.grid}>
        {weekDates.map((date, i) => {
          const score = weekScores?.[date]
          const isToday = date === todayISO
          const cls = cellClass(score, isToday)

          return (
            <div key={date} className={styles.col}>
              <div className={styles.dayLabel}>{DAYS[i]}</div>
              <div
                className={`${styles.cell} ${isToday ? styles.today : ''} ${cls ? styles[cls] : ''}`}
                title={score !== undefined ? `${date}: ${score}/11` : date}
              >
                {score > 0 ? score : ''}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
