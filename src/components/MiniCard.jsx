import React from 'react'

const MiniCard = ({ img, key }) => {
  return (
    <div className='flex flex-col items-center gap-2 cursor-pointer group'>
      <div className='w-full rounded-2xl overflow-hidden bg-orange-50 transition-shadow duration-300'>
        <img
          src={img}
          alt="category"
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
        />
      </div>
    </div>
  )
}

export default MiniCard
