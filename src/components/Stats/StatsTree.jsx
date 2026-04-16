import React from 'react'
import StatsContextProvider from './StatsContext'
import StatsCard from './StatsCard'

function StatsTree() {
  return (
    <StatsContextProvider>
      <StatsCard />
    </StatsContextProvider>
  )
}

export default StatsTree
