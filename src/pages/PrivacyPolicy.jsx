import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
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
              <Shield className="w-8 h-8 text-brand-cyan" />
            </div>
            <div>
              <h1 className="text-4xl font-bold gradient-text">Aviso de Privacidad</h1>
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
              <h2 className="text-2xl font-bold text-brand-cyan mb-4">Responsable del Tratamiento</h2>
              <p className="text-brand-light/80 leading-relaxed">
                Pablo, comercialmente conocido como <strong>Devxia</strong>, con domicilio en Ushuaia, Tierra del Fuego, Argentina, 
                es el responsable del uso y protección de sus datos personales.
              </p>
            </section>

            <section className="bg-brand-dark-blue/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-border">
              <h2 className="text-2xl font-bold text-brand-cyan mb-4">Finalidades Primarias</h2>
              <p className="text-brand-light/80 leading-relaxed mb-4">
                Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
              </p>
              <ul className="list-disc list-inside text-brand-light/80 space-y-2">
                <li>Prestación de cualquier servicio solicitado</li>
                <li>Comunicación relacionada con proyectos y servicios</li>
                <li>Envío de cotizaciones y propuestas comerciales</li>
                <li>Soporte técnico y atención al cliente</li>
              </ul>
            </section>

            <section className="bg-brand-dark-blue/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-border">
              <h2 className="text-2xl font-bold text-brand-cyan mb-4">Datos Personales Recabados</h2>
              <p className="text-brand-light/80 leading-relaxed">
                Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos de identificación y contacto, incluyendo:
              </p>
              <ul className="list-disc list-inside text-brand-light/80 space-y-2 mt-4">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Información del proyecto o servicio requerido</li>
              </ul>
            </section>

            <section className="bg-brand-dark-blue/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-border">
              <h2 className="text-2xl font-bold text-brand-cyan mb-4">Derechos ARCO</h2>
              <p className="text-brand-light/80 leading-relaxed mb-4">
                Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (<strong>Acceso</strong>). 
                Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (<strong>Rectificación</strong>); 
                que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (<strong>Cancelación</strong>); 
                así como oponerse al uso de sus datos personales para fines específicos (<strong>Oposición</strong>). Estos derechos se conocen como derechos ARCO.
              </p>
              <p className="text-brand-light/80 leading-relaxed">
                Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del correo electrónico 
                <strong className="text-brand-cyan"> contacto@devxiasite.com</strong>. La respuesta a su solicitud será atendida en un plazo máximo de 10 días hábiles.
              </p>
            </section>

            <section className="bg-brand-dark-blue/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-border">
              <h2 className="text-2xl font-bold text-brand-cyan mb-4">Datos Recabados por el Sitio Web</h2>
              <p className="text-brand-light/80 leading-relaxed mb-4">
                Nuestro sitio web puede recabar automáticamente los siguientes datos:
              </p>
              <ul className="list-disc list-inside text-brand-light/80 space-y-2">
                <li>Dirección IP y datos de navegación</li>
                <li>Información del dispositivo y navegador utilizado</li>
                <li>Páginas visitadas y tiempo de permanencia</li>
                <li>Cookies técnicas necesarias para el funcionamiento del sitio</li>
              </ul>
            </section>

            <section className="bg-brand-dark-blue/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-border">
              <h2 className="text-2xl font-bold text-brand-cyan mb-4">Contacto</h2>
              <p className="text-brand-light/80 leading-relaxed mb-4">
                Para más información sobre este aviso de privacidad, puede contactarnos en:
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

export default PrivacyPolicy
