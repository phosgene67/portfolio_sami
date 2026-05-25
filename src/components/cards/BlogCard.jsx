export default function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-neutral-200 hover:border-primary-300 hover:shadow-lg smooth-transition flex flex-col h-full">
      {/* Image */}
      <div className="h-40 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center overflow-hidden relative">
        <svg
          className="w-20 h-20 text-primary-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C6.228 6.228 2 11.285 2 17.25c0 5.965 4.228 10.006 10 10.006s10-4.041 10-10.006C22 11.285 17.772 6.228 12 6.253z"
          />
        </svg>
        {blog.status === 'coming_soon' && (
          <div className="absolute top-3 right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Coming Soon
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-grow">
        <h3 className="text-lg font-bold font-poppins text-neutral-900 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-neutral-600 text-sm leading-relaxed line-clamp-2 flex-grow">
          {blog.excerpt}
        </p>
        <p className="text-neutral-500 text-xs font-semibold">
          {blog.date}
        </p>
      </div>
    </div>
  )
}
