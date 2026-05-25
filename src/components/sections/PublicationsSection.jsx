import Section from '../common/Section'
import SectionTitle from '../common/SectionTitle'
import PublicationCard from '../cards/PublicationCard'
import { publicationsData } from '../../data/publications'

export default function PublicationsSection() {
  return (
    <Section id="publications" className="bg-white">
      <SectionTitle>Publications & Research Papers</SectionTitle>

      <p className="text-neutral-600 text-lg max-w-3xl mb-12">
        Research contributions and published papers in robotics, embedded systems, and machine learning.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {publicationsData.map((publication) => (
          <PublicationCard
            key={publication.id}
            publication={publication}
          />
        ))}
      </div>
    </Section>
  )
}
