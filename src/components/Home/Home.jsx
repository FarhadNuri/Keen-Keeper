import { Suspense, useEffect } from 'react'
import HomeBanner from './HomeBanner'
import HomeLoading from './HomeLoading'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Suspense fallback={<HomeLoading />}>
      <HomeBanner />
    </Suspense>
  )
}

export default Home
