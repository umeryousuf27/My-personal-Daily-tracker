import { useEffect, useState } from 'react'
import styles from './CelebrationOverlay.module.css'

export default function CelebrationOverlay({ type, onClose, stats, styleMode }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Small delay to allow CSS transitions
    setTimeout(() => setShow(true), 10)
    
    // Auto dismiss after 3.5s
    const t = setTimeout(() => {
      setShow(false)
      setTimeout(onClose, 400) // allow fade out
    }, 3500)
    
    return () => clearTimeout(t)
  }, [onClose])

  const SpiritualPayload = () => {
    const isAll = type === 'all_tasks'
    return (
      <div className={styles.spiritualCard}>
        <div className={styles.geomPattern} />
        <h1 className={`${styles.arabic} serif`}>الحمد لله</h1>
        <p className={styles.english}>
          {isAll ? "You did it. Every task. Every prayer. ما شاء الله" : "All five prayers complete. SubhanAllah."}
        </p>
        <div className={styles.spiritualStats}>
          {isAll && stats?.streak && <span className={styles.streakBadge}>🔥 {stats.streak} Day Streak</span>}
        </div>
      </div>
    )
  }

  const GamingPayload = () => {
    return (
      <div className={styles.gamingCard}>
        <h1 className={`${styles.gamingTitle} mono`}>PERFECT DAY</h1>
        <div className={styles.xpText}>+200 XP</div>
      </div>
    )
  }

  // Minimal mode shouldn't even trigger the overlay in a real system, 
  // but if it does, it's just a subtle toast here.
  if (styleMode === 'minimal') return null;

  return (
    <div className={`${styles.overlay} ${show ? styles.visible : ''}`} onClick={() => setShow(false)}>
      {styleMode === 'spiritual' && <SpiritualPayload />}
      {styleMode === 'gaming' && <GamingPayload />}
    </div>
  )
}
