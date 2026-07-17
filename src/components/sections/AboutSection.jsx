import Section from '../common/Section'
import SectionTitle from '../common/SectionTitle'
import { personData } from '../../data/person'

export default function AboutSection() {
  return (
    <Section id="about" className="bg-white">
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Text Content */}
        <div className="space-y-6">
          <p className="text-lg text-neutral-700 leading-relaxed font-medium">
            {personData.about.intro}
          </p>

          {personData.about.body.map((paragraph, idx) => (
            <p key={idx} className="text-base text-neutral-600 leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Education Info */}
          <div className="mt-8 pt-8 border-t border-neutral-200">
            <h3 className="text-xl font-bold font-poppins text-neutral-900 mb-3">Education</h3>
            <div className="space-y-2">
              <p className="text-base font-semibold text-neutral-900">
                {personData.education.degree}
              </p>
              <p className="text-base text-neutral-600">
                {personData.education.university}
              </p>
              <p className="text-sm text-neutral-500">
                Expected Graduation: {personData.education.graduationYear}
              </p>
            </div>
          </div>
        </div>

        {/* Set personData.about.image to replace the default illustration. */}
        <div className="flex justify-center">
          <div className="w-72 h-96 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center overflow-hidden shadow-lg">
            {personData.about.image ? (
              <img
                src={personData.about.image}
                alt={personData.about.imageAlt}
                className="w-full h-full object-cover"
              />
            ) : (
              <svg
                className="w-56 h-56 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
