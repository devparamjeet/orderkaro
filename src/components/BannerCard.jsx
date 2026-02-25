import React from 'react'

const BannerCard = (props) => {
    return (
        <div className='w-[27%] h-full bg-gray-500 rounded-2xl'>
            <img src={props.img} className='w-full h-full object-cover' alt="" />
        </div>
    )
}

export default BannerCard
