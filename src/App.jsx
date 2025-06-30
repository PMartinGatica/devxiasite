import React, { useState } from 'react'
import './App.css'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Cart from './components/Cart'

function App() {
  const [showHero, setShowHero] = useState(true)

  return (
    <CartProvider>
      <div className="min-h-screen bg-brand-dark text-brand-light">
        <Navbar />
        
        {/* Hero solo se muestra cuando showHero es true */}
        {showHero && <Hero />}
        
        {/* Services ahora controla la visibilidad del Hero */}
        <Services onServiceSelected={() => setShowHero(false)} onBackToServices={() => setShowHero(true)} />
        
        {showHero && (
          <>
            <FAQ />
            <Contact />
            <Footer />
          </>
        )}
        
        {/* Botón de WhatsApp */}
        <WhatsAppButton />
        
        {/* Carrito de compras */}
        <Cart />
      </div>
    </CartProvider>
  )
}

export default App
