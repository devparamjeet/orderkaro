import React from 'react'

const Product = () => {
  return (
    <div className='w-full h-[90vh] flex'>
      <div className='w-[40%] h-full p-15'>
        <img className='w-full h-full hover:scale-110 transition-all object-cover' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/f55e87f5-ecab-4d91-aca9-62883084374d.png" alt="" />
      </div>
      <div className='w-[60%] h-full overflow-y-scroll no-scroll'>
        <div className='w-full h-[200%]'>
          <h2>Lay's Classic Salted Chips</h2>
        </div>
      </div>
    </div>
  )
}

export default Product
