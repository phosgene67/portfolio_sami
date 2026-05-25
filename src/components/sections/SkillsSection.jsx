import Section from '../common/Section'
import SectionTitle from '../common/SectionTitle'
import SkillCategory from '../cards/SkillCategory'
import { skillsData } from '../../data/skills'

export default function SkillsSection() {
  return (
    <Section id="skills" className="bg-neutral-50">
      <SectionTitle>Skills & Expertise</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {skillsData.map((skill, idx) => (
          <SkillCategory
            key={idx}
            icon={skill.icon}
            title={skill.title}
            skills={skill.skills}
          />
        ))}
      </div>
    </Section>
  )
}
