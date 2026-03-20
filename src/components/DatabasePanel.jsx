import TopicPanel from './TopicPanel'
import {
  DATABASE_TOPICS,
  DB_GROUP_ORDER,
  DB_MILESTONES,
  DB_MILESTONE_MESSAGES,
  XP_VALUES
} from '../data'

export default function DatabasePanel() {
  return (
    <TopicPanel
      title="SQL & Databases"
      subtitle="Data Layer Preparation"
      storageKey="umer_db_progress"
      topics={DATABASE_TOPICS}
      groupOrder={DB_GROUP_ORDER}
      accentColor="var(--amber)"
      accentColorDark="var(--amber-d)"
      xpPerTopic={XP_VALUES.dbTopicDone}
      milestones={DB_MILESTONES}
      milestoneMessages={DB_MILESTONE_MESSAGES}
    />
  )
}
