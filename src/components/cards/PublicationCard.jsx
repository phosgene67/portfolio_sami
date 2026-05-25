import Button from '../common/Button'

export default function PublicationCard({ publication }) {
  const statusStyles = {
    "Published": "bg-green-100 text-green-700",
    "Under Review": "bg-blue-100 text-blue-700",
    "In Preparation": "bg-yellow-100 text-yellow-700"
  }

  return (
    <div className="bg-white p-6 md:p-7 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-lg smooth-transition flex flex-col h-full">
      {/* Status Badge */}
      <div className="flex items-start justify-between mb-4">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${statusStyles[publication.status]}`}>
          {publication.status}
        </span>
        <span className="text-neutral-500 text-sm font-semibold">
          {publication.date}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold font-poppins text-neutral-900 mb-2 line-clamp-2">
        {publication.title}
      </h3>

      {/* Authors */}
      <p className="text-neutral-600 text-sm mb-3 italic">
        {publication.authors}
      </p>

      {/* Journal */}
      <p className="text-primary-600 text-sm font-semibold mb-3">
        {publication.journal}
      </p>

      {/* Description */}
      <p className="text-neutral-600 text-sm leading-relaxed mb-4 flex-grow">
        {publication.description}
      </p>

      {/* DOI */}
      {publication.doi && (
        <p className="text-neutral-500 text-xs mb-4 break-all">
          <span className="font-semibold">DOI:</span> {publication.doi}
        </p>
      )}

      {/* Buttons */}
      <div className="flex gap-2 pt-4 border-t border-neutral-100 flex-wrap">
        {publication.pdfUrl && (
          <Button
            variant="primary"
            size="sm"
            onClick={() => window.open(publication.pdfUrl, '_blank')}
          >
            PDF
          </Button>
        )}
        {publication.link && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(publication.link, '_blank')}
          >
            Paper Link
          </Button>
        )}
        {publication.doi && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(`https://doi.org/${publication.doi}`, '_blank')}
          >
            DOI
          </Button>
        )}
      </div>
    </div>
  )
}
