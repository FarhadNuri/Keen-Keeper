import React from 'react'
import { use } from 'react'
import { DataContext } from './HomeDataContext';


function HomeBannerGrid() {
  const userData = use(DataContext) ;
    const countOnTrack = userData.filter(user => user.status === "on_track").length;
    console.log(countOnTrack);
    const needAttention = userData.filter(user => user.status === "overdue").length;
    console.log(needAttention);
    const totalFriends = userData.length;
    console.log(totalFriends);
    const gridLength = 4
  return (
    <div>
        <div className="flex gap-10 mt-10">
            <div className='items-center border-2 border-gray-200 rounded-lg p-10 text-center'>
                <h2>{totalFriends}</h2>
                <h2 className="text-2xl font-bold">Total Friends</h2>
            </div>
            <div className='items-center border-2 border-gray-200 rounded-lg p-10 text-center'>
                <h2>{countOnTrack}</h2>
                <h2 className="text-2xl font-bold">On Track</h2>
            </div>
            <div className='items-center border-2 border-gray-200 rounded-lg p-10 text-center'>
                <h2>{needAttention}</h2>
                <h2 className="text-2xl font-bold">Need Attention</h2>
            </div>
            <div className='items-center border-2 border-gray-200 rounded-lg p-10 text-center'>
                <h2>12</h2>
                <h2 className="text-2xl font-bold">Interaction This Month</h2>
            </div>
        </div>

    </div>
  )
}

export default HomeBannerGrid
