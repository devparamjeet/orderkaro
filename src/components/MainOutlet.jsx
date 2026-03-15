import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const MainOutlet = () => {

  let data = JSON.parse(localStorage.getItem("products"))
  let total_price = JSON.parse(localStorage.getItem("price"))

  const [items, setItems] = useState(!data ? 0 : data.length)
  const [price, setPrice] = useState(!total_price ? 0 : total_price)
  const [productdata, setProductdata] = useState(!data ? [] : data)

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(productdata))
    localStorage.setItem("price", JSON.stringify(price))
  }, [productdata, price])

  let addToCart = (id) => {
    setProductdata((prev) => {
      let checkProduct = prev.find((val) => {
        return val.prod_id === id
      })
      // console.log(checkProduct)
      if (checkProduct) {
        return prev.map((item) => {
          return item.prod_id === id ? { ...item, quantity: item.quantity + 1 } : item
        })
      }
      else {
        return [...prev, { prod_id: id, quantity: 1 }]
      }
    })
  }

  let removeFromCart = (id) => {
    setProductdata((prev) => {

      return prev.map((item) => {
        return item.prod_id === id ? { ...item, quantity: item.quantity - 1 } : item
      }).filter((item) => { return item.quantity > 0 })

    })
  }

  return (
    <>
      <Navbar items={items} price={price} />
      <Outlet context={{ items, setItems, price, setPrice, addToCart, removeFromCart, productdata }} />
      <Footer />
    </>
  )
}

export default MainOutlet
