import React from 'react'
import { useContext } from 'react'
import { StatsContext } from './StatsContext'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

function StatsCard() {
  const { interactionStats } = useContext(StatsContext);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Friendship Analytics
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-lg font-semibold text-gray-700 mb-8">
            By Interaction Type
          </h2>

          <div className="flex justify-center items-center">
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={interactionStats}
                  cx="50%"
                  cy="50%"
                  innerRadius={90}
                  outerRadius={130}
                  paddingAngle={8}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {interactionStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend 
                  verticalAlign="bottom" 
                  height={50}
                  iconType="circle"
                  wrapperStyle={{
                    paddingTop: '20px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsCard
