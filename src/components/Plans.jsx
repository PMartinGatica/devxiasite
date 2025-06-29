import React, { useState } from 'react'
import { Check, Zap, Crown, Rocket } from 'lucide-react'

const Plans = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: "Básico",
      icon: Zap,
      price: "$299",
      period: "/mes",
      description: "Perfecto para emprendedores que inician",
      features: [
        "Landing Page Responsive",
        "Dominio .com incluido",
        "Hosting por 1 año",
        "Diseño personalizado",
        "Optimización SEO básica",
        "Soporte por email"
      ],
      color: "brand-cyan",
      gradient: "from-brand-cyan to-brand-blue",
      popular: false
    },
    {
      name: "Profesional",
      icon: Crown,
      price: "$599",
      period: "/mes",
      description: "Para negocios que buscan crecer",
      features: [
        "Sitio Web Completo (5 páginas)",
        "E-commerce básico",
        "Panel de administración",
        "Integración redes sociales",
        "Analytics y reportes",
        "Soporte 24/7",
        "3 revisiones incluidas"
      ],
      color: "brand-purple",
      gradient: "from-brand-purple to-brand-pink",
      popular: true
    },
    {
      name: "Empresarial",
      icon: Rocket,
      price: "$1,299",
      period: "/mes",
      description: "Solución completa para empresas",
      features: [
        "Aplicación Web Avanzada",
        "App Móvil (iOS + Android)",
        "Panel de administración completo",
        "Integraciones API",
        "Base de datos optimizada",
        "Soporte técnico dedicado",
        "Mantenimiento incluido"
      ],
      color: "brand-orange",
      gradient: "from-brand-orange to-brand-pink",
      popular: false
    }
  ];

  return (
    <section id="planes" className="py-20 bg-brand-dark-blue/30">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Planes y Precios</span>
          </h2>
          <p className="text-xl text-brand-light/70 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a las necesidades de tu proyecto. 
            Todos incluyen soporte técnico y garantía de satisfacción.
          </p>
        </div>

        {/* Grid de planes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isHovered = hoveredPlan === index;
            
            return (
              <div
                key={index}
                className={`relative bg-brand-dark/80 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-500 ${
                  plan.popular 
                    ? 'border-brand-purple shadow-lg shadow-brand-purple/20 scale-105' 
                    : 'border-brand-border hover:border-brand-cyan/50'
                } ${isHovered ? 'transform -translate-y-2 scale-105' : ''}`}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                
                {/* Badge Popular */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-brand-purple to-brand-pink px-6 py-2 rounded-full text-white text-sm font-semibold">
                      ⭐ Más Popular
                    </div>
                  </div>
                )}

                {/* Icono */}
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-light mb-2">{plan.name}</h3>
                  <p className="text-brand-light/60">{plan.description}</p>
                </div>

                {/* Precio */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-brand-light/60">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full ${
                        plan.color === 'brand-cyan' ? 'bg-cyan-400' :
                        plan.color === 'brand-purple' ? 'bg-purple-500' :
                        'bg-orange-500'
                      } flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-brand-light/80">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Botón */}
                <button className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-brand-purple to-brand-pink text-white hover:shadow-lg hover:shadow-brand-purple/30'
                    : 'border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-brand-dark'
                }`}>
                  Comenzar Ahora
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA adicional */}
        <div className="text-center mt-16">
          <p className="text-brand-light/70 mb-6">
            ¿Necesitas algo personalizado? ¡Hablemos de tu proyecto específico!
          </p>
          <a 
            href="#contacto" 
            className="inline-flex items-center gap-2 bg-gradient-rainbow text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Cotización Personalizada
          </a>
        </div>
      </div>
    </section>
  );
};

export default Plans;
