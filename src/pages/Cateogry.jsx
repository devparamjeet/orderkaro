import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const Cateogry = () => {

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
        <div>
            {data.title}
            <br />
            <div className='flex flex-wrap'>
                {!data?.cards ? <></> : data.cards.map((val) => {
                    return <ProductCard data={val} />
                })}
            </div>
        </div>
    )
}

export default Cateogry
