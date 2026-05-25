export default function Section({ children, id = '', className = '' }) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-max">
        {children}
      </div>
    </section>
  )
}
