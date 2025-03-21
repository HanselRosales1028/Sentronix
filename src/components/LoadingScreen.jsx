import { useEffect, useState } from "react";

function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simula una carga y oculta la pantalla después de 2.5 segundos
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-semibold">Cargando...</p>
      </div>
    </div>
  );
}

export default LoadingScreen;
