import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // Primera pregunta abierta por defecto

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar un proyecto?",
      answer: "El tiempo varía según la complejidad del proyecto. Una landing page puede estar lista en 3-5 días hábiles, mientras que una aplicación web completa puede tomar de 2-4 semanas. Siempre te mantendremos informado del progreso."
    },
    {
      question: "¿Incluyen hosting y dominio?",
      answer: "Sí, todos nuestros planes incluyen hosting por el primer año y registro de dominio .com. También nos encargamos de la configuración inicial y el mantenimiento básico del servidor."
    },
    {
      question: "¿Qué pasa después de entregar el proyecto?",
      answer: "Ofrecemos 30 días de soporte gratuito post-entrega para cualquier ajuste o corrección. Después, puedes contratar nuestros planes de mantenimiento o manejar el proyecto por tu cuenta."
    },
    {
      question: "¿Pueden trabajar con mi diseño existente?",
      answer: "¡Por supuesto! Podemos trabajar con tus diseños, mejorar tu sitio actual o crear algo completamente nuevo desde cero. Nos adaptamos a tus necesidades y preferencias."
    },
    {
      question: "¿Ofrecen garantía en sus servicios?",
      answer: "Sí, ofrecemos garantía de satisfacción del 100%. Si no estás completamente satisfecho con el resultado, trabajaremos hasta que lo estés o te devolvemos tu dinero."
    },
    {
      question: "¿Cómo funciona el proceso de pago?",
      answer: "Trabajamos con un sistema de pagos fraccionados: 50% al inicio del proyecto y 50% al finalizar. Aceptamos transferencias bancarias, PayPal y principales tarjetas de crédito."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Título */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <HelpCircle className="w-6 h-6 text-brand-cyan" />
            <span className="text-brand-cyan font-semibold">PREGUNTAS FRECUENTES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">¿Tienes Dudas?</span>
          </h2>
          <p className="text-xl text-brand-light/70">
            Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.has(index);
            
            return (
              <div
                key={index}
                className="faq-item bg-brand-dark-blue/50 backdrop-blur-sm rounded-2xl border border-brand-border overflow-hidden transition-all duration-300 hover:border-brand-cyan/30"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-brand-cyan/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-brand-light pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-brand-cyan transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                }`}>
                  <div className="px-6">
                    <p className="text-brand-light/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA final */}
        <div className="text-center mt-16">
          <p className="text-brand-light/70 mb-6">
            ¿No encontraste la respuesta que buscabas?
          </p>
          <a 
            href="#contacto" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-blue text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Contáctanos Directamente
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
