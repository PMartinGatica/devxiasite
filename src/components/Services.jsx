import React, { useState } from 'react'
import { Code, Smartphone, Palette, TrendingUp, ShoppingBag, Users, Wrench, ArrowRight } from 'lucide-react'
import ServicePage from './ServicePage'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      id: 'desarrollo-web',
      icon: Code,
      title: 'Desarrollo Web',
      description: 'Plantillas web profesionales listas para usar. Descarga inmediata.',
      features: ['Landing Pages', 'E-commerce', 'Sitios Corporativos', 'Descarga Digital'],
      type: 'template' // Plantillas
    },
    {
      id: 'app-movil',
      icon: Smartphone,
      title: 'Aplicaciones Móviles',
      description: 'Apps Android pre-desarrolladas. Personalización básica incluida.',
      features: ['Apps de Negocio', 'E-commerce', 'Catálogos', 'Código Fuente'],
      type: 'template' // Plantillas
    },
    {
      id: 'diseno-grafico',
      icon: Palette,
      title: 'Diseño Gráfico',
      description: 'Diseños profesionales listos para descargar y usar.',
      features: ['Flyers', 'Logos', 'Banners', 'Packs de Diseño'],
      type: 'template' // Plantillas
    },
    {
      id: 'planes-personalizados',
      icon: Wrench,
      title: 'Planes Personalizados',
      description: 'Desarrollo desde cero según tus necesidades específicas.',
      features: ['Desarrollo a Medida', 'Reuniones de Diseño', 'Soporte Dedicado', 'Garantía Extendida'],
      type: 'custom' // Desarrollo personalizado
    },
    {
      id: 'marketing-digital',
      icon: TrendingUp,
      title: 'Marketing Digital',
      description: 'Estrategias y materiales de marketing listos para implementar.',
      features: ['Packs de Contenido', 'Plantillas de Campañas', 'Guías SEO', 'Calendarios'],
      type: 'template' // Plantillas
    },
    {
      id: 'consultoria',
      icon: Users,
      title: 'Consultoría Digital',
      description: 'Asesoramiento especializado y auditorías digitales.',
      features: ['Auditorías', 'Reportes', 'Capacitaciones', 'Estrategias'],
      type: 'service' // Servicios
    }
  ]

  if (selectedService) {
    return (
      <ServicePage 
        service={selectedService} 
        onBack={() => setSelectedService(null)} 
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
            Plantillas digitales listas para usar y desarrollo personalizado
          </p>
        </div>

        {/* Categorías */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-brand-cyan/20 text-brand-cyan px-4 py-2 rounded-full text-sm font-semibold">
            📦 Plantillas Listas
          </div>
          <div className="bg-brand-blue/20 text-brand-blue px-4 py-2 rounded-full text-sm font-semibold">
            🛠️ Desarrollo Personalizado
          </div>
          <div className="bg-brand-purple/20 text-brand-purple px-4 py-2 rounded-full text-sm font-semibold">
            📊 Servicios Profesionales
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            
            // Determinar el color del badge según el tipo
            const getBadgeColor = (type) => {
              switch(type) {
                case 'template': return 'bg-brand-cyan/20 text-brand-cyan'
                case 'custom': return 'bg-brand-blue/20 text-brand-blue'
                case 'service': return 'bg-brand-purple/20 text-brand-purple'
                default: return 'bg-brand-cyan/20 text-brand-cyan'
              }
            }

            const getBadgeText = (type) => {
              switch(type) {
                case 'template': return 'Plantilla'
                case 'custom': return 'Personalizado'
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
                  onClick={() => setSelectedService(service.id)}
                  className="w-full bg-gradient-to-r from-brand-cyan/20 to-brand-blue/20 hover:from-brand-cyan hover:to-brand-blue text-brand-cyan hover:text-white border border-brand-cyan/30 hover:border-transparent py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                >
                  {service.type === 'custom' ? 'Ver Planes' : service.type === 'service' ? 'Ver Servicios' : 'Ver Plantillas'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )
          })}
        </div>

        {/* Nota informativa */}
        <div className="text-center mt-12">
          <div className="bg-brand-dark-blue/30 rounded-2xl p-6 border border-brand-border max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-brand-light mb-2">
              ¿Cuál es la diferencia?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-brand-light/70">
              <div className="text-center">
                <div className="text-brand-cyan font-semibold mb-1">📦 Plantillas</div>
                <div>Descarga inmediata • Precios fijos • Listo para usar</div>
              </div>
              <div className="text-center">
                <div className="text-brand-blue font-semibold mb-1">🛠️ Personalizado</div>
                <div>Desarrollo a medida • Cotización • Tiempo de entrega</div>
              </div>
              <div className="text-center">
                <div className="text-brand-purple font-semibold mb-1">📊 Servicios</div>
                <div>Consultoría • Soporte • Asesoramiento profesional</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
