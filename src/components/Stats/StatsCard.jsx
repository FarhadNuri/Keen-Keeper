import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { StatsContext } from './StatsContext'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { Link } from 'react-router'

function StatsCard() {
  const { interactionStats: initialStats } = useContext(StatsContext);
  const [stats, setStats] = useState(initialStats);

  // Update stats when localStorage changes
  useEffect(() => {
    const updateStats = () => {
      const savedInteractions = localStorage.getItem('timelineInteractions');
      if (savedInteractions) {
        const interactions = JSON.parse(savedInteractions);
        
        const textCount = interactions.filter(item => item.type === 'Text').length;
        const callCount = interactions.filter(item => item.type === 'Call').length;
        const videoCount = interactions.filter(item => item.type === 'Video').length;
        
        setStats([
          { name: 'Text', value: textCount, color: '#8B5CF6' },
          { name: 'Call', value: callCount, color: '#2F5D4E' },
          { name: 'Video', value: videoCount, color: '#10B981' }
        ]);
      } else {
        // No data yet
        setStats([
          { name: 'Text', value: 0, color: '#8B5CF6' },
          { name: 'Call', value: 0, color: '#2F5D4E' },
          { name: 'Video', value: 0, color: '#10B981' }
        ]);
      }
    };

    updateStats();

    // Listen for custom event when interactions are updated
    window.addEventListener('interactionsUpdated', updateStats);
    // Listen for storage changes
    window.addEventListener('storage', updateStats);
    
    return () => {
      window.removeEventListener('interactionsUpdated', updateStats);
      window.removeEventListener('storage', updateStats);
    };
  }, []);

  const totalInteractions = stats.reduce((sum, item) => sum + item.value, 0);

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

          {totalInteractions === 0 ? (
            <div className="text-center py-12">
              <i className="fa-solid fa-chart-pie text-6xl text-gray-300 mb-4"></i>
              <p className="text-gray-600 text-lg mb-2">No interactions yet!</p>
              <p className="text-gray-500 text-sm mb-6">
                Start by checking in with your friends to see your stats here.
              </p>
              <Link 
                to="/" 
                className="inline-block bg-[#244D3F] text-white px-6 py-3 rounded-lg hover:bg-[#1a3a2f] transition-colors"
              >
                Go to Home
              </Link>
            </div>
          ) : (
            <>
              <div className="flex justify-center items-center">
                <ResponsiveContainer width="100%" height={350}>
                  <PieChart>
                    <Pie
                      data={stats}
                      cx="50%"
                      cy="50%"
                      innerRadius={90}
                      outerRadius={130}
                      paddingAngle={8}
                      dataKey="value"
                      strokeWidth={0}
                    >
                      {stats.map((entry, index) => (
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

              <div className="mt-8 text-center text-sm text-gray-600">
                <p className="font-semibold text-lg">Total Interactions: {totalInteractions}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default StatsCard
