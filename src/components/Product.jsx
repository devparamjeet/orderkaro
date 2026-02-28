import React from 'react'
import ProductCard from './ProductCard'

const Product = (props) => {
    console.log(props.data.cards)
    return (
        <div className='h-[50vh] w-full flex flex-col justify-around bg-amber-200'>
            <div className='flex justify-between'>
                <h1>{props.data.title}</h1>
                <button>see all</button>
            </div>
            <div className='h-[45vh] w-full flex gap-10'>
                {props.data.cards.map((value)=>{
                    console.log(value)
                    return (
                        <ProductCard nikki={value} />
                    )
                })}
            </div>
        </div>
    )
}

export default Product
