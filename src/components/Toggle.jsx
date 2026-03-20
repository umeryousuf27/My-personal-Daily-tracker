import styles from './Toggle.module.css'

export default function Toggle({ checked, onChange, label, description }) {
  return (
    <label className={styles.wrapper}>
      <div className={styles.text}>
        <span className={styles.label}>{label}</span>
        {description && <span className={styles.desc}>{description}</span>}
      </div>
      <div className={`${styles.track} ${checked ? styles.checked : ''}`}>
        <div className={styles.thumb} />
      </div>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  )
}
