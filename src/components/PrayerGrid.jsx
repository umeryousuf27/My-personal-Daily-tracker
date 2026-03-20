import styles from './PrayerGrid.module.css'

export default function PrayerGrid({ prayers, tasks, onToggle }) {
  const done = prayers.filter(p => tasks[p.id]).length

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Five Prayers</span>
        <span className={styles.count} style={{ color: done === 5 ? 'var(--green)' : 'var(--text2)' }}>
          {done} / 5
        </span>
      </div>
      <div className={styles.grid}>
        {prayers.map(p => {
          const isDone = !!tasks[p.id]
          return (
            <button
              key={p.id}
              id={`prayer-${p.id}`}
              className={`${styles.slot} ${isDone ? styles.done : ''}`}
              onClick={() => onToggle(p.id)}
              title={`${p.name} - ${p.time}`}
            >
              <div className={styles.check}>
                {isDone ? '✓' : '○'}
              </div>
              <div className={styles.name}>{p.name}</div>
              <div className={`${styles.time} mono`}>{p.time}</div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
