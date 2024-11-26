import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        {/* Aquí se gestionan las secciones que se muestran */}
      </div>
    </div>
  );
};

export default App;
