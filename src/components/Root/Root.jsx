import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router'
import HomeDataContext from '../Home/HomeDataContext'
import TimelineContextProvider from '../Timeline/TimelineContext'
import axios from 'axios'

const userPromise = axios.get("userData.json")

function Root() {
  return (
    <div>
      <Navbar />
      <TimelineContextProvider>
        <HomeDataContext userPromise={userPromise}>
          <Outlet />
        </HomeDataContext>
      </TimelineContextProvider>
      <Footer />
    </div>
  )
}

export default Root
