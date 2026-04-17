import { Suspense } from 'react'
import HomeBanner from './HomeBanner'
import HomeLoading from './HomeLoading'

function Home() {
  return (
    <Suspense fallback={<HomeLoading />}>
      <HomeBanner />
    </Suspense>
  )
}

export default Home
