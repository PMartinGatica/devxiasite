import React from 'react'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    isCartOpen,
    setIsCartOpen,
    clearCart
  } = useCart()

  if (!isCartOpen) return null

  const handleCheckout = () => {
    // Integrar con WhatsApp para checkout
    const total = getCartTotal()
    const itemsList = cartItems.map(item => 
      `• ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toLocaleString()}`
    ).join('\n')
    
    const message = `🛒 *Solicitud de Compra - DEVXIA*\n\n${itemsList}\n\n💰 *Total: $${total.toLocaleString()}*\n\n¡Hola! Me interesa adquirir estos productos/servicios. ¿Podemos coordinar el pago y entrega?`
    
    const phoneNumber = "5491123456789"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-brand-dark-blue border-l border-brand-border shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-brand-border">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-brand-cyan" />
              <h2 className="text-xl font-bold text-white">
                Carrito ({cartItems.length})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-brand-light/60 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-brand-light/30 mx-auto mb-4" />
                <p className="text-brand-light/60">Tu carrito está vacío</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="bg-brand-dark/50 rounded-xl p-4 border border-brand-border">
                    <div className="flex items-start gap-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-1">{item.name}</h3>
                        <p className="text-brand-light/60 text-sm mb-2">{item.category}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full bg-brand-border hover:bg-brand-cyan transition-colors flex items-center justify-center"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center text-white font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full bg-brand-border hover:bg-brand-cyan transition-colors flex items-center justify-center"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-right">
                      <span className="text-brand-cyan font-bold">
                        ${(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-brand-border">
              <div className="flex justify-between items-center mb-4">
                <span className="text-brand-light">Total:</span>
                <span className="text-2xl font-bold text-brand-cyan">
                  ${getCartTotal().toLocaleString()}
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={clearCart}
                  className="flex-1 py-3 px-4 border border-brand-border rounded-xl text-brand-light hover:bg-brand-border transition-colors"
                >
                  Limpiar
                </button>
                <button
                  onClick={handleCheckout}
                  className="flex-2 py-3 px-6 bg-gradient-to-r from-brand-cyan to-brand-blue text-white rounded-xl font-semibold hover:scale-105 transition-transform"
                >
                  Comprar via WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart