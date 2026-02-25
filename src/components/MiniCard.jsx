import React from 'react'

const MiniCard = (props) => {
  return (
    <div className='w-[10%] h-40 bg-amber-300 rounded-xl overflow-hidden'>
      <img src={props.img} alt="" className='h-full w-full object-cover' />
    </div>
  )
}

export default MiniCard
