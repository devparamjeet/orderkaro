import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const MainOutlet = () => {

  const [items, setItems] = useState(0)

  return (
    <>
      <Navbar items={items} />
      <Outlet context={[items , setItems]} />
      <Footer />
    </>
  )
}

export default MainOutlet
