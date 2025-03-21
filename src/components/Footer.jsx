/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaTiktok, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

const footerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function Footer() {
  return (
    <motion.footer
      role="contentinfo"
      aria-label="Pie de página"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-8 bg-gradient-to-t from-black to-gray-900 border-t border-gray-700 text-center"
    >
      <div className="flex justify-center space-x-6 mb-4">
        <a 
          href="https://www.tiktok.com/@sentronix" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="TikTok"
          className="text-gray-400 hover:text-white transition"
        >
          <FaTiktok size={24} />
        </a>
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="WhatsApp"
          className="text-gray-400 hover:text-white transition"
        >
          <FaWhatsapp size={24} />
        </a>
        <a 
          href="https://www.facebook.com/sentronix" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Facebook"
          className="text-gray-400 hover:text-white transition"
        >
          <FaFacebookF size={24} />
        </a>
        <a 
          href="https://www.instagram.com/sentronix" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram"
          className="text-gray-400 hover:text-white transition"
        >
          <FaInstagram size={24} />
        </a>
      </div>
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Sentronix. Todos los derechos reservados.
      </p>
    </motion.footer>
  );
}
