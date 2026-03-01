import React, { useState } from 'react'
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5'
import { MdOutlineElectricBolt } from 'react-icons/md'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import { FiUser } from 'react-icons/fi'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    return (
        <nav className='w-full bg-white border-b border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.08)] sticky top-0 z-50'>
            <div className='w-full px-4'>
                <div className='flex items-center h-[68px] gap-4'>

                    {/* Logo */}
                    <div className='shrink-0 w-36 sm:w-44'>
                        <img
                            className='w-full h-14 object-contain'
                            src="/orderkarologo.png"
                            alt="OrderKaro"
                        />
                    </div>

                    {/* Divider + Delivery Info */}
                    <div className='hidden md:flex items-center gap-3 pl-4 border-l border-gray-200'>
                        <div className='flex flex-col'>
                            <span className='text-[11px] font-medium text-gray-400 uppercase tracking-wide'>
                                Delivery in
                            </span>
                            <span className='font-bold text-sm text-gray-900 flex items-center gap-1 leading-tight'>
                                <MdOutlineElectricBolt className='text-green-500 text-base shrink-0' />
                                12 minutes
                            </span>
                        </div>
                        <div className='flex flex-col border-l border-gray-200 pl-3'>
                            <span className='text-[11px] font-medium text-gray-400 uppercase tracking-wide'>
                                Deliver to
                            </span>
                            <span className='text-sm text-gray-700 font-semibold flex items-center gap-1 leading-tight'>
                                <HiOutlineLocationMarker className='text-green-500 shrink-0' />
                                <span className='truncate max-w-[140px]'>Shastri Nagar</span>
                            </span>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className='flex-1 hidden sm:flex items-center px-2'>
                        <div className='relative w-full max-w-2xl'>
                            <IoSearchOutline className='absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none' />
                            <input
                                type="text"
                                placeholder='Search "milk", "bread", "chips"...'
                                className='w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all duration-200'
                            />
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className='ml-auto flex items-center gap-1.5 sm:gap-2'>

                        {/* Mobile: Search */}
                        <button
                            className='sm:hidden p-2 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors'
                            onClick={() => { setSearchOpen(!searchOpen); setMenuOpen(false) }}
                            aria-label='Toggle search'
                        >
                            <IoSearchOutline className='text-xl' />
                        </button>

                        {/* Login */}
                        <button className='hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl text-gray-700 hover:bg-gray-100 transition-colors'>
                            <FiUser className='text-base' />
                            Login
                        </button>

                        {/* Cart */}
                        <button className='inline-flex items-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white text-sm font-bold rounded-xl transition-colors shadow-sm shadow-green-200'>
                            <IoCartOutline className='text-lg' />
                            <span className='hidden sm:inline'>My Cart</span>
                            <span className='bg-white text-green-600 text-[11px] font-extrabold rounded-full w-5 h-5 flex items-center justify-center leading-none'>
                                0
                            </span>
                        </button>

                        {/* Mobile: Hamburger */}
                        <button
                            className='sm:hidden p-2 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors'
                            onClick={() => { setMenuOpen(!menuOpen); setSearchOpen(false) }}
                            aria-label='Toggle menu'
                        >
                            {menuOpen
                                ? <RxCross2 className='text-xl' />
                                : <RxHamburgerMenu className='text-xl' />
                            }
                        </button>
                    </div>
                </div>

                {/* Mobile: Search Drawer */}
                {searchOpen && (
                    <div className='sm:hidden pb-3'>
                        <div className='relative w-full'>
                            <IoSearchOutline className='absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none' />
                            <input
                                type="text"
                                placeholder='Search "milk", "bread", "chips"...'
                                className='w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all duration-200'
                                autoFocus
                            />
                        </div>
                    </div>
                )}

                {/* Mobile: Menu Drawer */}
                {menuOpen && (
                    <div className='sm:hidden border-t border-gray-100 py-4 space-y-4'>
                        {/* Delivery info */}
                        <div className='flex items-center gap-4 px-1'>
                            <div className='flex flex-col'>
                                <span className='text-[10px] font-medium text-gray-400 uppercase tracking-wide'>Delivery in</span>
                                <span className='font-bold text-sm text-gray-900 flex items-center gap-1'>
                                    <MdOutlineElectricBolt className='text-green-500' />
                                    12 minutes
                                </span>
                            </div>
                            <div className='flex flex-col border-l border-gray-200 pl-4'>
                                <span className='text-[10px] font-medium text-gray-400 uppercase tracking-wide'>Deliver to</span>
                                <span className='font-semibold text-sm text-gray-700 flex items-center gap-1'>
                                    <HiOutlineLocationMarker className='text-green-500' />
                                    Shastri Nagar
                                </span>
                            </div>
                        </div>
                        {/* Login */}
                        <div className='border-t border-gray-100 pt-3'>
                            <button className='w-full flex items-center gap-2 px-2 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-xl transition-colors'>
                                <FiUser className='text-base text-gray-500' />
                                Login / Sign up
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
