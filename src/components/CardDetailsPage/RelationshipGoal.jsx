import React from 'react'

function RelationshipGoal({ user }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-slate-800">Relationship Goal</h3>
        <button className="text-sm text-slate-500 hover:text-slate-700">Edit</button>
      </div>
      
      <p className="mt-3 text-slate-600">
        Connect every <span className="font-semibold text-slate-800">{user.goal} days</span>
      </p>
    </div>
  )
}

export default RelationshipGoal
