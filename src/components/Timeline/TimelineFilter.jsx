import React from 'react'

function TimelineFilter({ filter, setFilter }) {
  const filters = ['All', 'Call', 'Text', 'Video']

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-4">
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Filter timeline
      </label>
      
      <div className="flex gap-2">
        {filters.map(filterOption => (
          <button
            key={filterOption}
            onClick={() => setFilter(filterOption)}
            className={`cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === filterOption
                ? 'bg-[#244D3F] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {filterOption}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TimelineFilter
