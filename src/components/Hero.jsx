/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import bgImage from "../assets/fondo.jpg";
import { useCallback } from "react";

// Función de animación flexible: admite "up", "down", "left" y "right".
const fadeIn = (direction = "up", delay = 0) => {
  let x = 0,
    y = 0;
  switch (direction) {
    case "up":
      y = 50;
      break;
    case "down":
      y = -50;
      break;
    case "left":
      x = 50;
      break;
    case "right":
      x = -50;
      break;
    default:
      y = 50;
  }
  return {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    },
  };
};

export default function Hero() {
  // Función de desplazamiento suave hacia la sección de contacto
  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      role="banner"
      className="relative min-h-screen flex flex-col justify-center items-center text-white text-center px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay para mejorar la legibilidad del contenido */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>

      {/* Elemento decorativo animado */}
      <motion.div
        className="absolute -z-10 w-[450px] h-[450px] bg-white/10 rounded-full blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{
          duration: 2,
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        aria-hidden="true"
      />

      {/* Título principal */}
      <motion.h1
        className="relative text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-xl"
        variants={fadeIn("down")}
        initial="hidden"
        animate="visible"
      >
        Innovación en Automatización
      </motion.h1>

      {/* Descripción */}
      <motion.p
        className="relative text-lg md:text-2xl mb-8 max-w-2xl drop-shadow-lg"
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate="visible"
      >
        Elevamos tu negocio con tecnología de vanguardia y soluciones de IA.
      </motion.p>

      {/* Botón para desplazarse a la sección de contacto */}
      <motion.div
        className="relative"
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05 }}
      >
        <Button
          onClick={scrollToContact}
          className="px-8 py-4 text-lg font-bold bg-white text-black rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
          aria-label="Hablemos"
        >
          Hablemos
        </Button>
      </motion.div>
    </section>
  );
}
