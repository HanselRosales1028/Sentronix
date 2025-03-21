/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Servicios', href: '#services' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Contacto', href: '#contact' },
];

// Variantes para la animación del menú móvil: desliza desde la izquierda
const mobileMenuVariants = {
  hidden: { opacity: 0, x: '-100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.1 },
  },
  exit: { opacity: 0, x: '-100%', transition: { duration: 0.3, ease: 'easeIn' } },
};

// Variantes para cada item del menú móvil
const mobileNavItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

// Función throttle para optimizar el scroll (se mantiene en caso de futuros efectos)
const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Eliminamos el efecto de cambio de background y mantenemos el fondo transparente
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 50);
    }, 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-transparent transition-all duration-300"
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a
            href="#"
            className="text-white text-2xl font-bold tracking-wide hover:scale-105 transition-transform duration-200"
            aria-label="Inicio"
          >
            Sentronix
          </a>
          {/* Menú de escritorio */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="relative text-white font-medium hover:text-gray-300 transition-colors duration-200 group"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          {/* Botón de menú móvil */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>
      {/* Menú móvil con animación */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col justify-center items-start z-40 px-8"
            role="dialog"
            aria-modal="true"
          >
            <button
              className="absolute top-8 right-8 text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Cerrar menú"
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col space-y-6 w-full">
              {navLinks.map(({ label, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  variants={mobileNavItemVariants}
                  className="text-white text-3xl font-semibold hover:text-gray-300 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
