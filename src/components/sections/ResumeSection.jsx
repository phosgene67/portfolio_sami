import Section from '../common/Section'
import SectionTitle from '../common/SectionTitle'
import Button from '../common/Button'
import { personData } from '../../data/person'

export default function ResumeSection() {
  return (
    <Section id="resume" className="bg-white">
      <SectionTitle>Resume & Education</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Resume Download */}
        <div className="flex flex-col items-center justify-center p-8 md:p-10 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg border-2 border-primary-200">
          <svg
            className="w-16 h-16 text-primary-600 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h3 className="text-2xl font-bold font-poppins text-neutral-900 mb-2">
            Resume
          </h3>
          <p className="text-neutral-600 text-center mb-6">
            Download my complete resume in PDF format
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.open(personData.resumeUrl, '_blank')}
          >
            Download Resume
          </Button>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 className="text-2xl font-bold font-poppins text-neutral-900 mb-6">
            Education
          </h3>

          <div className="space-y-6">
            {/* Education Item */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C6.228 6.228 2 11.285 2 17.25c0 5.965 4.228 10.006 10 10.006s10-4.041 10-10.006C22 11.285 17.772 6.228 12 6.253z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-neutral-900">
                  {personData.education.degree}
                </h4>
                <p className="text-primary-600 font-semibold text-sm mb-1">
                  {personData.education.university}
                </p>
                <p className="text-neutral-600 text-sm mb-3">
                  Expected Graduation: {personData.education.graduationYear}
                </p>
                <p className="text-neutral-600 text-sm mb-2 font-semibold">
                  Relevant Coursework:
                </p>
                <ul className="grid grid-cols-1 gap-1">
                  {personData.education.coursework.map((course, idx) => (
                    <li key={idx} className="text-neutral-600 text-sm">
                      • {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
