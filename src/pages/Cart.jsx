import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import CartProductCard from '../components/CartProductCard'

const Cart = () => {

  const { productdata } = useOutletContext()
  const [products, setProducts] = useState([])

  let filterData = (arr) =>{
    
    let updatedData = []
    // console.log(productdata)
    productdata.forEach((value)=>{
    
      let product =  arr.find((items)=>{
        return items.id === value.prod_id
      })
      updatedData.push({...product, count : value.quantity})
    
    })
    setProducts(updatedData)
  }

  let adjustData = (data) =>{
    let arr = []
    data.forEach((value)=>{
      arr.push(...value.cards)
    })
    filterData(arr)
  }

  useEffect(() => {
    let fetchData = async () => {
      let resp = await fetch("http://localhost:3000/product")
      let res = await resp.json()
      adjustData(res)
    }
    fetchData()
  },[])

  // console.log(products)
  return (
    <div className='flex flex-col p-20'>
      {products.map((value)=>{
        return <CartProductCard data={value}/>
      })}
    </div>
  )
}

export default Cart