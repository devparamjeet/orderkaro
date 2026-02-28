import React from 'react'

const ProductCard = (props) => {
    return (
        <div className='w-[15vw] h-full border border-black flex flex-col justify-between p-4'>
            <div className='h-[50%] w-full'>
                <img src={props.nikki.img} className='w-full h-full object-cover' alt="" />
            </div>
            <p>{props.nikki.time}</p>
            <h4 className='font-bold'>{props.nikki.title}</h4>
            <h6>{props.nikki.quantity}</h6>

            <div className='flex justify-between'>
                <div>{props.nikki.price} /-</div>
                <button className='px-3 py-1 border border-green-500 text-green-500 rounded-lg'>ADD</button>
            </div>
        </div>
    )
}

export default ProductCard
