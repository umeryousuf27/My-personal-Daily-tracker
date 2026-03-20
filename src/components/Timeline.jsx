import styles from './Timeline.module.css'

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
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Today's Schedule</span>
        <button id="reset-day" className={styles.resetBtn} onClick={onResetDay}>Reset Day</button>
      </div>
      <div className={styles.list}>
        {schedule.map((item, idx) => {
          const done = !!tasks[item.id]
          const isNow = item.id === currentTaskId
          const accent = COLOR_MAP[item.color] || 'var(--blue)'
          const dim = DIM_MAP[item.color] || 'var(--blue-d)'
          const isLast = idx === schedule.length - 1

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
                />
                {!isLast && <div className={styles.line} />}
              </div>

              {/* Card */}
              <div
                className={`${styles.card} ${done ? styles.done : ''} ${isNow && !done ? styles.current : ''}`}
                onClick={() => onToggle(item.id)}
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
