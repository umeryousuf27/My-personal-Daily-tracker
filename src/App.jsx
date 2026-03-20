import { useState } from 'react'
import { useTracker } from './hooks/useTracker'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import StatCards from './components/StatCards'
import ActiveTimer from './components/ActiveTimer'
import Timeline from './components/Timeline'
import RightPanel from './components/RightPanel'
import LeetcodePanel from './components/LeetcodePanel'
import ToastContainer from './components/ToastContainer'
import { SCHEDULE } from './data'
import styles from './App.module.css'

export default function App() {
  const tracker = useTracker()
  const [view, setView] = useState('today')

  const lcHours = Math.floor((tracker.state.lcSeconds || 0) / 3600)

  return (
    <div className={styles.app}>
      <Topbar
        now={tracker.now}
        tasksDone={tracker.tasksDone}
        total={SCHEDULE.length}
        notifGranted={tracker.notifGranted}
        onNotif={tracker.requestNotifPerm}
      />

      <Sidebar
        prayersDone={tracker.prayersDone}
        lcHours={lcHours}
        screenMins={tracker.state.screenMins}
        onSetView={setView}
        activeView={view}
        soundEnabled={tracker.soundEnabled}
        onToggleSound={tracker.toggleSound}
      />

      <main className={styles.main}>
        {view === 'lc' ? (
          <LeetcodePanel />
        ) : (
          <>
            <StatCards
              tasksDone={tracker.tasksDone}
              total={SCHEDULE.length}
              lcSeconds={tracker.state.lcSeconds}
              screenMins={tracker.state.screenMins}
              prayersDone={tracker.prayersDone}
            />
            <ActiveTimer
              timer={tracker.timer}
              onStop={tracker.stopTimer}
              onCancel={tracker.cancelTimer}
            />
            <Timeline
              schedule={SCHEDULE}
              tasks={tracker.state.tasks}
              currentTaskId={tracker.currentTaskId}
              lcSeconds={tracker.state.lcSeconds}
              onToggle={tracker.toggleTask}
              onStartTimer={tracker.startTimer}
              onResetDay={tracker.resetDay}
            />
          </>
        )}
      </main>

      <RightPanel
        now={tracker.now}
        tasks={tracker.state.tasks}
        screenMins={tracker.state.screenMins}
        weekScores={tracker.weekScores}
        notifLog={tracker.notifLog}
        onToggleTask={tracker.toggleTask}
        onAddScreen={tracker.addScreen}
        onResetScreen={tracker.resetScreen}
        onClearLog={tracker.clearLog}
      />

      <ToastContainer toasts={tracker.toasts} onDismiss={tracker.dismissToast} />
    </div>
  )
}
