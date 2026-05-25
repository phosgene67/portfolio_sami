export default function AchievementCard({ achievement }) {
  const typeStyles = {
    certification: 'bg-blue-100 text-blue-700',
    ambassador: 'bg-purple-100 text-purple-700',
    workshop: 'bg-green-100 text-green-700',
    competition: 'bg-orange-100 text-orange-700'
  }

  const typeLabels = {
    certification: '🏆 Certification',
    ambassador: '👤 Ambassador',
    workshop: '📚 Workshop',
    competition: '🥇 Competition'
  }

  return (
    <div className="bg-white p-6 md:p-7 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-lg smooth-transition">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-bold font-poppins text-neutral-900 flex-1 pr-4">
          {achievement.title}
        </h3>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${typeStyles[achievement.type]}`}>
          {typeLabels[achievement.type]}
        </span>
      </div>

      <p className="text-sm text-neutral-500 font-semibold mb-2">
        {achievement.date}
      </p>

      <p className="text-neutral-600 text-sm leading-relaxed">
        {achievement.description}
      </p>
    </div>
  )
}
