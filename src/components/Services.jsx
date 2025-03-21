/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Code, Settings, TrendingUp } from "lucide-react";

const services = [
  {
    title: "Automatización",
    description: "Optimizamos procesos con IA y bots inteligentes.",
    icon: Settings,
  },
  {
    title: "Desarrollo Web",
    description: "Creamos sitios y plataformas innovadoras.",
    icon: Code,
  },
  {
    title: "Marketing Digital",
    description: "Posicionamos marcas con estrategias avanzadas.",
    icon: TrendingUp,
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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 text-center border-t border-gray-700 bg-black relative overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-black opacity-30 -z-10"></div>
      
      <motion.h2
        id="services-heading"
        className="text-4xl font-bold mb-12 text-white drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Nuestros Servicios
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-center">
              {service.icon && (
                <service.icon size={48} className="text-white" />
              )}
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              {service.title}
            </h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
