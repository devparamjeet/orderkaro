import React, { useEffect, useState } from 'react'
import { FaMinus } from 'react-icons/fa6'
import { IoIosAdd } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'
import { MdAdd, MdOutlineElectricBolt } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const ProductCard = (props) => {
    let navigate = useNavigate()

    let productsData = JSON.parse(localStorage.getItem("products"))
    const [count, setCount] = useState(0)
    
    useEffect(()=>{
        let product = productsData.find((value)=>{
            return props.data.id === value.prod_id
        })

        if(product){
            setCount(product.quantity)
        }
        else{
            setCount(0)
        }
    },[productsData])

    let handleProduct = () => {
        navigate('/product')
    }

    let handleAdd = () => {
        setCount(count + 1)
        props.setItems(props.items + 1)
        props.setPrice(Number(props.price) + Number(props.data.price))
        props.addToCart(props.data.id)
    }

    return (
        <div className='group flex flex-col h-[350px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden'>

            {/* Image */}
            <div onClick={handleProduct} className='w-full aspect-square bg-gray-50 overflow-hidden p-3'>
                <img
                    src={props.data.img}
                    alt={props.data.title}
                    className='w-full cursor-pointer h-full object-contain group-hover:scale-105 transition-transform duration-300'
                />
            </div>

            {/* Info */}
            <div className='flex flex-col gap-1.5 p-3 flex-1'>
                {/* Delivery time */}
                <span className='inline-flex items-center gap-1 text-[11px] font-semibold text-green-600 bg-green-50 rounded-full px-2 py-0.5 w-fit'>
                    <MdOutlineElectricBolt className='text-xs' />
                    {props.data.time}
                </span>

                {/* Title */}
                <h4 className='text-sm font-semibold text-gray-800 leading-snug line-clamp-2'>
                    {props.data.title}
                </h4>

                {/* Quantity */}
                <p className='text-xs text-gray-400'>{props.data.quantity}</p>

                {/* Price + Add */}
                <div className='flex items-center justify-between mt-auto pt-2'>
                    <span className='text-sm font-bold text-gray-900'>₹{props.data.price}</span>

                    {count > 0 ? <button className='inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold border border-white rounded-lg bg-green-500 text-white transition-colors cursor-pointer'>
                        <FaMinus onClick={() => {

                            setCount(count - 1)
                            props.setItems(props.items - 1)
                            props.setPrice(Number(props.price) - Number(props.data.price))
                            props.removeFromCart(props.data.id)

                        }} className='text-sm' />
                        {count}
                        <MdAdd onClick={handleAdd} className='text-sm' />
                    </button> : <button onClick={handleAdd} className='inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-green-600 border border-green-500 rounded-lg hover:bg-green-500 hover:text-white active:bg-green-600 transition-colors cursor-pointer'>
                        <IoCartOutline className='text-sm' />
                        ADD
                    </button>
                    }

                </div>
            </div>
        </div>
    )
}

export default ProductCard
