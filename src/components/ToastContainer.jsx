import { useEffect, useState } from 'react'
import styles from './ToastContainer.module.css'

const COLOR_MAP = {
  blue: '#4a9eff', green: '#22c77a', amber: '#f5a623',
  purple: '#a78bfa', pink: '#f472b6', red: '#f87171', teal: '#2dd4bf'
}
const DIM_MAP = {
  blue: 'rgba(74,158,255,0.12)', green: 'rgba(34,199,122,0.12)', amber: 'rgba(245,166,35,0.12)',
  purple: 'rgba(167,139,250,0.12)', pink: 'rgba(244,114,182,0.12)', red: 'rgba(248,113,113,0.12)', teal: 'rgba(45,212,191,0.12)'
}

function Toast({ toast, onDismiss }) {
  const [leaving, setLeaving] = useState(false)
  const accent = COLOR_MAP[toast.color] || 'var(--blue)'
  const dim = DIM_MAP[toast.color] || 'var(--blue-d)'

  useEffect(() => {
    const timer = setTimeout(() => {
      setLeaving(true)
      setTimeout(() => onDismiss(toast.toastId), 300)
    }, 5000)
    return () => clearTimeout(timer)
  }, [toast.toastId, onDismiss])

  const handleDismiss = () => {
    setLeaving(true)
    setTimeout(() => onDismiss(toast.toastId), 300)
  }

  return (
    <div className={`${styles.toast} ${leaving ? styles.leaving : ''}`}>
      <div
        className={styles.iconBadge}
        style={{ background: dim, color: accent }}
      >
        {toast.color === 'green' ? '✓' : toast.color === 'amber' ? '⚠' : '●'}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{toast.title}</div>
        <div className={styles.body}>{toast.body}</div>
      </div>
      <button className={styles.dismiss} onClick={handleDismiss}>×</button>
    </div>
  )
}

export default function ToastContainer({ toasts, onDismiss }) {
  if (toasts.length === 0) return null

  return (
    <div className={styles.container}>
      {toasts.map(t => (
        <Toast key={t.toastId} toast={t} onDismiss={onDismiss} />
      ))}
    </div>
  )
}
