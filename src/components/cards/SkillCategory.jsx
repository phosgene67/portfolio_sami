export default function SkillCategory({ icon, title, skills }) {
  const isImageIcon = icon.startsWith('/') || icon.startsWith('http')

  return (
    <div className="bg-white p-8 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-lg smooth-transition text-center flex flex-col items-center gap-4">
      {isImageIcon ? (
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      ) : (
        <div className="text-5xl">{icon}</div>
      )}

      <h3 className="text-lg font-bold font-poppins text-neutral-900">
        {title}
      </h3>

      <p className="text-neutral-600 text-sm leading-relaxed">
        {skills}
      </p>
    </div>
  )
}
