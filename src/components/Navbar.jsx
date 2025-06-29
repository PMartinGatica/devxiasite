import React, { useState, useEffect } from 'react'
import { Share2 } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="container mx-auto px-6 py-4 max-w-7xl flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-2">
          <Share2 className="w-8 h-8 gradient-text" />
          <span className="text-2xl font-semibold text-white">DEVXIA</span>
        </a>
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
          <li><a href="#planes" className="hover:text-white transition-colors">Planes</a></li>
          <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
          <li>
            <a 
              href="https://wa.me/5491112345678" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="gradient-bg text-white font-bold py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
            >
              Contactar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
