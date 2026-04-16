import React from 'react'

function TimelineCard({ interaction }) {
  const getIcon = (type) => {
    if (type === 'Call') return <i className="fa-solid fa-phone-volume text-2xl text-slate-600"></i>
    if (type === 'Text') return <i className="fa-regular fa-comment-dots text-2xl text-slate-600"></i>
    if (type === 'Video') return <i className="fa-solid fa-video text-2xl text-slate-600"></i>
    return <i className="fa-solid fa-user-group text-2xl text-slate-600"></i>
  }

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        
        <div className="flex-shrink-0">
          {getIcon(interaction.type)}
        </div>
        
        
        <div className="flex-1">
          <h3 className="font-semibold text-slate-800">
            {interaction.type} <span className="font-normal text-slate-600">with {interaction.userName}</span>
          </h3>
          <p className="text-sm text-slate-500 mt-1">{interaction.date}</p>
        </div>
      </div>
    </div>
  )
}

export default TimelineCard
