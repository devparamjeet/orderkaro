import React from 'react'
import { FaMinus } from 'react-icons/fa6'
import { MdAdd } from 'react-icons/md'

const CartProductCard = (props) => {
    return (
        <div className='pr-10 flex h-24 w-full justify-between items-center rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300'>
            <div className='flex h-full w-full gap-4 items-center'>
                <div className='h-full w-[8%] p-5'>
                    <img src={props.data.img} className='h-full w-full object-cover' alt="" />
                </div>
                <div>
                    <div>{props.data.title}</div>
                    <div>{props.data.quantity}</div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <button className='inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold border border-white rounded-lg bg-green-500 text-white transition-colors cursor-pointer'>
                    <FaMinus className='text-sm' />
                    {props.data.count}
                    <MdAdd className='text-sm' />
                </button>
                <div className='font-bold'>₹{Number(props.data.price) * Number(props.data.count)}</div>
            </div>
        </div>
    )
}

export default CartProductCard
