import React from 'react'
import { Smartphone, Monitor, ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'

const Services = () => {
  
  const services = [
    {
      id: 'ecommerce-web',
      icon: ShoppingBag,
      title: 'Tienda Online',
      description: 'Tiendas online hechas para crecer con tu negocio: simples de usar y listas para vender.',
      features: ['Tiendas Online Completas', 'Integración de Pagos', 'Panel de Administración'],
      color: 'from-emerald-500 to-teal-500',
      callToAction: 'Desde sitios simples hasta tiendas completas, te ayudo a tener presencia digital que genere resultados reales.'
    },
    {
      id: 'aplicaciones-moviles',
      icon: Smartphone,
      title: 'Aplicaciones Móviles & Web',
      description: 'Creamos apps web y móviles pensadas en tus usuarios: simples y funcionales.',
      features: ['Android', 'Interfaz Intuitiva', 'Rendimiento Optimizado'],
      color: 'from-purple-500 to-violet-500',
      callToAction: 'Tu idea merece una app que funcione bien en todos los dispositivos.'
    },
    {
      id: 'landing-portafolios',
      icon: Monitor,
      title: 'Landing Pages & Portafolios',
      description: 'Páginas optimizadas y portafolios profesionales. Cada proyecto está diseñado para lograr tu objetivo específico.',
      features: ['Portafolios Profesionales', 'CV Online Interactivo','Eventos y Lanzamientos'],
      color: 'from-blue-500 to-cyan-500',
      callToAction: 'Diseñamos páginas simples y efectivas: ideales para vender, promocionar o presentar tu trabajo.'
    },
    /* {
      id: 'desarrollo-personalizado',
      icon: Code,
      title: 'Desarrollo Personalizado',
      description: 'Soluciones digitales a medida para cada proyecto. Desarrollo a medida para requerimientos específicos que las plantillas no pueden resolver.',
      features: ['Soluciones a Medida', 'Tecnologías Modernas', 'Escalabilidad Garantizada', 'Código Limpio', 'Documentación Completa'],
      color: 'from-orange-500 to-red-500',
      callToAction: 'Cada proyecto es distinto: hablemos y encontrá la solución a tu medida'
    } */
  ]

  return (
    <section id="servicios" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Quienes  <span className="gradient-text">Somos?</span>
          </h2>
          <p className="text-xl text-brand-light/70 max-w-3xl mx-auto">
            Diseñamos páginas y aplicaciones fáciles de usar y listas para crecer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group bg-brand-dark-blue/50 backdrop-blur-sm p-6 rounded-3xl border border-brand-border hover:border-brand-cyan/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Efecto de hover con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </motion.div>
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-brand-light mb-3 group-hover:text-brand-cyan transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-brand-light/70 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center gap-2 text-brand-light/60 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 rounded-full bg-brand-cyan"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            delay: idx * 0.2
                          }}
                        ></motion.div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-4 border-t border-brand-border/30">
                    <p className="text-brand-cyan/80 text-xs italic leading-relaxed">
                      {service.callToAction}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
