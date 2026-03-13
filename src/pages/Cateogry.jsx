import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { BiLeftArrowCircle } from 'react-icons/bi'

const Cateogry = () => {
    let redirect = useNavigate()
  const { items, setItems, price, setPrice } = useOutletContext()

    let id = JSON.parse(localStorage.getItem("prod_id"))
    // console.log(id)

    const [data, setData] = useState({})

    useEffect(() => {
        let fetchAPI = async () => {
            let resp = await fetch("http://localhost:3000/product/" + id)
            let res = await resp.json()
            setData(res)
            console.log(res)
        }
        fetchAPI()
    }, [])

    console.log(!data?.cards)

    return (
        <div className='px-20 py-10'>
            <BiLeftArrowCircle className='text-4xl cursor-pointer' onClick={()=>{redirect("/")}}/>
            <br />
            <h2 className='text-4xl font-semibold underline'>{data.title}</h2>
            <br />
            <div className='grid grid-cols-5 gap-5 w-full'>
                {!data?.cards ? <></> : data.cards.map((val) => {
                    return <ProductCard data={val} price={price} setPrice={setPrice}  items={items} setItems={setItems} />
                })}
            </div>
            <br />
            <br />
            <div className='text-center text-neutral-400'>
                No more results...
            </div>
        </div>
    )
}

export default Cateogry
