import Button from '../common/Button'

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-neutral-200 hover:border-primary-300 hover:shadow-xl smooth-transition flex flex-col h-full">
      {/* Image */}
      <div className="h-48 md:h-56 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <svg
            className="w-24 h-24 text-primary-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-7 flex flex-col gap-4 flex-grow">
        <div>
          <h3 className="text-xl font-bold font-poppins text-neutral-900 mb-2 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-neutral-100">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(project.githubUrl, '_blank')}
            className="flex-1"
          >
            GitHub
          </Button>
          {project.demoUrl && (
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open(project.demoUrl, '_blank')}
              className="flex-1"
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
