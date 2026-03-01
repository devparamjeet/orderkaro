import React from 'react'
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaThreads } from 'react-icons/fa6'

const usefulLinks = {
  "": ["Blog", "Privacy", "Terms", "FAQs", "Security", "Contact"],
  " ": ["Partner", "Franchise", "Seller", "Warehouse", "Deliver", "Resources"],
  "  ": ["Recipes", "Bistro", "District", "OrderKaro Ambulance"],
}

const categories = [
  ["Vegetables & Fruits", "Cold Drinks & Juices", "Bakery & Biscuits", "Dry Fruits, Masala & Oil", "Paan Corner", "Pharma & Wellness", "Personal Care", "Magazines", "Electronics & Electricals", "Toys & Games"],
  ["Dairy & Breakfast", "Instant & Frozen Food", "Sweet Tooth", "Sauces & Spreads", "Organic & Premium", "Cleaning Essentials", "Pet Care", "Kitchen & Dining", "Stationery Needs", "Print Store"],
  ["Munchies", "Tea, Coffee & Milk Drinks", "Atta, Rice & Dal", "Chicken, Meat & Fish", "Baby Care", "Home Furnishing & Decor", "Beauty & Cosmetics", "Fashion & Accessories", "Books", "E Gift Cards"],
]

const socials = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaXTwitter />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
  { icon: <FaThreads />, href: "#" },
]

const Footer = () => {
  return (
    <footer className='w-full bg-white border-t border-gray-100 mt-16'>

      {/* Main footer content */}
      <div className='px-4 sm:px-8 md:px-12 lg:px-20 py-10'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-10'>

          {/* Useful Links */}
          <div className='shrink-0'>
            <h3 className='text-sm font-bold text-gray-900 mb-4'>Useful Links</h3>
            <div className='flex flex-wrap gap-8 sm:gap-10'>
              {Object.entries(usefulLinks).map(([, links], colIdx) => (
                <ul key={colIdx} className='space-y-2'>
                  {links.map((link) => (
                    <li key={link}>
                      <a href='#' className='text-sm text-gray-500 hover:text-gray-800 transition-colors'>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className='hidden lg:block w-px bg-gray-100 self-stretch' />

          {/* Categories */}
          <div className='flex-1'>
            <div className='flex items-center gap-3 mb-4'>
              <h3 className='text-sm font-bold text-gray-900'>Categories</h3>
              <a href='#' className='text-xs font-semibold text-green-600 hover:underline'>see all</a>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-0'>
              {categories.map((col, colIdx) => (
                <ul key={colIdx} className='space-y-2'>
                  {col.map((cat) => (
                    <li key={cat}>
                      <a href='#' className='text-sm text-gray-500 hover:text-gray-800 transition-colors'>
                        {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className='border-t border-gray-100 px-4 sm:px-8 md:px-12 lg:px-20 py-4 flex flex-col sm:flex-row items-center justify-between gap-4'>

        {/* Copyright */}
        <p className='text-xs text-gray-400'>
          © OrderKaro Commerce Private Limited, 2016–2026
        </p>

        {/* Download App */}
        <div className='flex items-center gap-3'>
          <span className='text-xs font-semibold text-gray-600'>Download App</span>
          <a href='#' className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-white text-xs font-medium rounded-lg hover:bg-gray-800 transition-colors'>
            <svg className='w-4 h-4' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z'/>
            </svg>
            App Store
          </a>
          <a href='#' className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-white text-xs font-medium rounded-lg hover:bg-gray-800 transition-colors'>
            <svg className='w-4 h-4' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M3.18 23.76c.3.17.64.19.96.08l.07-.04 11.2-6.47-2.39-2.4-9.84 8.83zm14.96-8.65L15.9 12l2.24-3.11L21.4 12l-3.26 3.11zM2.44.28C2.1.46 1.88.82 1.88 1.27v21.46c0 .45.22.81.56.99l.08.04 12.02-12.02L2.44.28zm13.15 10.52L13.2 8.41 2.44.28l11.62 10.52z'/>
            </svg>
            Google Play
          </a>
        </div>

        {/* Social Icons */}
        <div className='flex items-center gap-2'>
          {socials.map((s, idx) => (
            <a
              key={idx}
              href={s.href}
              className='w-8 h-8 flex items-center justify-center rounded-full bg-gray-900 text-white text-sm hover:bg-green-600 transition-colors'
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className='border-t border-gray-100 px-4 sm:px-8 md:px-12 lg:px-20 py-4'>
        <p className='text-xs text-gray-400 leading-relaxed'>
          "OrderKaro" is owned &amp; managed by "OrderKaro Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to "GROFFR.COM" which is a real estate services business operated by "Redstone Consultancy Services Private Limited".
        </p>
      </div>

    </footer>
  )
}

export default Footer
