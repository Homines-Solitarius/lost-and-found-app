'use client';

import { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Report Lost Item', href: '/report_item' },
    { name: 'Contact Us', href: '#' },
  ]

  return (
    <header className="bg-blue-700 shadow-md sm:px-10 md:px-20 lg:px-4 px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">FPE Recover</h1>

        {/* Hamburger button - shown on mobile only */}
        <button
          className="sm:hidden text-2xl outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <FaHamburger className='text-white'/>
        </button>

        {/* Desktop nav - always visible on sm+ */}
        <nav className="hidden sm:flex gap-6 transition-all duration-300">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-md font-semibold px-6 py-2 rounded-md text-white hover:text-blue-700 hover:bg-white transition-colors duration-200">
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile nav - toggles on hamburger click */}
      {isOpen && (
        <div className={`overflow-hidden transition-all duration-300 ease-in-out sm:hidden ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <nav className="flex flex-col gap-2 mt-4 sm:hidden transition-all duration-300 ease-in-out">
            {navigation.map((item) => (
              <Link onClick={() => setIsOpen(!isOpen)} key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-200 hover:text-white">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
