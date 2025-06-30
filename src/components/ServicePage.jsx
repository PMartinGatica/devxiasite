import React from 'react'
import { ArrowLeft, ShoppingCart, Star, Check, MessageCircle, Download } from 'lucide-react'
import { useCart } from '../context/CartContext'

const ServicePage = ({ service, onBack }) => {
  const { addToCart } = useCart()

  // Datos de ejemplo para cada servicio
  const serviceData = {
    'desarrollo-web': {
      title: 'Plantillas Web',
      description: 'Sitios web profesionales listos para descargar y personalizar',
      type: 'template',
      products: [
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
          downloads: 127
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
          downloads: 89
        }
      ]
    },
    'planes-personalizados': {
      title: 'Desarrollo Personalizado',
      description: 'Proyectos desarrollados desde cero según tus necesidades específicas',
      type: 'custom',
      products: [
        {
          id: 'custom-basic',
          name: 'Plan Básico',
          price: 350000,
          category: 'Desarrollo Personalizado',
          image: '/api/placeholder/400/300',
          description: 'Desarrollo web personalizado con funcionalidades básicas',
          features: ['Hasta 5 páginas', '3 reuniones de diseño', '2 rondas de revisiones', 'Hosting por 6 meses', 'Soporte 30 días'],
          deliveryTime: '10-15 días hábiles',
          rating: 5.0,
          isCustom: true
        },
        {
          id: 'custom-pro',
          name: 'Plan Profesional',
          price: 650000,
          category: 'Desarrollo Personalizado',
          image: '/api/placeholder/400/300',
          description: 'Desarrollo completo con funcionalidades avanzadas',
          features: ['Hasta 10 páginas', '5 reuniones de diseño', 'Revisiones ilimitadas', 'Panel de administración', 'Hosting por 1 año', 'Soporte 90 días'],
          deliveryTime: '15-25 días hábiles',
          rating: 5.0,
          isCustom: true
        },
        {
          id: 'custom-enterprise',
          name: 'Plan Empresarial',
          price: 1200000,
          category: 'Desarrollo Personalizado',
          image: '/api/placeholder/400/300',
          description: 'Solución empresarial completa con todas las funcionalidades',
          features: ['Páginas ilimitadas', 'Reuniones ilimitadas', 'Desarrollador dedicado', 'Integraciones API', 'Hosting premium 2 años', 'Soporte 365 días'],
          deliveryTime: '25-40 días hábiles',
          rating: 5.0,
          isCustom: true
        }
      ]
    },
    'diseno-grafico': {
      title: 'Plantillas de Diseño',
      description: 'Diseños profesionales listos para descargar y usar',
      type: 'template',
      products: [
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
          downloads: 203
        }
      ]
    }
  }

  const currentService = serviceData[service] || serviceData['desarrollo-web']

  const handleAddToCart = (product) => {
    if (product.isCustom) {
      // Para planes personalizados, abrir WhatsApp directamente
      const message = `¡Hola! Me interesa el ${product.name} (${product.category}) por $${product.price.toLocaleString()}. ¿Podemos coordinar una reunión para discutir mi proyecto?`
      const phoneNumber = "5491123456789"
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
    } else {
      // Para plantillas, agregar al carrito
      addToCart({
        ...product,
        image: product.image || '/api/placeholder/300/200'
      })
    }
  }

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light">
      {/* Header */}
      <div className="bg-brand-dark-blue/50 py-8">
        <div className="container mx-auto px-6">
          <button
            onClick={onBack}
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
          
          {/* Badge del tipo */}
          <div className="mt-4">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
              currentService.type === 'template' 
                ? 'bg-brand-cyan/20 text-brand-cyan' 
                : 'bg-brand-blue/20 text-brand-blue'
            }`}>
              {currentService.type === 'template' ? '📦 Plantillas Listas' : '🛠️ Desarrollo Personalizado'}
            </span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentService.products.map(product => (
            <div key={product.id} className="bg-brand-dark-blue/50 rounded-2xl overflow-hidden border border-brand-border hover:scale-105 transition-transform duration-300">
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-brand-cyan/20 to-brand-blue/20">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-brand-dark/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{product.rating}</span>
                </div>
                {product.downloads && (
                  <div className="absolute top-4 left-4 bg-brand-dark/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Download className="w-4 h-4 text-brand-cyan" />
                    <span className="text-sm font-semibold">{product.downloads}</span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-brand-light/70 mb-4">{product.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-brand-light mb-3">
                    {product.isCustom ? 'Incluye:' : 'Contenido:'}
                  </h4>
                  <ul className="space-y-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-brand-light/70">
                        <Check className="w-4 h-4 text-brand-cyan" />
                        {feature}
                      </li>
                    ))}
                    {product.features.length > 3 && (
                      <li className="text-sm text-brand-cyan">
                        +{product.features.length - 3} características más
                      </li>
                    )}
                  </ul>
                </div>

                {/* Delivery Time */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-brand-light/60">
                    {product.isCustom ? '⏱️ Tiempo:' : '📥 Entrega:'} {product.deliveryTime}
                  </span>
                </div>

                {/* Price and Buy Button */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-brand-cyan">
                    ${product.price.toLocaleString()}
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center gap-2 ${
                      product.isCustom 
                        ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white'
                        : 'bg-gradient-to-r from-brand-cyan to-brand-blue text-white'
                    }`}
                  >
                    {product.isCustom ? (
                      <>
                        <MessageCircle className="w-4 h-4" />
                        Cotizar
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4" />
                        Comprar
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-brand-dark-blue/50 rounded-2xl p-8 border border-brand-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {currentService.type === 'custom' ? '¿Necesitas algo más específico?' : '¿No encuentras lo que buscas?'}
            </h3>
            <p className="text-brand-light/70 mb-6">
              {currentService.type === 'custom' 
                ? 'Podemos crear un plan completamente personalizado para tu proyecto'
                : 'Pregúntanos por plantillas personalizadas o desarrollos a medida'
              }
            </p>
            <button
              onClick={() => {
                const message = `¡Hola! Me interesa un ${currentService.title.toLowerCase()} personalizado. ¿Podemos conversar sobre mi proyecto?`
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
  )
}

export default ServicePage