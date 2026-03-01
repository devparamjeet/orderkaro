import React, { useRef, useState, useEffect } from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import ProductCard from './ProductCard'

const VISIBLE = 6

const Product = ({ data }) => {
    const scrollRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)
    const isSlider = data.cards.length > VISIBLE

    const updateArrows = () => {
        const el = scrollRef.current
        if (!el) return
        setCanScrollLeft(el.scrollLeft > 0)
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
    }

    useEffect(() => {
        if (!isSlider) return
        updateArrows()
        const el = scrollRef.current
        el?.addEventListener('scroll', updateArrows)
        window.addEventListener('resize', updateArrows)
        return () => {
            el?.removeEventListener('scroll', updateArrows)
            window.removeEventListener('resize', updateArrows)
        }
    }, [isSlider])

    const scroll = (dir) => {
        const el = scrollRef.current
        if (!el) return
        const cardWidth = el.querySelector(':first-child')?.offsetWidth ?? 220
        el.scrollBy({ left: dir * (cardWidth + 16) * 2, behavior: 'smooth' })
    }

    return (
        <div className='w-full'>
            {/* Section Header */}
            <div className='flex items-center justify-between mb-4'>
                <h2 className='text-xl font-bold text-gray-900'>{data.title}</h2>
                <div className='flex items-center gap-2'>
                    {isSlider && (
                        <>
                            <button
                                onClick={() => scroll(-1)}
                                disabled={!canScrollLeft}
                                className='p-1.5 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition'
                            >
                                <IoChevronBackOutline className='text-lg' />
                            </button>
                            <button
                                onClick={() => scroll(1)}
                                disabled={!canScrollRight}
                                className='p-1.5 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition'
                            >
                                <IoChevronForwardOutline className='text-lg' />
                            </button>
                        </>
                    )}
                    <button className='text-sm font-semibold text-green-600 hover:text-green-700 hover:underline transition-colors'>
                        See all →
                    </button>
                </div>
            </div>

            {/* Cards — grid when ≤6, horizontal scroll when >6 */}
            {isSlider ? (
                <div
                    ref={scrollRef}
                    className='flex gap-4 overflow-x-auto scroll-smooth pb-2 scrollbar-hide'
                >
                    {data.cards.map((value, idx) => (
                        <div key={idx} className='shrink-0 w-[180px] sm:w-[200px]'>
                            <ProductCard data={value} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
                    {data.cards.map((value, idx) => (
                        <ProductCard key={idx} data={value} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Product
