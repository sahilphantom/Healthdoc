import React, { useState, useEffect } from 'react'
import { FaHeartbeat, FaApple } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`flex justify-center w-full ${isScrolled ? 'fixed top-0 left-0 right-0 z-50 ' : 'lg:my-6'}`}>
      <nav className={`px-4 py-4 w-full transition-all duration-300 ${
  isScrolled 
    ? 'bg-white  shadow-md' 
    : 'bg-[#111827] lg:w-[75%] lg:rounded-[50px]'
}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to='/' className="flex items-center space-x-2">
            <FaHeartbeat className="text-[#22c55e] text-2xl" />
            <span className={`font-semibold text-xl ${isScrolled ? 'text-gray-800 '  : 'text-white'}`}>HealthDoc</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className={`transition-colors ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`}>
              About us
            </Link>
            <Link to="/blog" className={`transition-colors ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`}>
              Blog
            </Link>
            <Link to="/contact" className={`transition-colors ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`}>
              Contact
            </Link>
          </div>

          {/* Desktop Download Button */}
          <button className="hidden md:block bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-4 py-2 rounded-full transition-colors">
            Download App
          </button>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-auto bg-[#111827] z-50">
            <div className="p-4">
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <FaHeartbeat className="text-[#22c55e] text-2xl" />
                  <span className="text-white font-semibold text-xl">HealthDoc</span>
                </div>
                <button 
                  className="text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <HiX className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/about" 
                  className="text-white py-4 border-b border-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About us
                </Link>
                <Link
                  to="/blog" 
                  className="text-white py-4 border-b border-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/contact" 
                  className="text-white py-4 border-b border-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Download Button */}
              <button className="flex items-center justify-center w-full bg-[#7c3aed] text-white py-3 rounded-lg mt-8">
                <FaApple className="mr-2 text-xl" />
                Download App
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

