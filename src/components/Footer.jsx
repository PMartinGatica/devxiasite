import React from 'react'
import { Mail, Phone, MapPin, Heart, ExternalLink, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark-blue border-t border-brand-border py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {/* LOGO REEMPLAZADO */}
              <img 
                src="/logoDevxia.svg" 
                alt="DEVXIA Logo" 
                className="w-10 h-10"
              />
              <h3 className="text-2xl font-bold gradient-text">DEVXIA</h3>
            </div>
            <p className="text-brand-light/70 mb-6 max-w-md">
              Tu socio digital para el éxito. Creamos experiencias digitales que impulsan tu negocio hacia el futuro.
            </p>
            
            {/* Redes sociales */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-border hover:bg-brand-cyan transition-colors flex items-center justify-center group">
                <Facebook className="w-5 h-5 text-brand-light group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-border hover:bg-brand-blue transition-colors flex items-center justify-center group">
                <Twitter className="w-5 h-5 text-brand-light group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-border hover:bg-brand-pink transition-colors flex items-center justify-center group">
                <Instagram className="w-5 h-5 text-brand-light group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-border hover:bg-brand-purple transition-colors flex items-center justify-center group">
                <Linkedin className="w-5 h-5 text-brand-light group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-brand-light mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {['Inicio', 'Servicios', 'Planes', 'FAQ', 'Contacto'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-brand-light/70 hover:text-brand-cyan transition-colors flex items-center gap-2 group"
                  >
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-brand-light mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-brand-light/70">
                <Mail className="w-4 h-4 text-brand-cyan" />
                <span>contacto@devxia.com</span>
              </div>
              <div className="flex items-center gap-3 text-brand-light/70">
                <Phone className="w-4 h-4 text-brand-cyan" />
                <span>+54 9 11 1234-5678</span>
              </div>
              <div className="flex items-center gap-3 text-brand-light/70">
                <MapPin className="w-4 h-4 text-brand-cyan" />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-brand-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brand-light/60 text-sm">
              © 2024 DEVXIA. Todos los derechos reservados.
            </p>
            <p className="text-brand-light/60 text-sm flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-red-500 animate-pulse" /> en Argentina
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
