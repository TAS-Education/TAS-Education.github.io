'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              TAS Education
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-blue-600">
              About
            </Link>
            <Link href="/product" className="text-gray-600 hover:text-blue-600">
              Product
            </Link>
            <Link href="/beta" className="text-gray-600 hover:text-blue-600">
              Beta Programme
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Join Beta
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out z-50 ${
          isMenuOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <Link 
            href="/about" 
            className="block text-gray-600 hover:text-blue-600 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/product" 
            className="block text-gray-600 hover:text-blue-600 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Product
          </Link>
          <Link 
            href="/beta" 
            className="block text-gray-600 hover:text-blue-600 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Beta Programme
          </Link>
          <Link 
            href="/contact" 
            className="block text-gray-600 hover:text-blue-600 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Join Beta
          </button>
        </div>
      </div>
    </nav>
  )
} 