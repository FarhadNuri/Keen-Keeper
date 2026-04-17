import React from 'react'

function TopGrid({ user }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-lg border border-slate-200 p-6 text-center">
        <h3 className="text-4xl font-bold text-slate-800">{user.days_since_contact}</h3>
        <p className="mt-2 text-sm text-slate-600">Days Since Contact</p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-6 text-center">
        <h3 className="text-4xl font-bold text-slate-800">{user.goal}</h3>
        <p className="mt-2 text-sm text-slate-600">Goal (Days)</p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-6 text-center">
        <h3 className="text-2xl font-bold text-slate-800">{user.next_due_date}</h3>
        <p className="mt-2 text-sm text-slate-600">Next Due</p>
      </div>
    </div>
  )
}

export default TopGrid
