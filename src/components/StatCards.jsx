import styles from './StatCards.module.css'

function fmtLcTime(secs) {
  const h = Math.floor(secs / 3600)
  const m = Math.floor((secs % 3600) / 60)
  if (h === 0) return `${m}m`
  return `${h}h ${m}m`
}

function screenColor(mins) {
  if (mins > 90) return 'var(--red)'
  if (mins > 60) return 'var(--amber)'
  return 'var(--green)'
}

function screenDimColor(mins) {
  if (mins > 90) return 'var(--red-d)'
  if (mins > 60) return 'var(--amber-d)'
  return 'var(--green-d)'
}

function Bar({ pct, color }) {
  return (
    <div className={styles.barTrack}>
      <div
        className={styles.barFill}
        style={{ width: `${Math.min(pct, 100)}%`, background: color }}
      />
    </div>
  )
}

export default function StatCards({ tasksDone, total, lcSeconds, screenMins, prayersDone }) {
  const lcPct = Math.min(((lcSeconds || 0) / 10800) * 100, 100)
  const screenPct = Math.min(((screenMins || 0) / 90) * 100, 100)
  const taskPct = total > 0 ? (tasksDone / total) * 100 : 0
  const prayerPct = (prayersDone / 5) * 100
  const sc = screenColor(screenMins || 0)
  const sd = screenDimColor(screenMins || 0)

  const cards = [
    {
      id: 'stat-tasks',
      label: 'Tasks Complete',
      value: `${tasksDone} / ${total}`,
      color: 'var(--green)',
      dimColor: 'var(--green-d)',
      pct: taskPct,
      sub: `${Math.round(taskPct)}% done today`,
    },
    {
      id: 'stat-lc',
      label: 'Leetcode / DSA',
      value: fmtLcTime(lcSeconds || 0),
      color: 'var(--blue)',
      dimColor: 'var(--blue-d)',
      pct: lcPct,
      sub: `${Math.round(lcPct)}% of 3h goal`,
    },
    {
      id: 'stat-screen',
      label: 'Screen Time',
      value: screenMins >= 60 ? `${(screenMins / 60).toFixed(1)}h` : `${screenMins || 0}m`,
      color: sc,
      dimColor: sd,
      pct: screenPct,
      sub: screenMins > 90 ? '⚠ Limit exceeded' : `${90 - (screenMins || 0)}m remaining`,
    },
    {
      id: 'stat-prayers',
      label: 'Prayers Done',
      value: `${prayersDone} / 5`,
      color: 'var(--green)',
      dimColor: 'var(--green-d)',
      pct: prayerPct,
      sub: `${5 - prayersDone} remaining`,
    },
  ]

  return (
    <div className={styles.grid}>
      {cards.map(card => (
        <div key={card.id} id={card.id} className={styles.card}>
          <div className={styles.accent} style={{ background: card.color }} />
          <div className={styles.inner}>
            <div className={styles.cardLabel}>{card.label}</div>
            <div className={styles.cardValue} style={{ color: card.color }}>{card.value}</div>
            <Bar pct={card.pct} color={card.color} />
            <div className={styles.cardSub}>{card.sub}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
