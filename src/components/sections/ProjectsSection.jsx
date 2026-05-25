import Section from '../common/Section'
import SectionTitle from '../common/SectionTitle'
import ProjectCard from '../cards/ProjectCard'
import { projectsData } from '../../data/projects'

export default function ProjectsSection() {
  return (
    <Section id="projects" className="bg-white">
      <SectionTitle>Featured Projects</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
