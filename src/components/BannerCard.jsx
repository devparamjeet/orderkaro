import React from 'react'

const BannerCard = ({ img }) => {
    return (
        <div className='w-full h-36 sm:h-40 md:h-48 rounded-2xl overflow-hidden shadow-sm group cursor-pointer'>
            <img
                src={img}
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                alt="Banner"
            />
        </div>
    )
}

export default BannerCard
