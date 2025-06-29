import React from 'react'

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Número de WhatsApp (reemplaza con tu número real)
    const phoneNumber = "5491123456789" // Formato: código país + número sin espacios ni guiones
    const message = "¡Hola! Me interesa conocer más sobre los servicios de DEVXIA 🚀"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    
    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón simple de WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-[#25D366] hover:bg-[#1DAE52] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 animate-bounce-slow"
        aria-label="Contactar por WhatsApp"
      >
        {/* Tu icono personalizado de WhatsApp */}
        <img 
          src="/icons/icons8-whatsapp-50.svg" 
          alt="WhatsApp" 
          className="w-9 h-9"
        />
      </button>

      {/* Tooltip opcional que aparece al hacer hover */}
      <div className="absolute bottom-20 right-0 bg-brand-dark text-white text-sm px-3 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        ¡Hablemos por WhatsApp!
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-brand-dark"></div>
      </div>
    </div>
  )
}

export default WhatsAppButton