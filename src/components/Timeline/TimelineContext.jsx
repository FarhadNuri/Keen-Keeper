import React from 'react'
import { createContext, useState, useEffect } from 'react'

export const TimelineContext = createContext()

function TimelineContextProvider({ children }) {
  
  const [interactions, setInteractions] = useState(() => {
    const savedInteractions = localStorage.getItem('timelineInteractions')
    if (savedInteractions) {
      return JSON.parse(savedInteractions)
    }
    return [] 
  })

  useEffect(() => {
    localStorage.setItem('timelineInteractions', JSON.stringify(interactions))
  }, [interactions])

  const addInteraction = (interaction) => {
    const newInteractions = [interaction, ...interactions]
    setInteractions(newInteractions)

    window.dispatchEvent(new Event('interactionsUpdated'))
  }

  return (
    <TimelineContext.Provider value={{ interactions, addInteraction }}>
      {children}
    </TimelineContext.Provider>
  )
}

export default TimelineContextProvider
