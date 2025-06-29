import React, { useEffect, useRef, useState } from 'react'
import { ChevronDown, Sparkles, Code, Zap } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const { observeElement, isVisible, ref } = useScrollAnimation()
  const heroRef = useRef(null)

  const texts = [
    'Diseño Web Profesional',
    'Landing Pages Efectivas',
    'Aplicaciones Móviles',
    'Desarrollo Personalizado',
  ]

  useEffect(() => {
    if (heroRef.current) {
      observeElement(heroRef.current)
    }
  }, [observeElement])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [texts.length])

  // Partículas flotantes
  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className={`absolute w-1 h-1 bg-brand-cyan rounded-full opacity-20 animate-float`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${6 + Math.random() * 4}s`,
      }}
    />
  ))

  return (
    <header
      ref={ref}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-cyber pt-20"
    >
      {/* Partículas de fondo */}
      <div className="absolute inset-0 pointer-events-none">{particles}</div>

      {/* Efecto de gradiente radial */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>

      {/* Iconos flotantes */}
      <div className="absolute top-20 left-10 animate-float">
        <Code className="w-8 h-8 text-brand-cyan opacity-30" />
      </div>
      <div
        className="absolute top-40 right-20 animate-float"
        style={{ animationDelay: '2s' }}
      >
        <Sparkles className="w-6 h-6 text-brand-purple opacity-40" />
      </div>
      <div
        className="absolute bottom-40 left-20 animate-float"
        style={{ animationDelay: '4s' }}
      >
        <Zap className="w-7 h-7 text-brand-blue opacity-35" />
      </div>

      <div
        className={`container mx-auto px-6 text-center relative z-10 max-w-5xl transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        {/* Logo con efecto de brillo */}
        {/* <div className="mb-8 animate-glow">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-rainbow animate-spin-slow">
            <span className="text-4xl">💻</span>
          </div>
        </div> */}

        {/* Título principal con efecto de máquina de escribir - CON MARGEN SUPERIOR */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight mt-16 md:mt-20">
          <span className="gradient-text">DEVXIA</span>
          <br />
          <span className="text-brand-light animate-pulse-slow">
            Tu Socio Digital
          </span>
        </h1>

        {/* Subtítulo animado */}
        <div className="mb-8 h-16 flex items-center justify-center">
          <p className="text-xl md:text-2xl text-brand-light/80 font-medium">
            Especialistas en{' '}
            <span className="gradient-text font-bold animate-scale-in">
              {texts[currentText]}
            </span>
          </p>
        </div>

        {/* Descripción */}
        <p className="text-lg md:text-xl text-brand-light/70 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
          Impulsa tu presencia digital con{' '}
          <strong className="text-brand-cyan">DEVXIA</strong>. Creamos landing
          pages, sitios web, flyers y aplicaciones móviles a medida. Elige entre
          plantillas o un desarrollo{' '}
          <strong className="gradient-text">100% personalizado</strong>.
        </p>

        {/* Botones de acción con efectos */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="#servicios"
            className="btn-glow bg-gradient-rainbow text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-brand-cyan/30 transition-all duration-300 group"
          >
            <span className="flex items-center gap-2">
              Explorar Servicios
              <Sparkles className="w-5 h-5 group-hover:animate-wiggle" />
            </span>
          </a>

          <a
            href="#contacto"
            className="btn-glow border-2 border-brand-cyan text-brand-cyan px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-cyan hover:text-brand-dark transition-all duration-300"
          >
            Contactar Ahora
          </a>
        </div>

        {/* Estadísticas con efectos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="card-hover bg-brand-dark-blue/50 backdrop-blur-sm p-6 rounded-2xl border border-brand-border">
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <div className="text-brand-light/70">Proyectos Completados</div>
          </div>
          <div className="card-hover bg-brand-dark-blue/50 backdrop-blur-sm p-6 rounded-2xl border border-brand-border">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-brand-light/70">Soporte Técnico</div>
          </div>
          <div className="card-hover bg-brand-dark-blue/50 backdrop-blur-sm p-6 rounded-2xl border border-brand-border">
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-brand-light/70">Satisfacción Cliente</div>
          </div>
        </div>

        {/* Indicador de scroll con animación */}
        <div className="animate-bounce-slow">
          <ChevronDown className="w-8 h-8 mx-auto text-brand-cyan opacity-70 hover:opacity-100 transition-opacity cursor-pointer" />
        </div>
      </div>
    </header>
  )
}

export default Hero
