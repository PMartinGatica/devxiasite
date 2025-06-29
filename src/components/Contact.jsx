import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado! Te contactaremos pronto.');
  };

  const services = [
    'Desarrollo Web',
    'Aplicación Móvil',
    'Diseño Gráfico',
    'Marketing Digital',
    'E-commerce',
    'Consultoría',
    'Otro'
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-light mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-light">Email</h4>
                    <p className="text-brand-light/70">contacto@devxia.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-light">Teléfono</h4>
                    <p className="text-brand-light/70">+54 9 11 1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-light">Ubicación</h4>
                    <p className="text-brand-light/70">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-brand-dark/50 backdrop-blur-sm rounded-2xl p-6 border border-brand-border">
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

          {/* Formulario */}
          <div className="bg-brand-dark/50 backdrop-blur-sm rounded-3xl p-8 border border-brand-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Nombre */}
              <div>
                <label className="block text-brand-light font-medium mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-brand-dark-blue/50 border border-brand-border rounded-xl text-brand-light placeholder-brand-light/50 focus:border-brand-cyan focus:outline-none transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-brand-light font-medium mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-brand-dark-blue/50 border border-brand-border rounded-xl text-brand-light placeholder-brand-light/50 focus:border-brand-cyan focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-brand-light font-medium mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Teléfono (Opcional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-dark-blue/50 border border-brand-border rounded-xl text-brand-light placeholder-brand-light/50 focus:border-brand-cyan focus:outline-none transition-colors"
                  placeholder="+54 9 11 1234-5678"
                />
              </div>

              {/* Servicio */}
              <div>
                <label className="block text-brand-light font-medium mb-2">
                  Servicio de Interés
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-brand-dark-blue/50 border border-brand-border rounded-xl text-brand-light focus:border-brand-cyan focus:outline-none transition-colors"
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-brand-light font-medium mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-brand-dark-blue/50 border border-brand-border rounded-xl text-brand-light placeholder-brand-light/50 focus:border-brand-cyan focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              {/* Botón enviar */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-cyan to-brand-blue text-white py-4 px-6 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
