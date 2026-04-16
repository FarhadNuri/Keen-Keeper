import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const StatsContext = createContext();

function StatsContextProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/userData.json')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  // Calculate stats from users data
  const getInteractionStats = () => {
    // Count interactions by type (simulating text, call, video)
    // For demo purposes, we'll create sample data based on user count
    const totalUsers = users.length;
    
    return [
      { name: 'Text', value: Math.floor(totalUsers * 0.4), color: '#8B5CF6' },
      { name: 'Call', value: Math.floor(totalUsers * 0.35), color: '#2F5D4E' },
      { name: 'Video', value: Math.floor(totalUsers * 0.25), color: '#10B981' }
    ];
  };

  const value = {
    users,
    interactionStats: getInteractionStats()
  };

  return (
    <StatsContext.Provider value={value}>
      {children}
    </StatsContext.Provider>
  )
}

export default StatsContextProvider
