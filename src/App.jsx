import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
// import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Demos from './components/Demos'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import NotFound from './pages/NotFound'
// import Cart from './components/Cart'

// Componente principal de la página de inicio
const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Demos />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

function App() {

  return (
    <Router>
      {/* <CartProvider> */}
        <div className="min-h-screen bg-brand-dark text-brand-light">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aviso-privacidad" element={<PrivacyPolicy />} />
            <Route path="/terminos-condiciones" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          {/* Botón de WhatsApp */}
          <WhatsAppButton />
          
          {/* Carrito de compras - Comentado temporalmente */}
          {/* <Cart /> */}
        </div>
      {/* </CartProvider> */}
    </Router>
  )
}

export default App
