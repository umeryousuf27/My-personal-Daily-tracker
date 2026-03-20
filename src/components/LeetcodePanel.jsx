import TopicPanel from './TopicPanel'
import { NEETCODE_150, LC_MILESTONES, XP_VALUES } from '../data'

export default function LeetcodePanel() {
  return (
    <TopicPanel
      title="Neetcode 150"
      subtitle="DSA Interview Preparation Tracker"
      storageKey="umer_lc_progress"
      topics={NEETCODE_150}
      accentColor="var(--blue)"
      accentColorDark="var(--blue-d)"
      xpPerTopic={XP_VALUES.lcProblemSolved}
      milestones={LC_MILESTONES}
      milestoneMessages={{
        25:  "25 problems down. You're building the habit.",
        50:  "50 problems. The patterns are starting to click.",
        75:  "Halfway there! Data structures fear you now.",
        100: "100 problems. You're ready for most interviews.",
        125: "125 problems. Only the hard stuff remains.",
        150: "150 problems. Neetcode complete. Incredible work."
      }}
    />
  )
}
