import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Plans from './components/Plans'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import ChatWidget from './components/ChatWidget' // Guardado para después
import WhatsAppButton from './components/WhatsAppButton' // Nuevo componente simple

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-light">
      <Navbar />
      <Hero />
      <Services />
      <Plans />
      <FAQ />
      <Contact />
      <Footer />
      
      {/* Botón simple de WhatsApp */}
      <WhatsAppButton />
      
      {/* ChatWidget guardado para después */}
      {/* <ChatWidget /> */}
    </div>
  )
}

export default App
