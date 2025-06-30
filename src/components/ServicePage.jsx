import React, { useEffect } from 'react'
import { ArrowLeft, ShoppingCart, Star, Check, MessageCircle, Download, Wrench } from 'lucide-react'
import { useCart } from '../context/CartContext'
import Footer from './Footer'

const ServicePage = ({ service, onBack }) => {
  const { addToCart } = useCart()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [service])

  // Datos expandidos para cada servicio con plantillas + planes personalizados
  const serviceData = {
    'desarrollo-web': {
      title: 'Desarrollo Web',
      description: 'Sitios web profesionales: plantillas listas y desarrollo personalizado',
      type: 'both',
      products: [
        // PLANTILLAS
        {
          id: 'web-template-1',
          name: 'Landing Page Business',
          price: 45000,
          category: 'Plantilla Web',
          image: '/api/placeholder/400/300',
          description: 'Landing page profesional para negocios. Incluye código HTML/CSS/JS',
          features: ['Diseño responsive', 'Optimización SEO', 'Formulario de contacto', 'Código fuente completo', 'Documentación'],
          deliveryTime: 'Descarga inmediata',
          rating: 4.8,
          downloads: 127,
          isTemplate: true
        },
        {
          id: 'web-template-2',
          name: 'E-commerce Template',
          price: 85000,
          category: 'Plantilla Web',
          image: '/api/placeholder/400/300',
          description: 'Plantilla completa de tienda online con carrito de compras',
          features: ['Catálogo de productos', 'Carrito funcional', 'Checkout integrado', 'Panel de administración', 'Base de datos'],
          deliveryTime: 'Descarga inmediata',
          rating: 4.9,
          downloads: 89,
          isTemplate: true
        },
        // PLANES PERSONALIZADOS
        {
          id: 'web-custom-basic',
          name: 'Plan Web Básico',
          price: 350000,
          category: 'Desarrollo Web Personalizado',
          image: '/api/placeholder/400/300',
          description: 'Sitio web personalizado con funcionalidades básicas',
          features: ['Hasta 5 páginas', '3 reuniones de diseño', '2 rondas de revisiones', 'Hosting por 6 meses', 'Soporte 30 días'],
          deliveryTime: '10-15 días hábiles',
          rating: 5.0,
          isCustom: true
        },
        {
          id: 'web-custom-pro',
          name: 'Plan Web Profesional',
          price: 650000,
          category: 'Desarrollo Web Personalizado',
          image: '/api/placeholder/400/300',
          description: 'Sitio web completo con funcionalidades avanzadas',
          features: ['Hasta 10 páginas', '5 reuniones de diseño', 'Revisiones ilimitadas', 'Panel de administración', 'Hosting por 1 año', 'Soporte 90 días'],
          deliveryTime: '15-25 días hábiles',
          rating: 5.0,
          isCustom: true
        }
      ]
    },
    'app-movil': {
      title: 'Aplicaciones Móviles',
      description: 'Apps Android: plantillas pre-desarrolladas y desarrollo personalizado',
      type: 'both',
      products: [
        // PLANTILLAS
        {
          id: 'app-template-1',
          name: 'App Negocio Template',
          price: 120000,
          category: 'Plantilla App',
          image: '/api/placeholder/400/300',
          description: 'App básica para mostrar tu negocio con código fuente',
          features: ['Código fuente Android', 'Pantallas pre-diseñadas', 'Integración WhatsApp', 'Guía de personalización', 'Soporte instalación'],
          deliveryTime: 'Descarga inmediata',
          rating: 4.7,
          downloads: 45,
          isTemplate: true
        },
        // PLANES PERSONALIZADOS
        {
          id: 'app-custom-basic',
          name: 'Plan App Básico',
          price: 450000,
          category: 'App Móvil Personalizada',
          image: '/api/placeholder/400/300',
          description: 'Aplicación móvil personalizada para tu negocio',
          features: ['Diseño personalizado', 'Hasta 5 pantallas', 'Notificaciones push', 'Publicación Play Store', 'Soporte 60 días'],
          deliveryTime: '15-20 días hábiles',
          rating: 5.0,
          isCustom: true
        },
        {
          id: 'app-custom-pro',
          name: 'Plan App Profesional',
          price: 850000,
          category: 'App Móvil Personalizada',
          image: '/api/placeholder/400/300',
          description: 'App completa con funcionalidades avanzadas',
          features: ['Diseño completamente personalizado', 'Funcionalidades ilimitadas', 'Base de datos', 'Panel web administrador', 'Soporte 120 días'],
          deliveryTime: '25-35 días hábiles',
          rating: 5.0,
          isCustom: true
        }
      ]
    },
    'diseno-grafico': {
      title: 'Diseño Gráfico',
      description: 'Diseños profesionales: plantillas listas y diseños personalizados',
      type: 'both',
      products: [
        // PLANTILLAS
        {
          id: 'design-pack-1',
          name: 'Pack Flyers Restaurante',
          price: 25000,
          category: 'Plantilla Diseño',
          image: '/api/placeholder/400/300',
          description: 'Pack de 10 flyers editables para restaurantes',
          features: ['10 diseños únicos', 'Archivos PSD + PNG', 'Listo para imprimir', 'Fuentes incluidas', 'Guía de uso'],
          deliveryTime: 'Descarga inmediata',
          rating: 4.7,
          downloads: 203,
          isTemplate: true
        },
        {
          id: 'design-pack-2',
          name: 'Pack Logos Modernos',
          price: 35000,
          category: 'Plantilla Diseño',
          image: '/api/placeholder/400/300',
          description: 'Pack de 15 logos editables estilo moderno',
          features: ['15 logos vectoriales', 'Archivos AI + PNG', 'Colores editables', 'Tipografías incluidas', 'Manual de uso'],
          deliveryTime: 'Descarga inmediata',
          rating: 4.8,
          downloads: 156,
          isTemplate: true
        },
        // PLANES PERSONALIZADOS
        {
          id: 'design-custom-basic',
          name: 'Plan Diseño Básico',
          price: 150000,
          category: 'Diseño Gráfico Personalizado',
          image: '/api/placeholder/400/300',
          description: 'Identidad visual personalizada para tu marca',
          features: ['Logo personalizado', 'Paleta de colores', 'Tipografías', '3 aplicaciones', '2 rondas de revisión'],
          deliveryTime: '7-10 días hábiles',
          rating: 5.0,
          isCustom: true
        },
        {
          id: 'design-custom-pro',
          name: 'Plan Diseño Completo',
          price: 350000,
          category: 'Diseño Gráfico Personalizado',
          image: '/api/placeholder/400/300',
          description: 'Identidad visual completa con manual de marca',
          features: ['Logo + isotipo', 'Manual de marca completo', 'Papelería corporativa', 'Diseños para redes sociales', 'Revisiones ilimitadas'],
          deliveryTime: '12-18 días hábiles',
          rating: 5.0,
          isCustom: true
        }
      ]
    },
    'marketing-digital': {
      title: 'Marketing Digital',
      description: 'Estrategias de marketing: plantillas listas y campañas personalizadas',
      type: 'both',
      products: [
        // PLANTILLAS
        {
          id: 'marketing-pack-1',
          name: 'Pack Contenido Redes',
          price: 45000,
          category: 'Plantilla Marketing',
          image: '/api/placeholder/400/300',
          description: 'Pack de 50 posts editables para redes sociales',
          features: ['50 diseños editables', 'Stories + Posts', 'Textos incluidos', 'Calendario de contenido', 'Guía de uso'],
          deliveryTime: 'Descarga inmediata',
          rating: 4.6,
          downloads: 89,
          isTemplate: true
        },
        // PLANES PERSONALIZADOS
        {
          id: 'marketing-custom-basic',
          name: 'Plan Marketing Básico',
          price: 250000,
          category: 'Marketing Digital Personalizado',
          image: '/api/placeholder/400/300',
          description: 'Estrategia de marketing personalizada',
          features: ['Análisis de mercado', 'Estrategia de contenido', 'Calendario editorial', '30 posts personalizados', 'Reportes mensuales'],
          deliveryTime: '5-7 días hábiles',
          rating: 5.0,
          isCustom: true
        }
      ]
    },
    'ecommerce': {
      title: 'E-commerce',
      description: 'Tiendas online: plantillas listas y desarrollos personalizados',
      type: 'both',
      products: [
        // PLANTILLAS
        {
          id: 'ecommerce-template-1',
          name: 'Tienda Online Template',
          price: 150000,
          category: 'Plantilla E-commerce',
          image: '/api/placeholder/400/300',
          description: 'Plantilla completa de tienda online',
          features: ['Catálogo de productos', 'Carrito de compras', 'Checkout básico', 'Panel de administración', 'Base de datos incluida'],
          deliveryTime: 'Descarga inmediata',
          rating: 4.8,
          downloads: 67,
          isTemplate: true
        },
        // PLANES PERSONALIZADOS
        {
          id: 'ecommerce-custom-basic',
          name: 'Plan E-commerce Básico',
          price: 750000,
          category: 'E-commerce Personalizado',
          image: '/api/placeholder/400/300',
          description: 'Tienda online personalizada completa',
          features: ['Diseño personalizado', 'Hasta 100 productos', 'Pasarela de pagos', 'Gestión de inventario', 'Soporte 90 días'],
          deliveryTime: '20-30 días hábiles',
          rating: 5.0,
          isCustom: true
        }
      ]
    },
    'consultoria': {
      title: 'Consultoría Digital',
      description: 'Asesoramiento especializado y auditorías digitales',
      type: 'service',
      products: [
        {
          id: 'consultoria-1',
          name: 'Auditoría Digital Completa',
          price: 180000,
          category: 'Consultoría',
          image: '/api/placeholder/400/300',
          description: 'Análisis completo de tu presencia digital',
          features: ['Análisis web completo', 'Reporte SEO', 'Estrategia de mejora', 'Reunión de presentación', 'Seguimiento 30 días'],
          deliveryTime: '5-7 días hábiles',
          rating: 5.0,
          isService: true
        }
      ]
    }
  }

  const currentService = serviceData[service] || serviceData['desarrollo-web']

  const handleAddToCart = (product) => {
    if (product.isCustom || product.isService) {
      const serviceType = product.isCustom ? 'desarrollo personalizado' : 'servicio'
      const message = `¡Hola! Me interesa el ${product.name} (${product.category}) por $${product.price.toLocaleString()}. ¿Podemos coordinar una reunión para discutir mi proyecto de ${serviceType}?`
      const phoneNumber = "5491123456789"
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
    } else {
      addToCart({
        ...product,
        image: product.image || '/api/placeholder/300/200'
      })
    }
  }

  const handleBackToServices = () => {
    onBack()
    setTimeout(() => {
      const servicesSection = document.getElementById('servicios')
      if (servicesSection) {
        servicesSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 100)
  }

  // Separar productos por tipo
  const templates = currentService.products.filter(p => p.isTemplate)
  const customPlans = currentService.products.filter(p => p.isCustom)
  const services = currentService.products.filter(p => p.isService)

  return (
    <>
      <div className="min-h-screen bg-brand-dark text-brand-light">
        {/* Header */}
        <div className="bg-brand-dark-blue/50 py-8 pt-24">
          <div className="container mx-auto px-6">
            <button
              onClick={handleBackToServices}
              className="flex items-center gap-2 text-brand-cyan hover:text-brand-light transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver a Servicios
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{currentService.title}</span>
            </h1>
            <p className="text-xl text-brand-light/70 max-w-3xl">
              {currentService.description}
            </p>
          </div>
        </div>

        {/* Products organized by sections */}
        <div className="container mx-auto px-6 py-16">
          
          {/* Templates Section */}
          {templates.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                  <Download className="w-4 h-4 text-brand-cyan" />
                </div>
                <h2 className="text-3xl font-bold text-white">Plantillas Listas</h2>
                <span className="bg-brand-cyan/20 text-brand-cyan px-3 py-1 rounded-full text-sm font-semibold">
                  Descarga Inmediata
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {templates.map(product => (
                  <div key={product.id} className="bg-brand-dark-blue/50 rounded-2xl overflow-hidden border border-brand-border hover:scale-105 transition-transform duration-300">
                    <div className="relative h-48 bg-gradient-to-br from-brand-cyan/20 to-brand-blue/20">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      <div className="absolute top-4 right-4 bg-brand-dark/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{product.rating}</span>
                      </div>
                      <div className="absolute top-4 left-4 bg-brand-dark/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                        <Download className="w-4 h-4 text-brand-cyan" />
                        <span className="text-sm font-semibold">{product.downloads}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                      <p className="text-brand-light/70 mb-4">{product.description}</p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-brand-light mb-3">Incluye:</h4>
                        <ul className="space-y-1">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-brand-light/70">
                              <Check className="w-4 h-4 text-brand-cyan" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-sm text-brand-light/60">📥 {product.deliveryTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-brand-cyan">
                          ${product.price.toLocaleString()}
                        </div>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="bg-gradient-to-r from-brand-cyan to-brand-blue text-white px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center gap-2"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          Comprar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Custom Plans Section */}
          {customPlans.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center">
                  <Wrench className="w-4 h-4 text-brand-blue" />
                </div>
                <h2 className="text-3xl font-bold text-white">Planes Personalizados</h2>
                <span className="bg-brand-blue/20 text-brand-blue px-3 py-1 rounded-full text-sm font-semibold">
                  Desarrollo a Medida
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {customPlans.map(product => (
                  <div key={product.id} className="bg-brand-dark-blue/50 rounded-2xl overflow-hidden border border-brand-border hover:scale-105 transition-transform duration-300">
                    <div className="relative h-48 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      <div className="absolute top-4 right-4 bg-brand-dark/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{product.rating}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                      <p className="text-brand-light/70 mb-4">{product.description}</p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-brand-light mb-3">Incluye:</h4>
                        <ul className="space-y-1">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-brand-light/70">
                              <Check className="w-4 h-4 text-brand-cyan" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-sm text-brand-light/60">⏱️ {product.deliveryTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-brand-blue">
                          ${product.price.toLocaleString()}
                        </div>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="bg-gradient-to-r from-brand-blue to-brand-purple text-white px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Cotizar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Services Section */}
          {services.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-brand-purple/20 flex items-center justify-center">
                  <Users className="w-4 h-4 text-brand-purple" />
                </div>
                <h2 className="text-3xl font-bold text-white">Servicios Profesionales</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map(product => (
                  <div key={product.id} className="bg-brand-dark-blue/50 rounded-2xl overflow-hidden border border-brand-border hover:scale-105 transition-transform duration-300">
                    <div className="relative h-48 bg-gradient-to-br from-brand-purple/20 to-brand-pink/20">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      <div className="absolute top-4 right-4 bg-brand-dark/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{product.rating}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                      <p className="text-brand-light/70 mb-4">{product.description}</p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-brand-light mb-3">Incluye:</h4>
                        <ul className="space-y-1">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-brand-light/70">
                              <Check className="w-4 h-4 text-brand-cyan" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-sm text-brand-light/60">⏱️ {product.deliveryTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-brand-purple">
                          ${product.price.toLocaleString()}
                        </div>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="bg-gradient-to-r from-brand-purple to-brand-pink text-white px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Contratar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-brand-dark-blue/50 rounded-2xl p-8 border border-brand-border max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Necesitas algo más específico?
              </h3>
              <p className="text-brand-light/70 mb-6">
                Podemos crear una solución completamente personalizada para tu proyecto
              </p>
              <button
                onClick={() => {
                  const message = `¡Hola! Me interesa un ${currentService.title.toLowerCase()} completamente personalizado. ¿Podemos conversar sobre mi proyecto?`
                  const phoneNumber = "5491123456789"
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                  window.open(whatsappUrl, '_blank')
                }}
                className="bg-gradient-to-r from-brand-cyan to-brand-blue text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
              >
                Contactar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default ServicePage