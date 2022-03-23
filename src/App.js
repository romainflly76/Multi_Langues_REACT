import React from "react";
import Contenu from "./Components/Contenu/Contenu";
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";
import ContextProvider from "./context/LangContext";

function App() {
  return (
    <ContextProvider>
      {/* // Il fau tmettre ToggleLangs au dessus pour que l'affichage se fasse
      avant le Contenu */}
      <ToggleLangs />
      <Contenu />
    </ContextProvider>
  );
}

export default App;
