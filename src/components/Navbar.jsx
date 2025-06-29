import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* LOGO ACTUALIZADO CON TU ARCHIVO SVG */}
          <a href="#inicio" className="flex items-center gap-2">
            <img 
              src="/logo2devxia.svg" 
              alt="DEVXIA Logo" 
              className="w-8 h-8 gradient-text"
            />
            <span className="text-2xl font-semibold text-white">DEVXIA</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-brand-light hover:text-brand-cyan transition-colors">
              Servicios
            </a>
            <a href="#planes" className="text-brand-light hover:text-brand-cyan transition-colors">
              Planes
            </a>
            <a href="#faq" className="text-brand-light hover:text-brand-cyan transition-colors">
              FAQ
            </a>
            <a href="#contacto" className="bg-brand-cyan text-brand-dark px-6 py-2 rounded-full hover:bg-brand-cyan/90 transition-colors font-semibold">
              Contactar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-light"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-brand-border">
            <div className="flex flex-col gap-4 pt-4">
              <a href="#servicios" className="text-brand-light hover:text-brand-cyan transition-colors">
                Servicios
              </a>
              <a href="#planes" className="text-brand-light hover:text-brand-cyan transition-colors">
                Planes
              </a>
              <a href="#faq" className="text-brand-light hover:text-brand-cyan transition-colors">
                FAQ
              </a>
              <a href="#contacto" className="bg-brand-cyan text-brand-dark px-6 py-2 rounded-full hover:bg-brand-cyan/90 transition-colors font-semibold text-center">
                Contactar
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
