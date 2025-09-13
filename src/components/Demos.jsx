import React, { useState } from 'react'
import { X, ExternalLink, Eye } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Demos = () => {
  const [selectedDemo, setSelectedDemo] = useState(null)

  const demos = [
    {
      id: 1,
      title: 'Tienda Online Completa',
      category: 'E-commerce',
      description: 'Plataforma de venta online con carrito, pagos seguros y panel de gestión para administrar productos e inventario.',
      image: '/imagenes/tiendaonline.png',
      liveUrl: 'https://mediumaquamarine-chinchilla-331117.hostingersite.com/',
      features: [
        'Carrito de compras con proceso de pago intuitivo',
        'Integración de pagos seguros (tarjeta y transferencia)',
        'Panel de administración simple y fácil de usar',
        'Gestión de inventario y stock en tiempo real',
        'Catálogo de productos con imágenes y descripciones',
        'Diseño responsive para compras desde el celular',
        'Sección de ofertas y promociones destacadas'
      ]
    },

    {
      id: 2,
      title: 'App Móvil de Gestión Inmobiliaria',
      category: 'Aplicación Móvil',
      description: 'Aplicación para gestionar gastos, servicios e ingresos de propiedades en alquiler.',
      image: '/imagenes/APK.png',
      liveUrl: '/video/apk.mp4',
      features: [
        'Registro de servicios (luz, gas, agua) por inquilino',
        'Carga de gastos de mantenimiento por propiedad',
        'Cálculo automático de cuánto debe pagar cada inquilino',
        'Resumen mensual de ingresos y gastos',
        'Ganancia neta calculada en tiempo real',
        'Notificaciones de vencimiento de pagos'
      ]
    },
    {
      id: 3,
      title: 'Portafolio Profesional Multipágina',
      category: 'Portafolio Web',
      description: 'Portafolio moderno con animaciones, secciones interactivas y diseño pensado para destacar proyectos y habilidades.',
      image: '/imagenes/portafolio.png',
      liveUrl: 'https://portafolio-pablomartin-gatica.netlify.app/',
      features: [
        'Diseño multipágina con navegación fluida',
        'Galería interactiva de proyectos',
        'Modo oscuro y claro',
        'Formulario de contacto con confirmación visual',
        'Optimización SEO y metaetiquetas personalizadas',
        'Animaciones modernas con Framer Motion',
        'Responsive design para todos los dispositivos'
      ]
    },
    {
      id: 4,
      title: 'Landing Page Pastelería – Dolcceta Style',
      category: 'Landing Page',
      description: 'Landing page para pastelería artesanal: catálogo de creaciones, cotización personalizada y contacto directo.',
      image: '/imagenes/Dolceta.png',
      liveUrl: 'https://dolcceta.netlify.app/',
      features: [
        'Catálogo visual de productos con precios destacados',
        'Sección "Cotizá tu creación" para eventos personalizados',
        'Formulario de contacto rápido y directo',
        'Galería de imágenes artesanales (tortas, panificados, macarons)',
        'Información de horarios, ubicación y medios de pago',
        'Diseño responsive pensado para usuario móvil',
        'Botón de contacto vía WhatsApp',
        'Tienda / sección de pedidos especiales'
      ]
    },
  ]

  const openModal = (demo) => {
    setSelectedDemo(demo)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedDemo(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <section id="demos" className="py-20 bg-brand-dark-blue">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            {/* <div className="inline-flex items-center gap-2 mb-4">
              <Eye className="w-6 h-6 text-brand-cyan" />
              <span className="text-brand-cyan font-semibold">PROYECTOS REALES</span>
            </div> */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Trabajo en Acción</span>
            </h2>
            <p className="text-xl text-brand-light/70 max-w-3xl mx-auto">
              Nuestro trabajo habla por nosotros: explorá proyectos reales y comprobá resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demos.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-brand-dark/50 backdrop-blur-sm rounded-2xl border border-brand-border overflow-hidden hover:border-brand-cyan/50 transition-all duration-300 cursor-pointer"
                onClick={() => openModal(demo)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={demo.image} 
                    alt={demo.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-cyan/20 text-brand-cyan px-3 py-1 rounded-full text-xs font-semibold">
                      {demo.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-light mb-2 group-hover:text-brand-cyan transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-brand-light/70 text-sm mb-4">
                    {demo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brand-light/70 mb-6">
              Definamos juntos la estrategia para tu proyecto
            </p>
            <a 
              href="#contacto" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-blue text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Hablemos de Tu Proyecto
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-brand-dark border border-brand-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-brand-dark border-b border-brand-border p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-brand-light">{selectedDemo.title}</h3>
                  <span className="text-brand-cyan text-sm">{selectedDemo.category}</span>
                </div>
                <button
                  onClick={closeModal}
                  className="text-brand-light/70 hover:text-brand-light transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6">
                <img 
                  src={selectedDemo.image} 
                  alt={selectedDemo.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-brand-light mb-3">Descripción</h4>
                    <p className="text-brand-light/70 mb-6">{selectedDemo.description}</p>
                    
                    <h4 className="text-lg font-semibold text-brand-light mb-3">Características</h4>
                    <ul className="space-y-2">
                      {selectedDemo.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-brand-light/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="space-y-4">
                      <a
                        href={selectedDemo.liveUrl}
                        className="flex items-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-blue text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform w-full justify-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Ver Proyecto Live
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Demos
