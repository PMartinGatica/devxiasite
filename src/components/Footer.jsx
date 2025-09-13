import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Heart, ExternalLink, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark-blue border-t border-brand-border py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Logo, descripción y redes sociales */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/devxialogo_transparent.png" 
                alt="DEVXIA Logo" 
                className="w-40 h-40"
              />
              <h3 className="text-2xl font-bold gradient-text">DEVXIA</h3>
            </div>
            <p className="text-brand-light/70 mb-8 leading-relaxed">
              Transformamos ideas en webs y aplicaciones que hacen crecer tu negocio.
            </p>
          </div>

          {/* Navegación y Contacto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:col-span-2">
            
            {/* Enlaces rápidos */}
            <div>
              <h4 className="text-lg font-semibold text-brand-light mb-6 relative">
                Navegación
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-cyan"></div>
              </h4>
              <ul className="space-y-3">
                {['Inicio', 'Servicios', 'Demos', 'FAQ', 'Contacto'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`}
                      className="text-brand-light/70 hover:text-brand-cyan transition-colors flex items-center gap-2 group py-1"
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
              <h4 className="text-lg font-semibold text-brand-light mb-6 relative">
                Contacto
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-cyan"></div>
              </h4>
              <div className="space-y-4">
                <a 
                  href="mailto:contacto@devxiasite.com"
                  className="flex items-center gap-3 text-brand-light/70 hover:text-brand-cyan transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center group-hover:bg-brand-cyan/20 transition-colors">
                    <Mail className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <span>contacto@devxiasite.com</span>
                </a>
                
                <a 
                  href="tel:+5492901502672"
                  className="flex items-center gap-3 text-brand-light/70 hover:text-brand-cyan transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center group-hover:bg-brand-cyan/20 transition-colors">
                    <Phone className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <span>+54 9 2901 502672</span>
                </a>
                
                <div className="flex items-center gap-3 text-brand-light/70">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <span>Ushuaia, Argentina</span>
                </div>
                
                <a 
                  href="https://www.instagram.com/devxia.soluciones?igsh=c3hsYmcxNzNlNTEx" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-brand-light/70 hover:text-brand-cyan transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-pink-500/10 to-purple-500/10 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-pink-500/20 group-hover:to-purple-500/20 transition-all">
                    <Instagram className="w-4 h-4 text-pink-500" />
                  </div>
                  <span>@devxia.soluciones</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Línea divisoria y footer inferior */}
        <div className="border-t border-brand-border pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Copyright y "Hecho con amor" */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center lg:text-left">
              <p className="text-brand-light/60 text-sm">
                © 2024 DEVXIA. Todos los derechos reservados.
              </p>
              <p className="text-brand-light/60 text-sm flex items-center gap-1">
                Hecho con <Heart className="w-4 h-4 text-red-500 animate-pulse" /> en Argentina
              </p>
            </div>

            {/* Enlaces legales */}
            <div className="flex gap-6 text-xs">
              <Link 
                to="/terminos-condiciones" 
                className="text-brand-light/40 hover:text-brand-cyan transition-colors relative group"
              >
                Términos y Condiciones
                <span className="absolute bottom-0 left-0 w-0 h-px bg-brand-cyan transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                to="/aviso-privacidad" 
                className="text-brand-light/40 hover:text-brand-cyan transition-colors relative group"
              >
                Aviso de Privacidad
                <span className="absolute bottom-0 left-0 w-0 h-px bg-brand-cyan transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
