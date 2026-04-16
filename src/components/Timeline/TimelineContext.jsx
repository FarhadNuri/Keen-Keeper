import React from 'react'
import { createContext, useState } from 'react'

export const TimelineContext = createContext()

function TimelineContextProvider({ children }) {
  
  const [interactions, setInteractions] = useState([])

  
  const addInteraction = (interaction) => {
    setInteractions([interaction, ...interactions])
  }

  return (
    <TimelineContext.Provider value={{ interactions, addInteraction }}>
      {children}
    </TimelineContext.Provider>
  )
}

export default TimelineContextProvider
