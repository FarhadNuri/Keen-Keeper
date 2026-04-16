import React from 'react'
import { createContext, useState, useEffect } from 'react'

export const TimelineContext = createContext()

function TimelineContextProvider({ children }) {
  


  return (
    <TimelineContext.Provider value={{ interactions, addInteraction }}>
      {children}
    </TimelineContext.Provider>
  )
}

export default TimelineContextProvider
