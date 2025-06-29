import React, { useState } from 'react'
import { Monitor, Smartphone, Palette, Globe, Zap, Star, ArrowRight } from 'lucide-react'

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: Monitor,
      title: "Desarrollo Web",
      description: "Sitios web modernos, responsivos y optimizados para SEO. Desde landing pages hasta aplicaciones web complejas.",
      features: ["Responsive Design", "SEO Optimizado", "Alta Velocidad", "Seguridad Avanzada"],
      color: "brand-cyan",
      gradient: "from-brand-cyan to-brand-blue",
      delay: 0
    },
    {
      icon: Smartphone,
      title: "Apps Móviles",
      description: "Aplicaciones nativas e híbridas para iOS y Android. Experiencias fluidas y funcionalidades avanzadas.",
      features: ["iOS & Android", "UI/UX Intuitivo", "Push Notifications", "Offline Support"],
      color: "brand-purple",
      gradient: "from-brand-purple to-brand-pink",
      delay: 100
    },
    {
      icon: Palette,
      title: "Diseño Gráfico",
      description: "Identidad visual completa, logos, flyers y material promocional que refleje la esencia de tu marca.",
      features: ["Logo Design", "Branding", "Material Print", "Redes Sociales"],
      color: "brand-green",
      gradient: "from-brand-green to-brand-cyan",
      delay: 200
    },
    {
      icon: Globe,
      title: "Marketing Digital",
      description: "Estrategias digitales efectivas para aumentar tu presencia online y generar más conversiones.",
      features: ["SEO/SEM", "Social Media", "Email Marketing", "Analytics"],
      color: "brand-orange",
      gradient: "from-brand-orange to-brand-pink",
      delay: 300
    }
  ]

  return (
    <section id="servicios" className="py-20 relative overflow-hidden">
      
      {/* Fondo con efectos */}
      <div className="absolute inset-0 bg-gradient-cyber opacity-50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Título con efectos */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="w-6 h-6 text-brand-cyan animate-pulse" />
            <span className="text-brand-cyan font-semibold">NUESTROS SERVICIOS</span>
            <Star className="w-6 h-6 text-brand-cyan animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Soluciones Digitales</span>
            <br />
            <span className="text-brand-light">Que Transforman</span>
          </h2>
          
          <p className="text-xl text-brand-light/70 max-w-3xl mx-auto">
            Ofrecemos servicios integrales de desarrollo y diseño digital, 
            adaptados a las necesidades específicas de tu negocio.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                className="card-hover group relative bg-brand-dark-blue/60 backdrop-blur-sm rounded-3xl p-8 border border-brand-border overflow-hidden"
                style={{ 
                  transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                
                {/* Efecto de gradiente en hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Borde animado - usando colores directos para evitar problemas con Tailwind */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-3xl border-2 ${
                    service.color === 'brand-cyan' ? 'border-cyan-400' :
                    service.color === 'brand-purple' ? 'border-purple-500' :
                    service.color === 'brand-green' ? 'border-green-500' :
                    'border-orange-500'
                  } animate-pulse`} />
                </div>

                <div className="relative z-10">
                  
                  {/* Icono con efectos */}
                  <div className="mb-6 relative">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Efecto de brillo */}
                    <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300`} />
                  </div>

                  {/* Contenido */}
                  <h3 className="text-2xl font-bold text-brand-light mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-brand-light/70 mb-6 leading-relaxed group-hover:text-brand-light/90 transition-colors">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 text-sm text-brand-light/70 group-hover:text-brand-light transition-colors"
                      >
                        <div className={`w-2 h-2 rounded-full ${
                          service.color === 'brand-cyan' ? 'bg-cyan-400' :
                          service.color === 'brand-purple' ? 'bg-purple-500' :
                          service.color === 'brand-green' ? 'bg-green-500' :
                          'bg-orange-500'
                        } animate-pulse`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Botón de acción */}
                  <button className={`inline-flex items-center gap-2 ${
                    service.color === 'brand-cyan' ? 'text-cyan-400' :
                    service.color === 'brand-purple' ? 'text-purple-500' :
                    service.color === 'brand-green' ? 'text-green-500' :
                    'text-orange-500'
                  } font-semibold group-hover:gap-3 transition-all duration-300`}>
                    Saber más
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Partículas decorativas */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-2 h-2 rounded-full ${
                    service.color === 'brand-cyan' ? 'bg-cyan-400' :
                    service.color === 'brand-purple' ? 'bg-purple-500' :
                    service.color === 'brand-green' ? 'bg-green-500' :
                    'bg-orange-500'
                  } animate-ping`} />
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className={`w-1 h-1 rounded-full ${
                    service.color === 'brand-cyan' ? 'bg-cyan-400' :
                    service.color === 'brand-purple' ? 'bg-purple-500' :
                    service.color === 'brand-green' ? 'bg-green-500' :
                    'bg-orange-500'
                  } animate-pulse`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA final */}
        <div className="text-center mt-16">
          <p className="text-brand-light/70 mb-6">
            ¿Necesitas algo específico? ¡Hablemos de tu proyecto!
          </p>
          <a 
            href="#contacto" 
            className="btn-glow inline-flex items-center gap-2 bg-gradient-rainbow text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Consulta Gratuita
            <Zap className="w-5 h-5 animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
