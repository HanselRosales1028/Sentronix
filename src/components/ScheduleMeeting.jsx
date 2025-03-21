/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";

export default function ScheduleMeeting() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { date, time };

    try {
      const response = await fetch("http://localhost:8000/api/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setMessage(result.message);
      // Reinicia los campos
      setDate("");
      setTime("");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error al enviar la reserva");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="schedule-meeting"
      aria-labelledby="schedule-meeting-heading"
      className="py-20 bg-gradient-to-br from-black to-gray-900 text-white text-center relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Elemento decorativo animado en el fondo */}
      <motion.div
        className="absolute -z-10 w-80 h-80 bg-purple-600 rounded-full opacity-30 filter blur-3xl"
        initial={{ x: "-100%", y: "-50%", scale: 0.8 }}
        animate={{ x: "0%", y: "-50%", scale: 1 }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
      />
      <h2
        id="schedule-meeting-heading"
        className="text-4xl font-bold mb-8 drop-shadow-lg"
      >
        Reserva tu Reunión
      </h2>
      <form
        onSubmit={handleSubmit}
        role="form"
        className="max-w-md mx-auto space-y-6 bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-lg"
      >
        <div className="flex flex-col items-start">
          <label htmlFor="date" className="mb-2 font-medium text-gray-300">
            Fecha
          </label>
          <motion.input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition"
            required
            whileFocus={{ scale: 1.02 }}
            disabled={loading}
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="time" className="mb-2 font-medium text-gray-300">
            Hora
          </label>
          <motion.input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition"
            required
            whileFocus={{ scale: 1.02 }}
            disabled={loading}
          />
        </div>
        <motion.button
          type="submit"
          className="w-full px-6 py-3 text-lg font-semibold bg-white text-black rounded-xl hover:opacity-90 transition shadow-md hover:shadow-lg disabled:opacity-70"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          disabled={loading}
        >
          {loading ? "Enviando..." : "Reserva Tu Reunión"}
        </motion.button>
      </form>
      {message && (
        <motion.p
          className="mt-6 text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          aria-live="polite"
        >
          {message}
        </motion.p>
      )}
    </motion.section>
  );
}  