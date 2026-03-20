import styles from './NotifLog.module.css'

const COLOR_MAP = {
  blue: '#4a9eff', green: '#22c77a', amber: '#f5a623',
  purple: '#a78bfa', pink: '#f472b6', red: '#f87171', teal: '#2dd4bf'
}

export default function NotifLog({ log, onClear }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Reminders</span>
        {log.length > 0 && (
          <button id="clear-log" className={styles.clearBtn} onClick={onClear}>Clear</button>
        )}
      </div>

      {log.length === 0 ? (
        <div className={styles.empty}>No reminders yet. They&apos;ll appear here.</div>
      ) : (
        <div className={styles.list}>
          {log.slice(0, 8).map(entry => (
            <div key={entry.id} className={styles.entry}>
              <div
                className={styles.dot}
                style={{ background: COLOR_MAP[entry.color] || 'var(--blue)' }}
              />
              <div className={styles.body}>
                <div className={styles.entryTitle}>{entry.title}</div>
                <div className={styles.entryBody}>{entry.body}</div>
              </div>
              <div className={`${styles.time} mono`}>{entry.time}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
