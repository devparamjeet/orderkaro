import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-20 bg-orange-100 flex items-center'>
            <div className='w-[13%] h-full p-6'>
                <img className='w-full h-full object-cover' src="https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/blinkit-logo-hd.png" alt="" />
            </div>
            <div className='w-[25%] h-full p-4'>
                <h3 className='font-bold text-lg'>Delivery in 12 minutes</h3>
                <p>
                    4VQG+469, Shastri Nagar,...</p>
            </div>
            <div className='flex justify-center gap-10 w-full'>
                <input type="text" placeholder='Search Products..' className='w-[50%]'/>
                <button className='px-4 py-2 bg-amber-200 rounded-md'>LOGIN</button>
                <button className='px-4 py-2 bg-green-600 text-white rounded-md' disabled>MY CART</button>
            </div>
        </div>
    )
}

export default Navbar
