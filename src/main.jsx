import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root'
import Home from './components/Home/Home'
import CardDetailsTree from './components/CardDetailsPage/CardDetailsTree'
import TimelineTree from './components/Timeline/TimelineTree'
import StatsTree from './components/Stats/StatsTree'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "user/:userId",
        Component: CardDetailsTree
      },
      {
        path: "timeline",
        Component: TimelineTree
      },
      {
        path: "stats",
        Component: StatsTree
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
