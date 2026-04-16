import React from 'react'

function CheckIn() {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Check-In</h3>
      
      <div className="grid grid-cols-3 gap-4">
        {/* Call */}
        <button className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
          <i className="fa-solid fa-phone-volume text-3xl mb-2 text-slate-600"></i>
          <span className="text-sm text-slate-700">Call</span>
        </button>
        
        {/* Text */}
        <button className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
          <i className="fa-regular fa-comment-dots text-3xl mb-2 text-slate-600"></i>
          <span className="text-sm text-slate-700">Text</span>
        </button>
        
        {/* Video */}
        <button className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
          <i className="fa-solid fa-video text-3xl mb-2 text-slate-600"></i>
          <span className="text-sm text-slate-700">Video</span>
        </button>
      </div>
    </div>
  )
}

export default CheckIn
