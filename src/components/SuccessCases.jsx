/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import case1 from "../assets/success1.jpg";
import case2 from "../assets/success2.jpg";
import case3 from "../assets/success3.jpg";

const successCases = [
  {
    title: "Transformación Digital",
    description: "Implementamos soluciones de IA que revolucionaron el proceso de ventas y atención al cliente.",
    image: case1,
  },
  {
    title: "Optimización Operacional",
    description: "Automatizamos procesos críticos que redujeron tiempos de respuesta en un 50%.",
    image: case2,
  },
  {
    title: "Crecimiento de Marca",
    description: "Estrategias de marketing digital que triplicaron el alcance en redes sociales.",
    image: case3,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function SuccessCases() {
  return (
    <section
      id="success-cases"
      className="py-20 bg-black border-t border-gray-700 relative overflow-hidden"
      aria-labelledby="success-cases-heading"
    >
      {/* Elemento decorativo de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-20 -z-10"></div>
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          id="success-cases-heading"
          className="text-4xl font-bold text-white drop-shadow-lg mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Casos de Éxito
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {successCases.map((success, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={success.image}
                alt={success.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">{success.title}</h3>
                <p className="text-gray-300">{success.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
