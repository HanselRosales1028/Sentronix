import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SuccessCases from "./components/SuccessCases";
import About from "./components/About";
import ScheduleMeeting from "./components/ScheduleMeeting";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula el tiempo de carga de la página
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {isLoading && <LoadingScreen />}
      {!isLoading && (
        <>
          <Navbar />
          <Hero />
          <Services />
          <SuccessCases />
          <About />
          <ScheduleMeeting />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
