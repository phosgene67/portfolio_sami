import Section from '../common/Section'
import SectionTitle from '../common/SectionTitle'
import AchievementCard from '../cards/AchievementCard'
import { achievementsData } from '../../data/achievements'

export default function AchievementsSection() {
  return (
    <Section id="achievements" className="bg-neutral-50">
      <SectionTitle>Achievements & Certifications</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {achievementsData.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
          />
        ))}
      </div>
    </Section>
  )
}
