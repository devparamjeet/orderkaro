import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import CartProductCard from '../components/CartProductCard'

const Cart = () => {

  const { items, setItems, price, setPrice, productdata, addToCart, removeFromCart } = useOutletContext()
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
  },[products])

  // console.log(products)
  return (
    <div className='flex flex-col p-20'>
      {products.map((value)=>{
        return <CartProductCard items={items} setItems={setItems} data={value} price={price} setPrice={setPrice} addToCart={addToCart} removeFromCart={removeFromCart}/>
      })}
    </div>
  )
}

export default Cart