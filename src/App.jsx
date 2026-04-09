import "./App.css";
import Header from "./components/layout/header";
import Hero from "./components/layout/Hero";
import Valores from "./components/layout/Valores";
import PrendasDestacadas from "./components/layout/PrendasDestacadas";
import Acerca from "./components/layout/Acerca";
import Contactanos from "./components/layout/Contactanos";
import Footer from "./components/layout/Footer";
import { useState } from "react";

function App() {
  const estadoInicial =
    localStorage.getItem("darkMode") === "true" ? true : false;
  const [darkMode, setDarkMode] = useState(estadoInicial);

  return (
    <>
      <div className="contenedor">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Valores darkMode={darkMode} />
        <PrendasDestacadas darkMode={darkMode} />
        <Acerca darkMode={darkMode} />
        <Contactanos darkMode={darkMode} />
        <Footer />
      </div>
    </>
  );
}

export default App;
