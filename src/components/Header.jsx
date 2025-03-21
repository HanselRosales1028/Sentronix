/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Servicios", href: "#services" },
  { label: "Nosotros", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Manejo de la tecla Escape para cerrar el menú
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        <h1 className="text-2xl font-bold tracking-wide">SENTRONIX</h1>
        <nav
          className="hidden md:flex gap-6 text-lg"
          role="navigation"
          aria-label="Navegación principal"
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="hover:text-gray-400 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="bg-black md:hidden flex flex-col px-6 py-4 text-lg"
            role="navigation"
            aria-label="Navegación móvil"
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="py-2 border-b border-gray-800 hover:text-gray-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
