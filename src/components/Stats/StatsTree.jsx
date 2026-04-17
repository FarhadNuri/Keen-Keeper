import React from 'react'
import { useEffect } from 'react'
import StatsContextProvider from './StatsContext'
import StatsCard from './StatsCard'

function StatsTree() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <StatsContextProvider>
      <StatsCard />
    </StatsContextProvider>
  )
}

export default StatsTree
