import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Plans from './components/Plans'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <div className="bg-brand-dark text-brand-light min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Plans />
      <FAQ />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default App
