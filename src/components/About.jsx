/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import aboutImage from "../assets/about.jpg"; // Asegúrate de reemplazar por el nombre correcto de tu imagen

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export default function About() {
  return (
    <motion.section
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="relative py-20 border-t border-gray-800 bg-black overflow-hidden"
      role="region"
      aria-labelledby="about-heading"
    >
      {/* Fondo decorativo animado */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-purple-600 opacity-20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
      />
      
      <div className="relative container mx-auto px-6">
        <motion.h2
          id="about-heading"
          variants={childVariants}
          className="text-4xl font-bold mb-8 text-white drop-shadow-md text-center"
        >
          ¿Quiénes Somos?
        </motion.h2>
        <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
          <motion.div variants={childVariants} className="mb-8 md:mb-0">
            <p className="text-lg text-gray-300 leading-relaxed">
              En <span className="font-semibold text-white">Sentronix</span>, somos apasionados por la tecnología y la innovación. Especializados en inteligencia artificial, automatización y marketing digital, transformamos negocios con soluciones a la medida que impulsan el crecimiento y la eficiencia.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              Nuestro equipo de expertos combina creatividad y rigor técnico para ofrecer resultados que marcan la diferencia en un mundo digital en constante evolución.
            </p>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="flex justify-center items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={aboutImage}
              alt="Equipo de Sentronix"
              className="rounded-lg shadow-2xl w-full max-w-md object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
