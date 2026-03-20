import { useState, useEffect } from 'react'
import { useSettingsCtx } from '../context/SettingsContext'
import styles from './WeeklyReflection.module.css'

export default function WeeklyReflection() {
  const { settings } = useSettingsCtx()
  const [show, setShow] = useState(false)
  const [reflection, setReflection] = useState('')

  useEffect(() => {
    if (!settings.habit.weeklyReview) return

    const checkTime = () => {
      const now = new Date()
      // Sunday is 0, 20 is 8pm
      if (now.getDay() === 0 && now.getHours() === 20 && !localStorage.getItem('umer_reflection_done_this_week')) {
        setShow(true)
      }
    }
    
    checkTime()
    const int = setInterval(checkTime, 60000) // check every minute
    return () => clearInterval(int)
  }, [settings.habit.weeklyReview])

  const handleSubmit = () => {
    localStorage.setItem('umer_reflection_done_this_week', 'true')
    // In a real app, you might save this to a db next week it resets (by checking ISO week)
    setShow(false)
  }

  if (!show) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Weekly Reflection</h2>
          <button className={styles.closeBtn} onClick={() => setShow(false)}>✕</button>
        </div>
        <p className={styles.subtitle}>Take a moment to reflect on your week. How did you do with your goals?</p>
        
        <label className={styles.label}>What went well? What needs focus next week?</label>
        <textarea 
          className={styles.textarea}
          value={reflection}
          onChange={e => setReflection(e.target.value)}
          placeholder="I stayed consistent with prayers, but Leetcode was hard..."
          rows={5}
        />
        
        <button className={styles.submitBtn} onClick={handleSubmit}>
          Save Reflection
        </button>
      </div>
    </div>
  )
}
