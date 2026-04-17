import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { TimelineContext } from './TimelineContext'
import TimelineCard from './TimelineCard'
import TimelineFilter from './TimelineFilter'

function TimelineTree() {
  const { interactions } = useContext(TimelineContext)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  
  const filteredInteractions = filter === 'All' 
    ? interactions 
    : interactions.filter(interaction => interaction.type === filter)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-slate-800 mb-8">Timeline</h1>
      
      
      <TimelineFilter filter={filter} setFilter={setFilter} />
      
      
      <div className="mt-6 space-y-4">
        {filteredInteractions.length === 0 ? (
          <div className="bg-white rounded-lg border border-slate-200 p-8 text-center">
            <p className="text-slate-600">No interactions yet. Start by checking in with your friends!</p>
          </div>
        ) : (
          filteredInteractions.map(interaction => (
            <TimelineCard key={interaction.id} interaction={interaction} />
          ))
        )}
      </div>
    </div>
  )
}

export default TimelineTree
