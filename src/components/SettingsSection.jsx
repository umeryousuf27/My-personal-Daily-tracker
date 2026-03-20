import { useState } from 'react'
import styles from './SettingsSection.module.css'

export default function SettingsSection({ icon, title, defaultOpen = true, children }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={styles.section}>
      <button className={styles.header} onClick={() => setOpen(!open)}>
        <span className={styles.iconWrapper}>
          <span className={styles.icon}>{icon}</span>
          <span className={styles.title}>{title}</span>
        </span>
        <span className={`${styles.chevron} ${open ? styles.open : ''}`}>▼</span>
      </button>
      {open && <div className={styles.content}>{children}</div>}
    </div>
  )
}
