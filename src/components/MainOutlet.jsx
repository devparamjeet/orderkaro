import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const MainOutlet = () => {

  const [items, setItems] = useState(0)
  const [price, setPrice] = useState(0)
  const [productdata, setProductdata] = useState([])

  let addToCart = (id) => {
    setProductdata((prev) => {
      let checkProduct = prev.find((val) => {
        return val.prod_id === id
      })
      // console.log(checkProduct)
      if (checkProduct) {
        return prev.map((item)=>{
          return item.prod_id === id ? {...item , quantity : item.quantity + 1} : item
        }) 
      }
      else {
        return [...prev, { prod_id: id, quantity: 1 }]
      }
    })
  }

  let removeFromCart = (id) => {

  }

  // console.log(productdata)

  return (
    <>
      <Navbar items={items} price={price} />
      <Outlet context={{ items, setItems, price, setPrice, addToCart , removeFromCart, productdata }} />
      <Footer />
    </>
  )
}

export default MainOutlet
