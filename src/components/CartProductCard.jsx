import React, { useEffect, useState } from 'react'
import { FaMinus } from 'react-icons/fa6'
import { MdAdd } from 'react-icons/md'

const CartProductCard = (props) => {

    const [data, setData] = useState(props.data)
    useEffect(() => {
        setData(props.data)
    }, [props.data])

    return (
        <div className='pr-10 flex h-24 w-full justify-between items-center rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300'>
            <div className='flex h-full w-full gap-4 items-center'>
                <div className='h-full w-[8%] p-5'>
                    <img src={data.img} className='h-full w-full object-cover' alt="" />
                </div>
                <div>
                    <div>{data.title}</div>
                    <div>{data.quantity}</div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <button className='inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold border border-white rounded-lg bg-green-500 text-white transition-colors cursor-pointer'>
                    <FaMinus onClick={() => {
                        props.setItems(props.items - 1)
                        props.setPrice(Number(props.price) - Number(data.price))
                        props.removeFromCart(data.id)
                    }} className='text-sm' />
                    {data.count}
                    <MdAdd onClick={() => {
                        props.setItems(props.items + 1)
                        props.setPrice(Number(props.price) + Number(data.price))
                        props.addToCart(data.id)
                    }} className='text-sm' />
                </button>
                <div className='font-bold'>₹{Number(data.price) * Number(data.count)}</div>
            </div>
        </div>
    )
}

export default CartProductCard
