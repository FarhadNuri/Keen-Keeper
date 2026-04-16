import React from 'react'
import { useContext, useState } from 'react'
import { TimelineContext } from '../Timeline/TimelineContext'
import { useParams } from 'react-router'
import { DataContext } from '../Home/HomeDataContext'

function CheckIn() {
  const { addInteraction } = useContext(TimelineContext)
  const { userId } = useParams()
  const users = useContext(DataContext)
  const user = users.find(u => u.id === parseInt(userId))
  
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const handleCheckIn = (type) => {
    // Create new interaction
    const newInteraction = {
      id: Date.now(),
      type: type,
      userName: user.name,
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    }
    
    // Add to timeline
    addInteraction(newInteraction)
    
    // Show toast
    setToastMessage(`${type} interaction added!`)
    setShowToast(true)
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Check-In</h3>
      
      <div className="grid grid-cols-3 gap-4">
        {/* Call */}
        <button 
          onClick={() => handleCheckIn('Call')}
          className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <i className="fa-solid fa-phone-volume text-3xl mb-2 text-slate-600"></i>
          <span className="text-sm text-slate-700">Call</span>
        </button>
        
        {/* Text */}
        <button 
          onClick={() => handleCheckIn('Text')}
          className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <i className="fa-regular fa-comment-dots text-3xl mb-2 text-slate-600"></i>
          <span className="text-sm text-slate-700">Text</span>
        </button>
        
        {/* Video */}
        <button 
          onClick={() => handleCheckIn('Video')}
          className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <i className="fa-solid fa-video text-3xl mb-2 text-slate-600"></i>
          <span className="text-sm text-slate-700">Video</span>
        </button>
      </div>
      
      {/* Toast Notification - Fixed Top Right */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-slide-in">
          <i className="fa-solid fa-circle-check text-xl"></i>
          <p className="font-medium">{toastMessage}</p>
        </div>
      )}
    </div>
  )
}

export default CheckIn
