import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router'
import HomeDataContext from '../Home/HomeDataContext'
import axios from 'axios'

const userPromise = axios.get("userData.json")

function Root() {
  return (
    <div>
      <Navbar />
      <HomeDataContext userPromise={userPromise}>
        <Outlet />
      </HomeDataContext>
      <Footer />
    </div>
  )
}

export default Root
