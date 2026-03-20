import styles from './WeekChart.module.css'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const TOTAL = 11

function getDayISO(date) { return date.toISOString().slice(0, 10) }

function getWeekDates() {
  const today = new Date()
  const monday = new Date(today)
  monday.setDate(today.getDate() - ((today.getDay() + 6) % 7))
  return DAYS.map((_, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    return getDayISO(d)
  })
}

function barColor(score) {
  const pct = score / TOTAL
  if (pct >= 0.82) return 'var(--green)'
  if (pct >= 0.55) return 'var(--blue)'
  if (pct >= 0.27) return 'var(--amber)'
  if (pct > 0)     return 'var(--red)'
  return 'var(--bg4)'
}

function gradeLabel(score) {
  const pct = score / TOTAL
  if (pct >= 0.82) return '🔥'
  if (pct >= 0.55) return '✓'
  if (pct >= 0.27) return '~'
  if (pct > 0)     return '↓'
  return ''
}

export default function WeekChart({ weekScores, weekData }) {
  const todayISO  = getDayISO(new Date())
  const weekDates = getWeekDates()

  const totalScore  = weekDates.reduce((sum, d) => sum + (weekScores?.[d] || 0), 0)
  const avgScore    = (totalScore / weekDates.filter(d => weekScores?.[d] > 0).length) || 0
  const daysLogged  = weekDates.filter(d => weekScores?.[d] > 0).length
  const bestDay     = weekDates.reduce((best, d) => (weekScores?.[d] || 0) > (weekScores?.[best] || 0) ? d : best, weekDates[0])

  const maxScore = Math.max(...weekDates.map(d => weekScores?.[d] || 0), 1)

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Weekly Progress</span>
        <div className={styles.stats}>
          <span className={styles.statItem}>
            <span className={styles.statNum}>{daysLogged}</span>
            <span className={styles.statLbl}>days active</span>
          </span>
          <span className={styles.divider}>·</span>
          <span className={styles.statItem}>
            <span className={styles.statNum}>{isNaN(avgScore) ? 0 : avgScore.toFixed(1)}</span>
            <span className={styles.statLbl}>avg score</span>
          </span>
        </div>
      </div>

      {/* Bar chart */}
      <div className={styles.chart}>
        {/* Y-axis labels */}
        <div className={styles.yAxis}>
          <span>11</span>
          <span>8</span>
          <span>5</span>
          <span>0</span>
        </div>

        {/* Grid + bars */}
        <div className={styles.barsArea}>
          {/* Grid lines */}
          <div className={styles.gridLines}>
            {[11, 8, 5, 0].map(v => (
              <div key={v} className={styles.gridLine} style={{ bottom: `${(v / 11) * 100}%` }} />
            ))}
          </div>

          {weekDates.map((date, i) => {
            const score   = weekScores?.[date] || 0
            const isToday = date === todayISO
            const isFuture = date > todayISO
            const pct    = maxScore > 0 ? (score / 11) * 100 : 0
            const color  = barColor(score)

            return (
              <div key={date} className={styles.barCol}>
                <div className={styles.barWrap}>
                  {score > 0 && (
                    <div className={styles.barLabel} style={{ color }}>
                      {score}{gradeLabel(score)}
                    </div>
                  )}
                  <div
                    className={`${styles.bar} ${isToday ? styles.barToday : ''} ${isFuture ? styles.barFuture : ''}`}
                    style={{
                      height: isFuture ? '0%' : `${Math.max(pct, score > 0 ? 4 : 0)}%`,
                      background: isFuture ? 'transparent' : color,
                      opacity: isFuture ? 0.2 : 1,
                    }}
                  />
                </div>
                <div className={`${styles.dayLabel} ${isToday ? styles.dayToday : ''}`}>
                  {DAYS[i]}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Summary row */}
      <div className={styles.summaryRow}>
        <div className={styles.summaryItem}>
          <span className={styles.summaryIcon}>📅</span>
          <span className={styles.summaryText}>Week total: <strong>{totalScore}/{TOTAL * daysLogged || TOTAL}</strong></span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.summaryIcon}>🏆</span>
          <span className={styles.summaryText}>Best: <strong>{weekScores?.[bestDay] || 0}</strong> tasks</span>
        </div>
      </div>
    </div>
  )
}
