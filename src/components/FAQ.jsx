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
      answer: "El hosting y el dominio son piezas estratégicas de cualquier proyecto digital. No los tratamos como un extra genérico, sino como una decisión a medida según la tecnología y el crecimiento que tu proyecto requiera. En proyectos simples podemos gestionar un plan económico de hosting y dominio, y en desarrollos más avanzados recomendamos la infraestructura adecuada para asegurar rendimiento y escalabilidad. Si lo deseas, también nos ocupamos de la gestión completa como un servicio adicional, transparente y personalizado."
    },
    {
      question: "¿Qué pasa después de entregar el proyecto?",
      answer: "Con la entrega final comienza un período de garantía donde resolvemos cualquier detalle técnico relacionado con lo acordado. Este espacio te da la tranquilidad de que tu proyecto funcionará como debe. Luego, podés elegir entre manejarlo de forma independiente con toda la documentación que entregamos, o sumarte a nuestros planes de mantenimiento, diseñados para que siempre tengas un equipo listo para acompañarte y optimizar tu inversión."
    },
    {
      question: "¿Pueden trabajar con mi diseño existente?",
      answer: "Sí, pero siempre damos un paso previo: una evaluación técnica del proyecto. Analizamos la calidad del código, posibles limitaciones y riesgos de seguridad. De ahí definimos la mejor estrategia: optimizar lo que ya existe o proponerte una reconstrucción parcial o total que sea más rentable a largo plazo. Así garantizamos que cada proyecto avance sobre bases sólidas y con resultados de calidad."
    },
    {
      question: "¿Ofrecen garantía en sus servicios?",
      answer: "Nuestra garantía está en el proceso, no en frases vacías. Trabajamos por fases: cada etapa se valida contigo antes de avanzar, asegurando que todo quede alineado con tu visión. Al finalizar, garantizamos que el producto funcione según lo definido en el alcance y en los diseños aprobados. Además, incluimos un período de corrección para resolver cualquier bug técnico. No prometemos devoluciones de dinero, pero sí el compromiso de acompañarte hasta que el resultado sea exactamente el que esperabas."
    },
    {
      question: "¿Cómo funciona el proceso de pago?",
      answer: "Nuestro sistema de pago es claro y justo: un anticipo inicial para reservar el proyecto y comenzar con la estrategia, y el saldo final al momento de la entrega. Actualmente trabajamos con transferencias y métodos de pago digitales, para que el proceso sea seguro y transparente."
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
