import Button from '../common/Button'
import { personData } from '../../data/person'

export default function HeroSection() {
  const handleScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 md:pt-0 px-4 bg-gradient-to-br from-white to-neutral-50">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl font-bold font-poppins text-neutral-900 leading-tight">
                {personData.fullName}
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-primary-600">
                {personData.title}
              </p>
            </div>

            <p className="text-lg text-neutral-600 max-w-md leading-relaxed">
              {personData.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleScroll('projects')}
              >
                View My Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScroll('contact')}
              >
                Get In Touch
              </Button>
            </div>

            {/* Blog Button */}
            <div className="pt-4">
              <Button
                variant="secondary"
                size="md"
                onClick={() => window.open(personData.blogUrl, '_blank')}
              >
                📖 Read My Blog
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href={personData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary-600 smooth-transition font-medium text-sm"
              >
                GitHub
              </a>
              <a
                href={personData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary-600 smooth-transition font-medium text-sm"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${personData.email}`}
                className="text-neutral-600 hover:text-primary-600 smooth-transition font-medium text-sm"
              >
                Email
              </a>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="flex justify-center items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center overflow-hidden shadow-lg">
              <svg
                className="w-48 h-48 md:w-64 md:h-64 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
