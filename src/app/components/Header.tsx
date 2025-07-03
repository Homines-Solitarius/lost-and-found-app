'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]

  return (
    <header className="bg-blue-700 shadow-md p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">FPE Recover</h1>

        {/* Hamburger button - shown on mobile only */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Desktop nav - always visible on sm+ */}
        <nav className="hidden sm:flex gap-6">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile nav - toggles on hamburger click */}
      {isOpen && (
        <div className={`overflow-hidden transition-all duration-300 ease-in-out sm:hidden ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <nav className="flex flex-col gap-2 mt-4 sm:hidden">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
