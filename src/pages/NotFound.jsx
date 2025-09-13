import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Error Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-brand-cyan/20 to-brand-blue/20 rounded-full flex items-center justify-center mb-6">
              <AlertTriangle className="w-16 h-16 text-brand-cyan" />
            </div>
          </motion.div>

          {/* Error Code */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-8xl md:text-9xl font-bold gradient-text mb-4"
          >
            404
          </motion.h1>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-light mb-4">
              Página no encontrada
            </h2>
            <p className="text-xl text-brand-light/70 leading-relaxed">
              Lo sentimos, la página que estás buscando no existe o ha sido movida. 
              Puede que hayas escrito mal la URL o que el enlace esté roto.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/"
              className="flex items-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-blue text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              <Home className="w-5 h-5" />
              Volver al inicio
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 border border-brand-cyan/30 text-brand-cyan px-8 py-4 rounded-full font-semibold hover:bg-brand-cyan/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Página anterior
            </button>
          </motion.div>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 p-6 bg-brand-dark-blue/50 backdrop-blur-sm rounded-2xl border border-brand-border"
          >
            <h3 className="text-lg font-semibold text-brand-light mb-3">
              ¿Necesitás ayuda?
            </h3>
            <p className="text-brand-light/70 mb-4">
              Si creés que esto es un error o necesitás asistencia, no dudes en contactarnos.
            </p>
            <a
              href="mailto:contacto@devxiasite.com"
              className="inline-flex items-center gap-2 text-brand-cyan hover:text-brand-light transition-colors font-semibold"
            >
              contacto@devxiasite.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
