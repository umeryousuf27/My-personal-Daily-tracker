import { useMemo, useState, useEffect } from 'react'
import { QUOTES } from '../data'
import styles from './Sidebar.module.css'

const NAV_ITEMS = [
  { id: 'today',   icon: '◈', label: 'Today',          color: 'blue',   section: 'Overview' },
  { id: 'history', icon: '📅', label: 'History',        color: 'purple', section: 'Overview' },
  { id: 'week',    icon: '⬡', label: 'This Week',      color: 'teal',   section: 'Overview' },
  { id: 'prayer',  icon: '☽', label: 'Prayers',        color: 'green',  section: 'Focus Areas', badge: true, badgeType: 'prayers' },
  { id: 'lc',      icon: '⬡', label: 'DSA / Leetcode', color: 'blue',   section: 'Focus Areas', badge: true, badgeType: 'lc' },
  { id: 'spring',  icon: '⬡', label: 'Spring Boot',    color: 'purple', section: 'Focus Areas', badge: true, badgeType: 'spring' },
  { id: 'db',      icon: '⬡', label: 'SQL / DBs',      color: 'amber',  section: 'Focus Areas', badge: true, badgeType: 'db' },
  { id: 'quran',   icon: '✦', label: 'Quran',          color: 'pink',   section: 'Focus Areas' },
  { id: 'screen',  icon: '◉', label: 'Screen Time',    color: 'amber',  section: 'Limits',      badge: true, badgeType: 'screen' },
  { id: 'ai',      icon: '✦', label: 'AI Prep Guide',  color: 'teal',   section: 'Tools' },
  { id: 'settings',icon: '⚙', label: 'Settings',       color: 'text3',  section: 'Tools' }
]

const COLOR_MAP = {
  blue: '#4a9eff', green: '#22c77a', amber: '#f5a623',
  purple: '#a78bfa', pink: '#f472b6', red: '#f87171', teal: '#2dd4bf',
  text3: '#55555f',
}
const DIM_MAP = {
  blue: 'rgba(74,158,255,0.12)', green: 'rgba(34,199,122,0.12)', amber: 'rgba(245,166,35,0.12)',
  purple: 'rgba(167,139,250,0.12)', pink: 'rgba(244,114,182,0.12)', red: 'rgba(248,113,113,0.12)', teal: 'rgba(45,212,191,0.12)',
  text3: 'rgba(85,85,95,0.12)',
}

export default function Sidebar({ prayersDone, lcHours, screenMins, onSetView, activeView, soundEnabled, onToggleSound }) {
  const quote = useMemo(() => QUOTES[Math.floor(Math.random() * QUOTES.length)], [])

  const [springCount, setSpringCount] = useState(0)
  const [dbCount, setDbCount] = useState(0)
  const [lcCount, setLcCount] = useState(0)

  useEffect(() => {
    const updateCounts = () => {
       const bStr = localStorage.getItem('umer_spring_progress')
       if(bStr) setSpringCount(Object.values(JSON.parse(bStr).solved || {}).filter(Boolean).length)
       
       const dStr = localStorage.getItem('umer_db_progress')
       if(dStr) setDbCount(Object.values(JSON.parse(dStr).solved || {}).filter(Boolean).length)
       
       const cStr = localStorage.getItem('umer_lc_progress')
       if(cStr) setLcCount(Object.values(JSON.parse(cStr).solved || {}).filter(Boolean).length)
    }
    updateCounts()
    window.addEventListener('umer_progress_updated', updateCounts)
    return () => window.removeEventListener('umer_progress_updated', updateCounts)
  }, [])

  const getBadge = (item) => {
    if (!item.badge) return null
    if (item.badgeType === 'prayers') return `${prayersDone}/5`
    if (item.badgeType === 'lc') return `${lcCount}/150`
    if (item.badgeType === 'spring') return `${springCount}/89`
    if (item.badgeType === 'db') return `${dbCount}/74`
    if (item.badgeType === 'screen') return `${screenMins}m`
    return null
  }

  const sections = ['Overview', 'Focus Areas', 'Limits', 'Tools']

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {sections.map(section => (
          <div key={section} className={styles.section}>
            <div className={styles.sectionLabel}>{section}</div>
            {NAV_ITEMS.filter(i => i.section === section).map(item => {
              const isActive = activeView === item.id
              const badge = getBadge(item)
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                  onClick={() => onSetView(item.id)}
                  style={isActive ? { background: 'var(--bg3)', borderColor: 'var(--border2)' } : {}}
                >
                  <span
                    className={styles.icon}
                    style={{
                      background: DIM_MAP[item.color],
                      color: COLOR_MAP[item.color],
                    }}
                  >
                    {item.icon}
                  </span>
                  <span className={styles.label}>{item.label}</span>
                  {badge && (
                    <span className={styles.badge} style={{ color: COLOR_MAP[item.color] }}>
                      {badge}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        ))}
      </nav>

      {/* Sound toggle */}
      <div className={styles.soundRow}>
        <span className={styles.soundLabel}>🔔 Notification Sound</span>
        <button
          id="sound-toggle"
          className={`${styles.soundBtn} ${soundEnabled ? styles.soundOn : ''}`}
          onClick={onToggleSound}
          title={soundEnabled ? 'Sound ON — click to mute' : 'Sound OFF — click to enable'}
        >
          {soundEnabled ? 'ON' : 'OFF'}
        </button>
      </div>

      <div className={styles.quoteCard}>
        <p className={`${styles.quoteText} serif`}>{quote.text}</p>
        <p className={styles.quoteSrc}>{quote.src}</p>
      </div>
    </aside>
  )
}
