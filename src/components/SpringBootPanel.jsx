import TopicPanel from './TopicPanel'
import {
  SPRING_BOOT_TOPICS,
  SPRING_GROUP_ORDER,
  SPRING_MILESTONES,
  SPRING_MILESTONE_MESSAGES,
  XP_VALUES
} from '../data'

export default function SpringBootPanel() {
  return (
    <TopicPanel
      title="Spring Boot & Java"
      subtitle="Backend Developer Preparation"
      storageKey="umer_spring_progress"
      topics={SPRING_BOOT_TOPICS}
      groupOrder={SPRING_GROUP_ORDER}
      accentColor="var(--purple)"
      accentColorDark="var(--purple-d)"
      xpPerTopic={XP_VALUES.springTopicDone}
      milestones={SPRING_MILESTONES}
      milestoneMessages={SPRING_MILESTONE_MESSAGES}
    />
  )
}
