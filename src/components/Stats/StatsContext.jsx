import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const StatsContext = createContext();

function StatsContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [interactions, setInteractions] = useState([]);


  useEffect(() => {
    fetch('/userData.json')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  useEffect(() => {
    const savedInteractions = localStorage.getItem('timelineInteractions');
    if (savedInteractions) {
      setInteractions(JSON.parse(savedInteractions));
    }
  }, []);

  const getInteractionStats = () => {
    if (interactions.length === 0) {
      return [
        { name: 'Text', value: 0, color: '#8B5CF6' },
        { name: 'Call', value: 0, color: '#2F5D4E' },
        { name: 'Video', value: 0, color: '#10B981' }
      ];
    }


    const textCount = interactions.filter(item => item.type === 'Text').length;
    const callCount = interactions.filter(item => item.type === 'Call').length;
    const videoCount = interactions.filter(item => item.type === 'Video').length;
    
    return [
      { name: 'Text', value: textCount, color: '#8B5CF6' },
      { name: 'Call', value: callCount, color: '#2F5D4E' },
      { name: 'Video', value: videoCount, color: '#10B981' }
    ];
  };

  const value = {
    users,
    interactions,
    interactionStats: getInteractionStats()
  };

  return (
    <StatsContext.Provider value={value}>
      {children}
    </StatsContext.Provider>
  )
}

export default StatsContextProvider
