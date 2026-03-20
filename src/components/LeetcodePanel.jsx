import { useState, useMemo, useEffect } from 'react'
import { NEETCODE_150 } from '../data'
import styles from './LeetcodePanel.module.css'

const LC_KEY = 'umer_lc_progress'
const ALL_TOPICS = [...new Set(NEETCODE_150.map(q => q.topic))]
const DIFFICULTIES = ['All', 'Easy', 'Medium', 'Hard']

function loadLC() {
  try {
    const raw = localStorage.getItem(LC_KEY)
    if (raw) return JSON.parse(raw).solved || {}
  } catch {}
  return {}
}

const DIFF_COLOR = {
  Easy:   { bg: 'var(--green-d)', text: 'var(--green)' },
  Medium: { bg: 'var(--amber-d)', text: 'var(--amber)' },
  Hard:   { bg: 'var(--red-d)',   text: 'var(--red)'   },
}

export default function LeetcodePanel() {
  const [solved, setSolved] = useState(loadLC)
  const [search, setSearch] = useState('')
  const [diffFilter, setDiffFilter] = useState('All')
  const [topicFilter, setTopicFilter] = useState('All')
  const [hideDone, setHideDone] = useState(false)
  const [collapsed, setCollapsed] = useState({})

  useEffect(() => {
    localStorage.setItem(LC_KEY, JSON.stringify({ solved }))
  }, [solved])

  const toggleSolved = (id) => {
    setSolved(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const totalSolved = Object.values(solved).filter(Boolean).length
  const totalPct = Math.round((totalSolved / 150) * 100)

  const filtered = useMemo(() => {
    return NEETCODE_150.filter(q => {
      if (diffFilter !== 'All' && q.difficulty !== diffFilter) return false
      if (topicFilter !== 'All' && q.topic !== topicFilter) return false
      if (hideDone && solved[q.id]) return false
      if (search && !q.title.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [diffFilter, topicFilter, hideDone, search, solved])

  const groupedTopics = useMemo(() => {
    const groups = {}
    ALL_TOPICS.forEach(t => { groups[t] = [] })
    filtered.forEach(q => { if (groups[q.topic]) groups[q.topic].push(q) })
    return groups
  }, [filtered])

  const toggleCollapse = (topic) => {
    setCollapsed(prev => ({ ...prev, [topic]: !prev[topic] }))
  }

  return (
    <div className={styles.panel}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Neetcode 150</h1>
          <div className={styles.subtitle}>DSA Interview Preparation Tracker</div>
        </div>
        <div className={styles.totalBadge}>
          <span className={styles.totalNum}>{totalSolved}</span>
          <span className={styles.totalDen}> / 150 solved</span>
        </div>
      </div>

      {/* Global progress bar */}
      <div className={styles.globalBarTrack}>
        <div
          className={styles.globalBarFill}
          style={{ width: `${totalPct}%` }}
        />
      </div>
      <div className={styles.globalPct}>{totalPct}% complete</div>

      {/* Filter bar */}
      <div className={styles.filterBar}>
        <select
          id="lc-topic-filter"
          className={styles.select}
          value={topicFilter}
          onChange={e => setTopicFilter(e.target.value)}
        >
          <option value="All">All Topics</option>
          {ALL_TOPICS.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <select
          id="lc-diff-filter"
          className={styles.select}
          value={diffFilter}
          onChange={e => setDiffFilter(e.target.value)}
        >
          {DIFFICULTIES.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <input
          id="lc-search"
          type="text"
          className={styles.search}
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <button
          id="lc-hide-done"
          className={`${styles.hideBtn} ${hideDone ? styles.hideBtnActive : ''}`}
          onClick={() => setHideDone(d => !d)}
        >
          {hideDone ? '◎ Show all' : '◉ Hide done'}
        </button>
      </div>

      {/* Topic groups */}
      <div className={styles.groups}>
        {ALL_TOPICS.map(topic => {
          const qs = groupedTopics[topic]
          if (!qs || qs.length === 0) return null

          const topicTotal = NEETCODE_150.filter(q => q.topic === topic).length
          const topicSolved = NEETCODE_150.filter(q => q.topic === topic && solved[q.id]).length
          const topicPct = Math.round((topicSolved / topicTotal) * 100)
          const isCollapsed = collapsed[topic]

          return (
            <div key={topic} className={styles.group}>
              <div className={styles.groupHeader} onClick={() => toggleCollapse(topic)}>
                <span className={styles.chevron} style={{ transform: isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)' }}>▾</span>
                <span className={styles.groupName}>{topic}</span>
                <span className={styles.groupCount}>{topicSolved}/{topicTotal}</span>
                <div className={styles.groupBarTrack}>
                  <div
                    className={styles.groupBarFill}
                    style={{ width: `${topicPct}%` }}
                  />
                </div>
                <span className={styles.groupPct}>{topicPct}%</span>
              </div>

              {!isCollapsed && (
                <div className={styles.questions}>
                  {qs.map(q => {
                    const isSolved = !!solved[q.id]
                    const dc = DIFF_COLOR[q.difficulty]
                    return (
                      <div
                        key={q.id}
                        id={`lc-q-${q.id}`}
                        className={`${styles.qRow} ${isSolved ? styles.qSolved : ''}`}
                        onClick={() => toggleSolved(q.id)}
                      >
                        <div className={`${styles.checkbox} ${isSolved ? styles.checked : ''}`}>
                          {isSolved ? '✓' : ''}
                        </div>
                        <span className={`${styles.qNum} mono`}>{q.id}.</span>
                        <span className={styles.qTitle}>{q.title}</span>
                        <span
                          className={styles.diffBadge}
                          style={{ background: dc.bg, color: dc.text }}
                        >
                          {q.difficulty}
                        </span>
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
