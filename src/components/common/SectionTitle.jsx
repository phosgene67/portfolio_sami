export default function SectionTitle({ children, className = '' }) {
  return (
    <h2 className={`text-4xl md:text-5xl font-bold font-poppins text-neutral-900 mb-12 md:mb-16 ${className}`}>
      {children}
    </h2>
  )
}
