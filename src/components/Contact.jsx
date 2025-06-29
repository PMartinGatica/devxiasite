import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-brand-dark-blue/30">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Hablemos de tu Proyecto</span>
          </h2>
          <p className="text-xl text-brand-light/70 max-w-3xl mx-auto">
            ¿Listo para llevar tu idea al siguiente nivel? Contactanos y te ayudaremos 
            a convertir tu visión en realidad digital.
          </p>
        </div>

        {/* Información de contacto expandida - ahora ocupa todo el ancho */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-light mb-8 text-center">
                Información de Contacto
              </h3>
              
              {/* Grid de información de contacto */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center text-center p-6 bg-brand-dark/50 backdrop-blur-sm rounded-2xl border border-brand-border">
                  <div className="w-16 h-16 rounded-full bg-brand-cyan/20 flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <h4 className="font-semibold text-brand-light text-lg mb-2">Email</h4>
                  <p className="text-brand-light/70">contacto@devxia.com</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-brand-dark/50 backdrop-blur-sm rounded-2xl border border-brand-border">
                  <div className="w-16 h-16 rounded-full bg-brand-cyan/20 flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <h4 className="font-semibold text-brand-light text-lg mb-2">Teléfono</h4>
                  <p className="text-brand-light/70">+54 9 11 1234-5678</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-brand-dark/50 backdrop-blur-sm rounded-2xl border border-brand-border">
                  <div className="w-16 h-16 rounded-full bg-brand-cyan/20 flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <h4 className="font-semibold text-brand-light text-lg mb-2">Ubicación</h4>
                  <p className="text-brand-light/70">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>

            {/* Horarios expandidos */}
            <div className="bg-brand-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-brand-border">
              <h4 className="font-semibold text-brand-light mb-4">Horarios de Atención</h4>
              <div className="space-y-2 text-brand-light/70">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
