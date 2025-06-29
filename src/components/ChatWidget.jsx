import React, { useState, useEffect, useRef } from 'react'
import { Share2, X, Send } from 'lucide-react'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState('start')
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [waitingForInput, setWaitingForInput] = useState(false)
  const chatBodyRef = useRef(null)

  const chatFlow = {
    "start": {
      "message": "¡Hola! 👋 Soy el asistente de DEVXIA. ¿Cómo puedo ayudarte hoy?",
      "options": [
        { "text": "Cotizar un proyecto", "next": "quote_start" },
        { "text": "Consulta general", "next": "general_query" },
      ]
    },
    "quote_start": {
      "message": "¡Genial! Me encantaría ayudarte con eso. ¿Qué tipo de proyecto tienes en mente?",
      "options": [
        { "text": "Landing Page", "next": "quote_landing" },
        { "text": "Página Web", "next": "quote_web" },
        { "text": "App Móvil (APK)", "next": "quote_apk" },
        { "text": "Flyer", "next": "quote_flyer" }
      ]
    },
    "quote_landing": { 
      "message": "Perfecto. Las Landing Pages son nuestra especialidad para captar clientes. Un ejecutivo se pondrá en contacto contigo para afinar los detalles. ¿Te puedo ayudar en algo más?", 
      "options": [{ "text": "Volver al inicio", "next": "start" }] 
    },
    "quote_web": { 
      "message": "Excelente elección. Un sitio web completo es clave. Un ejecutivo te contactará para definir el alcance. ¿Necesitas algo más?", 
      "options": [{ "text": "Volver al inicio", "next": "start" }] 
    },
    "quote_apk": { 
      "message": "¡Una App! Eso es pensar en grande. Es un proceso más detallado, así que un especialista se comunicará contigo. ¿Alguna otra consulta?", 
      "options": [{ "text": "Volver al inicio", "next": "start" }] 
    },
    "quote_flyer": { 
      "message": "¡Claro! Un buen diseño de flyer marca la diferencia. Un diseñador te contactará pronto. ¿Te ayudo con otra cosa?", 
      "options": [{ "text": "Volver al inicio", "next": "start" }] 
    },
    "general_query": {
      "message": "Por supuesto. Escribe tu consulta y uno de nuestros expertos te responderá a la brevedad.",
      "waitForInput": true
    },
    "fallback": {
      "message": "Entendido. He registrado tu mensaje. Un asesor se comunicará contigo pronto. ¿Hay algo más en lo que pueda ayudarte?",
      "options": [{ "text": "Volver al inicio", "next": "start" }]
    }
  }

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        processStep('start')
      }, 500)
    }
  }, [isOpen])

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight
    }
  }, [messages])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const addMessage = (text, sender) => {
    setMessages(prev => [...prev, { text, sender, id: Date.now() }])
  }

  const processStep = (stepKey) => {
    const step = chatFlow[stepKey]
    if (!step) return

    setTimeout(() => {
      addMessage(step.message, 'bot')
      setWaitingForInput(!!step.waitForInput)
    }, 500)
  }

  const handleOptionClick = (option) => {
    addMessage(option.text, 'user')
    setCurrentStep(option.next)
    processStep(option.next)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    addMessage(inputValue, 'user')
    setInputValue('')
    setCurrentStep('fallback')
    processStep('fallback')
    setWaitingForInput(false)
  }

  const getCurrentOptions = () => {
    const step = chatFlow[currentStep]
    return step?.options || []
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón flotante */}
      <button
        onClick={toggleChat}
        className="bg-[#25D366] hover:bg-[#1DAE52] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="36" 
          height="36" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className={isOpen ? 'hidden' : 'block'}
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.459l-6.273 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.803 6.13l-1.327 4.869 4.869-1.327z"/>
        </svg>
        <X className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`} />
      </button>

      {/* Ventana del chat */}
      <div className={`chat-widget absolute bottom-20 right-0 w-80 bg-brand-dark-blue rounded-xl shadow-2xl border border-brand-border transform transition-all duration-300 ${
        isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-95 opacity-0 pointer-events-none'
      }`}>
        {/* Header */}
        <div className="p-4 bg-brand-dark rounded-t-xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Share2 className="w-8 h-8 gradient-text" />
            <div>
              <h4 className="font-bold text-white">DEVXIA</h4>
              <p className="text-xs text-brand-light/60">Asistente Virtual</p>
            </div>
          </div>
          <button 
            onClick={toggleChat}
            className="text-brand-light/60 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cuerpo de mensajes */}
        <div ref={chatBodyRef} className="p-4 h-96 overflow-y-auto flex flex-col gap-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-3 rounded-lg max-w-[85%] text-sm ${
                message.sender === 'bot'
                  ? 'bg-brand-border self-start'
                  : 'gradient-bg text-white self-end'
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>

        {/* Footer con input y opciones */}
        <div className="p-4 border-t border-brand-border">
          {/* Opciones de respuesta rápida */}
          {getCurrentOptions().length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {getCurrentOptions().map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="bg-brand-border hover:bg-brand-blue text-xs font-semibold py-1 px-3 rounded-full transition-colors"
                >
                  {option.text}
                </button>
              ))}
            </div>
          )}

          {/* Input de texto */}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe un mensaje..."
              disabled={!waitingForInput && getCurrentOptions().length > 0}
              className="flex-grow bg-brand-dark border border-brand-border rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="gradient-bg p-2 rounded-lg text-white disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChatWidget
