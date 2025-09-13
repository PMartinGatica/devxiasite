import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light">
      {/* Header */}
      <div className="bg-brand-dark-blue border-b border-brand-border">
        <div className="container mx-auto px-6 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-brand-cyan hover:text-brand-light transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="p-3 bg-brand-cyan/20 rounded-xl">
              <FileText className="w-8 h-8 text-brand-cyan" />
            </div>
            <div>
              <h1 className="text-4xl font-bold gradient-text">Términos y Condiciones</h1>
              <p className="text-brand-light/70 mt-2">Última actualización: 13 de septiembre de 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <div className="space-y-8">
            <section className="bg-brand-dark-blue/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-border">
              <h2 className="text-2xl font-bold text-brand-cyan mb-4">1. Información General</h2>
              <p className="text-brand-light/80 leading-relaxed">
                Los presentes términos y condiciones regulan el uso de los servicios ofrecidos por Pablo, comercialmente conocido como 
                <strong> Devxia</strong>, con domicilio en Ushuaia, Tierra del Fuego, Argentina. Al contratar nuestros servicios, 
                usted acepta estar sujeto a estos términos.
              </p>
            </section>

            <section className="bg-brand-dark-blue/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-border">
              <h2 className="text-2xl font-bold text-brand-cyan mb-4">2. Servicios Ofrecidos</h2>
              <p className="text-brand-light/80 leading-relaxed mb-4">
                Devxia ofrece servicios de desarrollo de software, incluyendo:
              </p>
              <ul className="list-disc list-inside text-brand-light/80 space-y-2">
                <li>Desarrollo de aplicaciones web y móviles</li>
                <li>Creación de sitios web y landing pages</li>
                <li>Desarrollo de tiendas online (e-commerce)</li>
                <li>Creación de portafolios profesionales</li>
                <li>Consultoría en desarrollo de software</li>
              </ul>
            </section>

            <section className="bg-brand-dark-blue/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-border">
              <h2 className="text-2xl font-bold text-brand-cyan mb-4">3. Proceso de Trabajo</h2>
              <div className="space-y-4 text-brand-light/80">
                <p><strong>3.1 Cotización:</strong> Todo proyecto inicia con una cotización detallada que incluye alcance, tiempos y costos.</p>
                <p><strong>3.2 Contrato:</strong> Una vez aceptada la cotización, se formaliza el proyecto mediante contrato específico.</p>
                <p><strong>3.3 Desarrollo:</strong> El trabajo se realiza por fases, con validaciones periódicas del cliente.</p>
                <p><strong>3.4 Entrega:</strong> Se entrega el proyecto completo junto con documentación técnica.</p>
              </div>
            </section>

            <section className="bg-brand-dark-blue/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-border">
              <h2 className="text-2xl font-bold text-brand-cyan mb-4">4. Condiciones de Pago</h2>
              <div className="space-y-4 text-brand-light/80">
                <p><strong>4.1 Modalidad:</strong> Los pagos se realizan mediante anticipo inicial y saldo final al momento de la entrega.</p>
                <p><strong>4.2 Anticipo:</strong> Se requiere un anticipo del 50% para iniciar cualquier proyecto.</p>
                <p><strong>4.3 Saldo final:</strong> El 50% restante se abona contra entrega del proyecto completado.</p>
                <p><strong>4.4 Métodos:</strong> Aceptamos transferencias bancarias y métodos de pago digitales.</p>
              </div>
            </section>

            <section className="bg-brand-dark-blue/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-border">
              <h2 className="text-2xl font-bold text-brand-cyan mb-4">5. Propiedad Intelectual</h2>
              <div className="space-y-4 text-brand-light/80">
                <p><strong>5.1 Código fuente:</strong> Una vez completado el pago, el cliente obtiene todos los derechos sobre el código desarrollado.</p>
                <p><strong>5.2 Licencias:</strong> El cliente es responsable de adquirir las licencias necesarias para software de terceros.</p>
                <p><strong>5.3 Contenido:</strong> El cliente debe proporcionar contenido original o con derechos de uso apropiados.</p>
              </div>
            </section>

            <section className="bg-brand-dark-blue/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-border">
              <h2 className="text-2xl font-bold text-brand-cyan mb-4">6. Garantías y Responsabilidades</h2>
              <div className="space-y-4 text-brand-light/80">
                <p><strong>6.1 Garantía técnica:</strong> Garantizamos que el proyecto funcione según las especificaciones acordadas.</p>
                <p><strong>6.2 Período de garantía:</strong> Incluimos corrección de bugs técnicos durante 30 días posteriores a la entrega.</p>
                <p><strong>6.3 Limitaciones:</strong> No nos responsabilizamos por problemas derivados de modificaciones no autorizadas.</p>
                <p><strong>6.4 Hosting y dominio:</strong> Son responsabilidad del cliente, salvo acuerdo específico.</p>
              </div>
            </section>

            <section className="bg-brand-dark-blue/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-border">
              <h2 className="text-2xl font-bold text-brand-cyan mb-4">7. Modificaciones del Servicio</h2>
              <p className="text-brand-light/80 leading-relaxed">
                Cualquier modificación al alcance original del proyecto debe ser acordada por escrito y puede implicar ajustes en tiempo y costo. 
                Las solicitudes de cambios durante el desarrollo se evaluarán caso por caso.
              </p>
            </section>

            <section className="bg-brand-dark-blue/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-border">
              <h2 className="text-2xl font-bold text-brand-cyan mb-4">8. Cancelación</h2>
              <div className="space-y-4 text-brand-light/80">
                <p><strong>8.1 Por el cliente:</strong> El cliente puede cancelar el proyecto, pero no habrá devolución del anticipo si ya se inició el desarrollo.</p>
                <p><strong>8.2 Por Devxia:</strong> Nos reservamos el derecho de cancelar un proyecto en caso de incumplimiento del cliente.</p>
                <p><strong>8.3 Entrega parcial:</strong> En caso de cancelación, se entregará el trabajo desarrollado hasta la fecha.</p>
              </div>
            </section>

            <section className="bg-brand-dark-blue/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-border">
              <h2 className="text-2xl font-bold text-brand-cyan mb-4">9. Contacto</h2>
              <p className="text-brand-light/80 leading-relaxed mb-4">
                Para consultas sobre estos términos y condiciones:
              </p>
              <div className="space-y-2 text-brand-light/80">
                <p><strong>Correo electrónico:</strong> <a href="mailto:contacto@devxiasite.com" className="text-brand-cyan hover:underline">contacto@devxiasite.com</a></p>
                <p><strong>Sitio web:</strong> <a href="https://devxia.com" className="text-brand-cyan hover:underline">devxia.com</a></p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsAndConditions
