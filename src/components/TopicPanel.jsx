import { useState, useMemo, useEffect } from 'react'
import { useTracker } from '../hooks/useTracker'
import { Sounds } from '../utils/sounds'
import styles from './TopicPanel.module.css'

const DIFF_COLOR = {
  Fundamental: { bg: 'var(--green-d)', text: 'var(--green)' },
  Intermediate: { bg: 'var(--amber-d)', text: 'var(--amber)' },
  Advanced: { bg: 'var(--red-d)', text: 'var(--red)' },
  Easy: { bg: 'var(--green-d)', text: 'var(--green)' },
  Medium: { bg: 'var(--amber-d)', text: 'var(--amber)' },
  Hard: { bg: 'var(--red-d)', text: 'var(--red)' },
}

export default function TopicPanel({
  title,
  subtitle = 'Interview Preparation',
  storageKey,
  topics,
  groupOrder,
  accentColor = 'var(--blue)',
  accentColorDark = 'var(--blue-d)',
  xpPerTopic,
  milestones = [],
  milestoneMessages = {}
}) {
  const { addXP, pushNotif, soundEnabled } = useTracker()
  
  const [solved, setSolved] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey)
      if (raw) return JSON.parse(raw).solved || {}
    } catch {}
    return {}
  })

  const [search, setSearch] = useState('')
  const [diffFilter, setDiffFilter] = useState('All')
  const [topicFilter, setTopicFilter] = useState('All')
  const [hideDone, setHideDone] = useState(false)
  const [collapsed, setCollapsed] = useState({})

  const totalTopics = topics.length
  const totalSolved = Object.values(solved).filter(Boolean).length
  const totalPct = Math.round((totalSolved / totalTopics) * 100) || 0

  const ALL_TOPICS = groupOrder || [...new Set(topics.map(t => t.group || t.topic))]
  const DIFFICULTIES = ['All', ...[...new Set(topics.map(t => t.difficulty))]]

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify({ solved }))
    window.dispatchEvent(new Event('umer_progress_updated'))
  }, [solved, storageKey])

  const toggleSolved = (id) => {
    const wasDone = solved[id]
    setSolved(prev => ({ ...prev, [id]: !wasDone }))

    if (!wasDone) {
      if (soundEnabled) Sounds.taskComplete()
      if (xpPerTopic) addXP(xpPerTopic)
      
      const newTotal = totalSolved + 1
      if (milestones.includes(newTotal)) {
        pushNotif('Milestone Reached!', milestoneMessages[newTotal] || `You've completed ${newTotal} topics. Keep going!`, 'amber')
        if (soundEnabled) Sounds.streakMilestone()
      } else {
        // Group completion checking
        const group = topics.find(t => t.id === id)?.group || topics.find(t => t.id === id)?.topic
        if (group) {
          const groupTopics = topics.filter(t => (t.group || t.topic) === group)
          const allDone = groupTopics.every(t => t.id === id ? true : solved[t.id])
          if (allDone) {
             pushNotif(`${group} mastered!`, 'All topics in this group complete.', 'green')
             if (soundEnabled) Sounds.lcMilestone()
          }
        }
      }
    } else {
      if (soundEnabled) Sounds.taskUncomplete()
    }
  }

  const filtered = useMemo(() => {
    return topics.filter(q => {
      if (diffFilter !== 'All' && q.difficulty !== diffFilter) return false
      if (topicFilter !== 'All' && (q.group || q.topic) !== topicFilter) return false
      if (hideDone && solved[q.id]) return false
      if (search && !q.title.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [diffFilter, topicFilter, hideDone, search, solved, topics])

  const groupedTopics = useMemo(() => {
    const groups = {}
    ALL_TOPICS.forEach(t => { groups[t] = [] })
    filtered.forEach(q => { 
      const g = q.group || q.topic
      if (groups[g]) groups[g].push(q) 
    })
    return groups
  }, [filtered, ALL_TOPICS])

  const toggleCollapse = (topic) => {
    setCollapsed(prev => ({ ...prev, [topic]: !prev[topic] }))
  }

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
        <div className={styles.totalBadge}>
          <span className={styles.totalNum} style={{ color: accentColor }}>{totalSolved}</span>
          <span className={styles.totalDen}> / {totalTopics} covered</span>
        </div>
      </div>

      <div className={styles.globalBarTrack} style={{ backgroundColor: accentColorDark }}>
        <div
          className={styles.globalBarFill}
          style={{ width: `${totalPct}%`, backgroundColor: accentColor }}
        />
      </div>
      <div className={styles.globalPct}>{totalPct}% complete</div>

      <div className={styles.filterBar}>
        <select
          className={styles.select}
          value={topicFilter}
          onChange={e => setTopicFilter(e.target.value)}
        >
          <option value="All">All Groups</option>
          {ALL_TOPICS.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <select
          className={styles.select}
          value={diffFilter}
          onChange={e => setDiffFilter(e.target.value)}
        >
          {DIFFICULTIES.map(d => (
            <option key={d} value={d}>{d === 'All' ? 'All Difficulties' : d}</option>
          ))}
        </select>

        <input
          type="text"
          className={styles.search}
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <button
          className={`${styles.hideBtn} ${hideDone ? styles.hideBtnActive : ''}`}
          onClick={() => setHideDone(d => !d)}
        >
          {hideDone ? '◎ Show all' : '◉ Hide done'}
        </button>
      </div>

      <div className={styles.groups}>
        {ALL_TOPICS.map(topic => {
          const qs = groupedTopics[topic]
          if (!qs || qs.length === 0) return null

          const topicTotalList = topics.filter(q => (q.group || q.topic) === topic)
          const topicTotal = topicTotalList.length
          const topicSolved = topicTotalList.filter(q => solved[q.id]).length
          const topicPct = Math.round((topicSolved / topicTotal) * 100) || 0
          const isCollapsed = collapsed[topic]

          return (
            <div key={topic} className={styles.group}>
              <div className={styles.groupHeader} onClick={() => toggleCollapse(topic)}>
                <span className={styles.chevron} style={{ transform: isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)' }}>▾</span>
                <span className={styles.groupName}>{topic}</span>
                <span className={styles.groupCount}>{topicSolved}/{topicTotal}</span>
                <div className={styles.groupBarTrack} style={{ backgroundColor: accentColorDark }}>
                  <div
                    className={styles.groupBarFill}
                    style={{ width: `${topicPct}%`, backgroundColor: accentColor }}
                  />
                </div>
                <span className={styles.groupPct}>{topicPct}%</span>
              </div>

              {!isCollapsed && (
                <div className={styles.questions}>
                  {qs.map(q => {
                    const isSolved = !!solved[q.id]
                    const dc = DIFF_COLOR[q.difficulty] || DIFF_COLOR.Medium
                    return (
                      <div
                        key={q.id}
                        className={`${styles.qRow} ${isSolved ? styles.qSolved : ''}`}
                        onClick={() => toggleSolved(q.id)}
                      >
                        <div className={styles.qRowLeft}>
                          <div className={`${styles.checkbox} ${isSolved ? styles.checked : ''}`}>
                            {isSolved ? '✓' : ''}
                          </div>
                        </div>
                        <div className={styles.qRowCenter}>
                          <div className={styles.qRowTop}>
                            {q.id && <span className={`${styles.qNum} mono`}>{q.id}.</span>}
                            <span className={styles.qTitle}>{q.title}</span>
                          </div>
                          {q.description && <div className={styles.qDesc}>{q.description}</div>}
                        </div>
                        <div className={styles.qRowRight}>
                          <span
                            className={styles.diffBadge}
                            style={{ background: dc.bg, color: dc.text }}
                          >
                            {q.difficulty}
                          </span>
                          {q.resource && (
                            <a
                              href={q.resource}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.lcLink}
                              onClick={e => e.stopPropagation()}
                              title="Open Resource"
                            >
                              ↗
                            </a>
                          )}
                          {q.slug && (
                            <a
                              href={`https://leetcode.com/problems/${q.slug}/`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.lcLink}
                              onClick={e => e.stopPropagation()}
                              title="Open on LeetCode"
                            >
                              ↗
                            </a>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
