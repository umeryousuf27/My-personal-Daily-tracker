import styles from './Timeline.module.css'
import { useSettingsCtx } from '../context/SettingsContext'
import { useState, useEffect } from 'react'

const COLOR_MAP = {
  blue: '#4a9eff', green: '#22c77a', amber: '#f5a623',
  purple: '#a78bfa', pink: '#f472b6', red: '#f87171', teal: '#2dd4bf'
}
const DIM_MAP = {
  blue: 'rgba(74,158,255,0.12)', green: 'rgba(34,199,122,0.12)', amber: 'rgba(245,166,35,0.12)',
  purple: 'rgba(167,139,250,0.12)', pink: 'rgba(244,114,182,0.12)', red: 'rgba(248,113,113,0.12)', teal: 'rgba(45,212,191,0.12)'
}

const CAT_LABELS = {
  prayer: 'Prayer', dsa: 'DSA', db: 'Database', cn: 'Networks',
  spring: 'Spring Boot', react: 'React', quran: 'Quran'
}

export default function Timeline({ schedule, tasks, currentTaskId, lcSeconds, onToggle, onStartTimer, onResetDay }) {
  const { settings } = useSettingsCtx()
  const [bouncingCard, setBouncingCard] = useState(null)
  
  const handleToggle = (id) => {
    if (!tasks[id]) {
      setBouncingCard(id)
      setTimeout(() => setBouncingCard(null), 300)
    }
    onToggle(id)
  }

  // Next Task Banner Math
  const now = new Date()
  const currentTotalMins = now.getHours() * 60 + now.getMinutes()
  
  let nextTaskBanner = null
  if (settings.habit.anticipationMode) {
    const nextIdx = schedule.findIndex(s => s.h * 60 + s.m > currentTotalMins)
    if (nextIdx !== -1) {
      const nextTask = schedule[nextIdx]
      const diffMins = (nextTask.h * 60 + nextTask.m) - currentTotalMins
      if (diffMins > 0 && diffMins <= 15) {
        const curTask = schedule[nextIdx - 1]
        if (!curTask || tasks[curTask.id]) {
          nextTaskBanner = { task: nextTask.task, diff: diffMins }
        }
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Today's Schedule</span>
        <button id="reset-day" className={styles.resetBtn} onClick={onResetDay}>Reset Day</button>
      </div>

      {nextTaskBanner && (
        <div className={styles.nextBanner}>
          <span className={styles.nextText}>Next: <strong>{nextTaskBanner.task}</strong> · starting in {nextTaskBanner.diff} min</span>
        </div>
      )}

      <div className={styles.list}>
        {schedule.map((item, idx) => {
          const done = !!tasks[item.id]
          const isNow = item.id === currentTaskId
          const accent = COLOR_MAP[item.color] || 'var(--blue)'
          const dim = DIM_MAP[item.color] || 'var(--blue-d)'
          const isLast = idx === schedule.length - 1

          const anticipationPulse = isNow && !done && settings.habit.anticipationMode

          return (
            <div key={item.id} className={styles.row}>
              {/* Time column */}
              <div className={styles.timeCol}>
                <span className={`${styles.time} mono`}>{item.time}</span>
              </div>

              {/* Spine column */}
              <div className={styles.spineCol}>
                <div
                  className={styles.dot}
                  style={done
                    ? { background: accent, borderColor: accent }
                    : { background: 'var(--bg4)', borderColor: accent }
                  }
                >
                  {done && <span className={styles.checkIcon}>✓</span>}
                </div>
                {!isLast && <div className={styles.line} />}
              </div>

              {/* Card */}
              <div
                className={`${styles.card} ${done ? styles.done : ''} ${bouncingCard === item.id ? 'card-bounce' : ''}`}
                style={anticipationPulse ? { animation: 'nowPulse 2s ease infinite', borderColor: 'var(--green)' } : {}}
                onClick={() => handleToggle(item.id)}
              >
                <div className={styles.cardTop}>
                  <div>
                    <div className={`${styles.taskName} ${done ? styles.strikethrough : ''}`}>
                      {item.task}
                    </div>
                    <div className={styles.sub}>{item.sub}</div>
                  </div>
                  <div className={styles.cardTopRight}>
                    {isNow && !done && (
                      <span className={`${styles.nowBadge} mono`}>NOW</span>
                    )}
                    <span
                      className={styles.catBadge}
                      style={{ background: dim, color: accent }}
                    >
                      {CAT_LABELS[item.cat] || item.cat}
                    </span>
                  </div>
                </div>

                {/* Leetcode progress bar */}
                {item.id === 'lc' && (
                  <div className={styles.lcBar}>
                    <div
                      className={styles.lcFill}
                      style={{
                        width: `${Math.min(((lcSeconds || 0) / 10800) * 100, 100)}%`,
                        background: accent,
                      }}
                    />
                  </div>
                )}

                {/* Timer button */}
                {item.timeable && !done && (
                  <button
                    id={`timer-${item.id}`}
                    className={styles.timerBtn}
                    style={{ color: accent, borderColor: `${accent}30` }}
                    onClick={e => { e.stopPropagation(); onStartTimer(item.id, item.task, item.color) }}
                  >
                    ▶ Timer
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
