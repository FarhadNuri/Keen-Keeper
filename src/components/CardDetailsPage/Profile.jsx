import React from 'react'

function getStatusText(status) {
  if (status === "on_track") return "On Track"
  if (status === "almost_due") return "Almost Due"
  if (status === "overdue") return "Overdue"
  return "Unknown"
}

function getStatusClass(status) {
  if (status === "on_track") return "bg-[#244D3F] text-white"
  if (status === "almost_due") return "bg-[#EAA33A] text-white"
  if (status === "overdue") return "bg-[#EF4444] text-white"
  return "bg-slate-400 text-white"
}

function Profile({ user }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6">
      {/* Profile Picture and Name */}
      <div className="flex flex-col items-center text-center">
        <img
          src={user.picture}
          alt={user.name}
          className="h-24 w-24 rounded-full object-cover"
        />
        <h2 className="mt-4 text-2xl font-bold text-slate-800">{user.name}</h2>
        
        {/* Status Badge */}
        <span className={`mt-3 rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(user.status)}`}>
          {getStatusText(user.status)}
        </span>
        
        {/* Tags */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {user.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#BDEFD0] px-2 py-1 text-xs font-medium uppercase text-[#244D3F]"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Bio */}
        <p className="mt-4 text-sm text-slate-600 italic">"{user.bio}"</p>
        <p className="mt-2 text-xs text-slate-500">{user.email}</p>
      </div>
      
      {/* Action Buttons */}
      <div className="mt-6 space-y-3">
        <button className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-4 rounded-lg transition-colors">
          <span>⏰</span>
          <span>Snooze 2 Weeks</span>
        </button>
        
        <button className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-4 rounded-lg transition-colors">
          <span>📦</span>
          <span>Archive</span>
        </button>
        
        <button className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 py-2 px-4 rounded-lg transition-colors">
          <span>🗑️</span>
          <span>Delete</span>
        </button>
      </div>
    </div>
  )
}

export default Profile
