import React, { useState, useEffect } from 'react'
import { Code, Smartphone, Palette, TrendingUp, ShoppingBag, Users, ArrowRight } from 'lucide-react'
import ServicePage from './ServicePage'

const Services = ({ onServiceSelected, onBackToServices }) => {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      id: 'desarrollo-web',
      icon: Code,
      title: 'Desarrollo Web',
      description: 'Plantillas web profesionales y desarrollo personalizado.',
      features: ['Landing Pages', 'E-commerce', 'Sitios Corporativos', 'Desarrollo a Medida'],
      type: 'both' // Plantillas + Personalizado
    },
    {
      id: 'app-movil',
      icon: Smartphone,
      title: 'Aplicaciones Móviles',
      description: 'Apps Android pre-desarrolladas y desarrollo personalizado.',
      features: ['Apps de Negocio', 'E-commerce', 'Apps Personalizadas', 'Código Fuente'],
      type: 'both' // Plantillas + Personalizado
    },
    {
      id: 'diseno-grafico',
      icon: Palette,
      title: 'Diseño Gráfico',
      description: 'Diseños profesionales listos y diseños personalizados.',
      features: ['Flyers', 'Logos', 'Identidad Visual', 'Diseño a Medida'],
      type: 'both' // Plantillas + Personalizado
    },
    // {
    //   id: 'marketing-digital',
    //   icon: TrendingUp,
    //   title: 'Marketing Digital',
    //   description: 'Estrategias de marketing listas y campañas personalizadas.',
    //   features: ['Packs de Contenido', 'Campañas', 'Estrategias', 'Consultoría'],
    //   type: 'both' // Plantillas + Personalizado
    // },
    // {
    //   id: 'ecommerce',
    //   icon: ShoppingBag,
    //   title: 'E-commerce',
    //   description: 'Tiendas online listas y desarrollos personalizados.',
    //   features: ['Plantillas Tienda', 'Catálogos', 'Pagos Online', 'Desarrollo Custom'],
    //   type: 'both' // Plantillas + Personalizado
    // },
    // {
    //   id: 'consultoria',
    //   icon: Users,
    //   title: 'Consultoría Digital',
    //   description: 'Asesoramiento especializado y auditorías digitales.',
    //   features: ['Auditorías', 'Reportes', 'Capacitaciones', 'Estrategias'],
    //   type: 'service' // Solo servicios
    // }
  ]

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId)
    onServiceSelected()
    
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }, 100)
  }

  const handleBackToServices = () => {
    setSelectedService(null)
    onBackToServices()
    
    setTimeout(() => {
      const servicesSection = document.getElementById('servicios')
      if (servicesSection) {
        const navbarHeight = 80
        const elementPosition = servicesSection.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 150)
  }

  if (selectedService) {
    return (
      <ServicePage 
        service={selectedService} 
        onBack={handleBackToServices}
      />
    )
  }

  return (
    <section id="servicios" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-brand-light/70 max-w-3xl mx-auto">
            Plantillas digitales listas para usar y desarrollo personalizado para cada servicio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            
            const getBadgeColor = (type) => {
              switch(type) {
                case 'both': return 'bg-gradient-to-r from-brand-cyan/20 to-brand-blue/20 text-brand-cyan'
                case 'service': return 'bg-brand-purple/20 text-brand-purple'
                default: return 'bg-brand-cyan/20 text-brand-cyan'
              }
            }

            const getBadgeText = (type) => {
              switch(type) {
                case 'both': return 'Plantillas + Personalizado'
                case 'service': return 'Servicio'
                default: return 'Plantilla'
              }
            }

            return (
              <div
                key={service.id}
                className="group bg-brand-dark-blue/50 backdrop-blur-sm p-8 rounded-3xl border border-brand-border hover:border-brand-cyan/50 transition-all duration-300 hover:transform hover:scale-105 relative"
              >
                {/* Badge del tipo */}
                <div className={`absolute top-4 right-4 ${getBadgeColor(service.type)} px-3 py-1 rounded-full text-xs font-semibold`}>
                  {getBadgeText(service.type)}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-gradient-rainbow flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-brand-light mb-4 group-hover:text-brand-cyan transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-brand-light/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-brand-light/60">
                      <div className="w-2 h-2 rounded-full bg-brand-cyan"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => handleServiceSelect(service.id)}
                  className="w-full bg-gradient-to-r from-brand-cyan/20 to-brand-blue/20 hover:from-brand-cyan hover:to-brand-blue text-brand-cyan hover:text-white border border-brand-cyan/30 hover:border-transparent py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                >
                  {service.type === 'service' ? 'Ver Servicios' : 'Ver Opciones'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
