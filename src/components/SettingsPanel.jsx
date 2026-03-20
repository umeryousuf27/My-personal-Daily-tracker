import { useSettingsCtx } from '../context/SettingsContext'
import styles from './SettingsPanel.module.css'
import SettingsSection from './SettingsSection'
import Toggle from './Toggle'
import SoundRow from './SoundRow'

export default function SettingsPanel() {
  const { settings, setSettings, setSoundEnabled, setHabit, setGoal } = useSettingsCtx()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Settings</h2>
        <p className={styles.subtitle}>Configure your behavioral loops</p>
      </header>

      <div className={styles.content}>
        
        {/* APPEARANCE */}
        <SettingsSection icon="🎨" title="Appearance">
          <div className={styles.themeGroup}>
            {['dark', 'light', 'system'].map(t => (
              <button
                key={t}
                className={`${styles.themeBtn} ${settings.theme === t ? styles.activeTheme : ''}`}
                onClick={() => setSettings(s => ({ ...s, theme: t }))}
              >
                {t === 'dark' ? '🌙 Dark' : t === 'light' ? '☀️ Light' : '💻 System'}
              </button>
            ))}
          </div>
        </SettingsSection>

        {/* SOUND SYSTEM */}
        <SettingsSection icon="🔊" title="Sound System">
          <div className={styles.volumeRow}>
            <span>Master Volume</span>
            <input
              type="range"
              min="0" max="1" step="0.05"
              value={settings.volume}
              onChange={(e) => setSettings(s => ({ ...s, volume: parseFloat(e.target.value) }))}
            />
            <span className="mono">{Math.round(settings.volume * 100)}%</span>
            <Toggle checked={settings.soundEnabled} onChange={(v) => setSettings(s => ({ ...s, soundEnabled: v }))} label="Enable Sounds" />
          </div>

          <div className={styles.soundGroup}>
            <div className={styles.groupHeader}>NOTIFICATION SOUNDS <span className={styles.sub}>(CUE PHASE)</span></div>
            <SoundRow label="Prayer reminder tone" phase="cue" soundKey="prayerCall" enabled={settings.sounds.prayerCall} onToggle={(v) => setSoundEnabled('prayerCall', v)} />
            <SoundRow label="Task reminder chime" phase="cue" soundKey="notificationChime" enabled={settings.sounds.notificationChime} onToggle={(v) => setSoundEnabled('notificationChime', v)} />
            <SoundRow label="Screen time warning" phase="cue" soundKey="warningBuzz" enabled={settings.sounds.warningBuzz} onToggle={(v) => setSoundEnabled('warningBuzz', v)} />
          </div>

          <div className={styles.soundGroup}>
            <div className={styles.groupHeader}>INTERACTION SOUNDS <span className={styles.sub}>(ACTION PHASE)</span></div>
            <SoundRow label="Task completion pop" phase="action" soundKey="taskComplete" enabled={settings.sounds.taskComplete} onToggle={(v) => setSoundEnabled('taskComplete', v)} />
            <SoundRow label="Timer start tick" phase="action" soundKey="timerStart" enabled={settings.sounds.timerStart} onToggle={(v) => setSoundEnabled('timerStart', v)} />
            <SoundRow label="Hover tick effect" phase="action" soundKey="hoverTick" enabled={settings.sounds.hoverTick} onToggle={(v) => setSoundEnabled('hoverTick', v)} />
            <SoundRow label="Button press click" phase="action" soundKey="buttonPress" enabled={settings.sounds.buttonPress} onToggle={(v) => setSoundEnabled('buttonPress', v)} />
          </div>

          <div className={styles.soundGroup}>
            <div className={styles.groupHeader}>ACHIEVEMENT SOUNDS <span className={styles.sub}>(REWARD PHASE)</span></div>
            <SoundRow label="All tasks complete" phase="reward" soundKey="allTasksDone" enabled={settings.sounds.allTasksDone} onToggle={(v) => setSoundEnabled('allTasksDone', v)} />
            <SoundRow label="All prayers done" phase="reward" soundKey="allPrayersDone" enabled={settings.sounds.allPrayersDone} onToggle={(v) => setSoundEnabled('allPrayersDone', v)} />
            <SoundRow label="Streak milestone" phase="reward" soundKey="streakMilestone" enabled={settings.sounds.streakMilestone} onToggle={(v) => setSoundEnabled('streakMilestone', v)} />
            <SoundRow label="Leetcode milestone" phase="reward" soundKey="lcMilestone" enabled={settings.sounds.lcMilestone} onToggle={(v) => setSoundEnabled('lcMilestone', v)} />
          </div>
        </SettingsSection>

        {/* HABIT PSYCHOLOGY */}
        <SettingsSection icon="🧠" title="Habit Psychology Engine">
          <div className={styles.identityBox}>
            <div className={styles.quoteBlock}>
              "Habits are not about discipline. They are about identity. Every action is a vote for the person you want to become." <br/> <small>— James Clear</small>
            </div>
            <label className={styles.identityLabel}>YOUR IDENTITY STATEMENT</label>
            <input
              className={`${styles.identityInput} serif`}
              value={settings.habit.identityStatement}
              onChange={(e) => setHabit('identityStatement', e.target.value)}
              placeholder="Who do you want to become?"
            />
          </div>

          <div className={styles.habitParams}>
            <div className={styles.paramRow}>
              <span>Cue Intensity</span>
              <div className={styles.segmented}>
                {['gentle', 'moderate', 'aggressive'].map(v => (
                  <button key={v} className={settings.habit.cueStyle === v ? styles.segActive : ''} onClick={() => setHabit('cueStyle', v)}>{v}</button>
                ))}
              </div>
            </div>
            
            <Toggle checked={settings.habit.showStreak} onChange={(v) => setHabit('showStreak', v)} label="Streak counter" description="Craving amplifier" />
            <Toggle checked={settings.habit.showXP} onChange={(v) => setHabit('showXP', v)} label="XP / experience points" />
            <Toggle checked={settings.habit.anticipationMode} onChange={(v) => setHabit('anticipationMode', v)} label="Anticipation pulse effect" description="Makes upcoming tasks glow" />
            
            <div className={styles.paramRow}>
              <span>Reward Intensity</span>
              <div className={styles.segmented}>
                {['low', 'medium', 'high'].map(v => (
                  <button key={v} className={settings.habit.rewardIntensity === v ? styles.segActive : ''} onClick={() => setHabit('rewardIntensity', v)}>{v}</button>
                ))}
              </div>
            </div>
            
            <div className={styles.paramRow}>
              <span>Celebration Style</span>
              <div className={styles.segmented}>
                {['spiritual', 'gaming', 'minimal'].map(v => (
                  <button key={v} className={settings.habit.celebrationStyle === v ? styles.segActive : ''} onClick={() => setHabit('celebrationStyle', v)}>{v}</button>
                ))}
              </div>
            </div>
            
            <Toggle checked={settings.habit.weeklyReview} onChange={(v) => setHabit('weeklyReview', v)} label="Weekly Reflection prompt (Sunday 8pm)" />
          </div>
        </SettingsSection>

        {/* GOALS */}
        <SettingsSection icon="🎯" title="Goals & Targets">
          <div className={styles.goalRow}>
            <span>Streak target ({settings.goals.streakTarget} days)</span>
            <input type="range" min="7" max="100" step="7" value={settings.goals.streakTarget} onChange={(e) => setGoal('streakTarget', parseInt(e.target.value))} />
          </div>
          <div className={styles.goalRow}>
            <span>Daily Leetcode target ({settings.goals.dailyLcMinutes} min)</span>
            <input type="range" min="30" max="180" step="15" value={settings.goals.dailyLcMinutes} onChange={(e) => setGoal('dailyLcMinutes', parseInt(e.target.value))} />
          </div>
          <div className={styles.goalRow}>
            <span>Social media limit ({settings.goals.maxScreenMins} min)</span>
            <input type="range" min="15" max="240" step="15" value={settings.goals.maxScreenMins} onChange={(e) => setGoal('maxScreenMins', parseInt(e.target.value))} />
          </div>
        </SettingsSection>

      </div>
    </div>
  )
}
