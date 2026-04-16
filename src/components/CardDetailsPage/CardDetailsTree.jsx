import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router'
import { DataContext } from '../Home/HomeDataContext'
import Profile from './Profile'


function CardDetailsTree() {
  const { userId } = useParams()
  const users = useContext(DataContext)
  
  const user = users.find(u => u.id === parseInt(userId))
  
  if (!user) {
    return <div className="container mx-auto px-4 py-8">User not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Profile user={user} />
        </div>
        
      </div>
    </div>
  )
}

export default CardDetailsTree
