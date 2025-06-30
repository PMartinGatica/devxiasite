import React from 'react'
import { X, Play } from 'lucide-react'

const VideoModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-brand-dark-blue border border-brand-border rounded-2xl p-6 m-4 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white">{product?.name}</h3>
            <p className="text-brand-light/70">Demo del producto</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-brand-dark/50 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-brand-light" />
          </button>
        </div>

        {/* Video Container */}
        <div className="aspect-video bg-brand-dark/50 rounded-xl flex items-center justify-center mb-6">
          {product?.demoVideo ? (
            <video
              controls
              autoPlay
              className="w-full h-full rounded-xl"
              poster={product.image}
            >
              <source src={product.demoVideo} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          ) : (
            <div className="text-center">
              <Play className="w-16 h-16 text-brand-cyan/50 mx-auto mb-4" />
              <p className="text-brand-light/50">Video demo próximamente</p>
              <p className="text-sm text-brand-light/30">{product?.name}</p>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-brand-light mb-3">Características:</h4>
            <ul className="space-y-2">
              {product?.features?.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-brand-light/70">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="bg-brand-dark/30 rounded-xl p-4">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-brand-cyan">
                  ${product?.price?.toLocaleString()}
                </div>
                <p className="text-sm text-brand-light/60">{product?.deliveryTime}</p>
              </div>
              <button className="w-full bg-gradient-to-r from-brand-cyan to-brand-blue text-white py-3 px-6 rounded-xl font-semibold hover:scale-105 transition-transform">
                Comprar Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoModal