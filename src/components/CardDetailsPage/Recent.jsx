import React from 'react'

function Recent() {

  const interactions = [
    { type: 'Text', description: 'Asked for career advice', date: 'Jan 28, 2026' },
    { type: 'Meetup', description: 'Industry conference meetup', date: 'Jan 28, 2026' },
    { type: 'Video', description: 'Asked for career advice', date: 'Jan 28, 2026' },
    { type: 'Text', description: 'Asked for career advice', date: 'Jan 28, 2026' },
  ]

  const getIcon = (type) => {
    if (type === 'Text') return <i className="fa-regular fa-comment-dots text-2xl text-slate-600"></i>
    if (type === 'Meetup') return <i className="fa-solid fa-user-group text-2xl text-slate-600"></i>
    if (type === 'Video') return <i className="fa-solid fa-video text-2xl text-slate-600"></i>
    return <i className="fa-solid fa-file-lines text-2xl text-slate-600"></i>
  }

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-slate-800">Recent Interactions</h3>
        <button className="text-sm text-slate-500 hover:text-slate-700 flex items-center gap-1">
          <i className="fa-solid fa-clock-rotate-left"></i>
          <span>Full History</span>
        </button>
      </div>
      
      <div className="space-y-4">
        {interactions.map((interaction, index) => (
          <div key={index} className="flex items-start gap-3 pb-4 border-b border-slate-100 last:border-0">
            <div className="mt-1">
              {getIcon(interaction.type)}
            </div>
            <div className="flex-1">
              <p className="font-medium text-slate-800">{interaction.type}</p>
              <p className="text-sm text-slate-600">{interaction.description}</p>
            </div>
            <span className="text-xs text-slate-500">{interaction.date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recent
