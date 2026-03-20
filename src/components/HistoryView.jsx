import { useState } from 'react'
import { SCHEDULE } from '../data'
import styles from './HistoryView.module.css'

const DAYS_FULL = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const MONTHS    = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

const CAT_COLOR = {
  prayer: 'var(--green)', dsa: 'var(--blue)', db: 'var(--amber)',
  cn: 'var(--red)', spring: 'var(--purple)', react: 'var(--teal)', quran: 'var(--pink)',
}
const CAT_DIM = {
  prayer: 'var(--green-d)', dsa: 'var(--blue-d)', db: 'var(--amber-d)',
  cn: 'var(--red-d)', spring: 'var(--purple-d)', react: 'var(--teal-d)', quran: 'var(--pink-d)',
}

function formatDate(isoDate) {
  const d   = new Date(isoDate + 'T12:00:00')
  const day = DAYS_FULL[d.getDay()]
  const mon = MONTHS[d.getMonth()]
  return `${day}, ${mon} ${d.getDate()}`
}

function scoreGrade(score) {
  if (score >= 9)  return { label: 'Excellent', color: 'var(--green)' }
  if (score >= 7)  return { label: 'Great',     color: 'var(--blue)'  }
  if (score >= 5)  return { label: 'Good',      color: 'var(--amber)' }
  if (score >= 3)  return { label: 'Fair',      color: 'var(--amber)' }
  return                  { label: 'Low',       color: 'var(--red)'   }
}

function formatLcTime(secs) {
  if (!secs) return '0m'
  const h = Math.floor(secs / 3600)
  const m = Math.floor((secs % 3600) / 60)
  return h > 0 ? `${h}h ${m}m` : `${m}m`
}

export default function HistoryView({ weekData, weekScores }) {
  const [expanded, setExpanded] = useState(null)

  // Get all days sorted desc
  const days = Object.keys(weekData || {})
    .sort((a, b) => b.localeCompare(a))

  if (days.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyIcon}>📅</div>
        <div className={styles.emptyTitle}>No history yet</div>
        <div className={styles.emptySub}>
          Complete today's tasks and they'll appear here tomorrow.
        </div>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Progress History</h1>
        <div className={styles.pageSub}>Last {days.length} day{days.length > 1 ? 's' : ''} recorded</div>
      </div>

      <div className={styles.days}>
        {days.map(date => {
          const data   = weekData[date]
          const score  = data.score || 0
          const grade  = scoreGrade(score)
          const isOpen = expanded === date
          const tasksArr = SCHEDULE.map(s => ({ ...s, done: !!data.tasks?.[s.id] }))
          const doneTasks   = tasksArr.filter(t => t.done)
          const missedTasks = tasksArr.filter(t => !t.done)

          return (
            <div key={date} className={`${styles.dayCard} ${isOpen ? styles.open : ''}`}>
              {/* Day header — always visible */}
              <div className={styles.dayHeader} onClick={() => setExpanded(isOpen ? null : date)}>
                <div className={styles.dateRow}>
                  <div>
                    <div className={styles.dateLabel}>{formatDate(date)}</div>
                    <div className={styles.dateISO}>{date}</div>
                  </div>
                  <div className={styles.scoreArea}>
                    <div
                      className={styles.scoreBig}
                      style={{ color: grade.color }}
                    >
                      {score}<span className={styles.scoreTotal}>/11</span>
                    </div>
                    <div className={styles.gradeLabel} style={{ color: grade.color }}>
                      {grade.label}
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressFill}
                    style={{
                      width: `${(score / 11) * 100}%`,
                      background: grade.color,
                    }}
                  />
                </div>

                {/* Quick stats */}
                <div className={styles.quickStats}>
                  <span className={styles.qs}>
                    <span className={styles.qsIcon}>⏱</span>
                    LC: <strong>{formatLcTime(data.lcSeconds)}</strong>
                  </span>
                  <span className={styles.qs}>
                    <span className={styles.qsIcon}>📱</span>
                    Screen: <strong>{data.screenMins || 0}m</strong>
                  </span>
                  <span className={styles.qs}>
                    <span className={styles.qsIcon}>🙏</span>
                    Prayers: <strong>{['fajr','dhuhr','asr','maghrib','isha'].filter(p => data.tasks?.[p]).length}/5</strong>
                  </span>
                  <span className={styles.chevron}>{isOpen ? '▲' : '▼'}</span>
                </div>
              </div>

              {/* Expanded task breakdown */}
              {isOpen && (
                <div className={styles.breakdown}>
                  {doneTasks.length > 0 && (
                    <div className={styles.taskGroup}>
                      <div className={styles.taskGroupLabel}>✓ Completed ({doneTasks.length})</div>
                      <div className={styles.taskList}>
                        {doneTasks.map(t => (
                          <div key={t.id} className={styles.taskRow}>
                            <div className={styles.taskDot} style={{ background: CAT_COLOR[t.cat] }} />
                            <span className={styles.taskTime}>{t.time}</span>
                            <span className={styles.taskName}>{t.task}</span>
                            <span
                              className={styles.taskBadge}
                              style={{ background: CAT_DIM[t.cat], color: CAT_COLOR[t.cat] }}
                            >
                              done
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {missedTasks.length > 0 && (
                    <div className={styles.taskGroup}>
                      <div className={styles.taskGroupLabel} style={{ color: 'var(--red)' }}>✗ Missed ({missedTasks.length})</div>
                      <div className={styles.taskList}>
                        {missedTasks.map(t => (
                          <div key={t.id} className={`${styles.taskRow} ${styles.missed}`}>
                            <div className={styles.taskDot} style={{ background: 'var(--text3)' }} />
                            <span className={styles.taskTime}>{t.time}</span>
                            <span className={styles.taskName}>{t.task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
