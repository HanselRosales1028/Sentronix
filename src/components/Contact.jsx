/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [responseMsg, setResponseMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { name, email, message: userMessage };

    try {
      const res = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setResponseMsg(json.message);
      // Reinicia los campos
      setName("");
      setEmail("");
      setUserMessage("");
    } catch (error) {
      console.error("Error:", error);
      setResponseMsg("Error al enviar el mensaje. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-20 border-t border-gray-700 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Elemento decorativo animado en el fondo */}
      <motion.div
        className="absolute -z-10 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-30"
        initial={{ x: "-100%", y: "-50%", scale: 0.8 }}
        animate={{ x: "0%", y: "-50%", scale: 1 }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
      />
      <h2 id="contact-heading" className="text-4xl font-bold mb-6 text-white drop-shadow-lg">
        Contáctanos
      </h2>
      <p className="text-lg text-gray-400 mb-6 max-w-xl mx-auto">
        ¿Listo para llevar tu negocio al siguiente nivel? Envía un mensaje y nos pondremos en contacto.
      </p>
      <form onSubmit={handleSubmit} role="form" className="max-w-md mx-auto space-y-4 bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-lg">
        <motion.input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          className="w-full p-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition"
          required
          whileFocus={{ scale: 1.02 }}
          disabled={loading}
        />
        <motion.input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          className="w-full p-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition"
          required
          whileFocus={{ scale: 1.02 }}
          disabled={loading}
        />
        <motion.textarea
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Tu mensaje"
          className="w-full p-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition"
          rows="4"
          required
          whileFocus={{ scale: 1.02 }}
          disabled={loading}
        />
        <motion.button
          type="submit"
          className="w-full px-6 py-3 text-lg font-semibold bg-white text-black rounded-xl shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar Mensaje"}
        </motion.button>
      </form>
      {responseMsg && (
        <motion.p
          className="mt-6 text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          aria-live="polite"
        >
          {responseMsg}
        </motion.p>
      )}
    </motion.section>
  );
}