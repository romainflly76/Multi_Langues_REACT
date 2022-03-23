import React, { useContext } from "react";
import FrenchFlag from "../../assets/france.svg";
import SpainFlag from "../../assets/spain.svg";
import EnglishFlag from "../../assets/united-kingdom.svg";
import DeutschFlag from "../../assets/Deutsch.svg";
// import ItalyFlag from "../../assets/Italy.svg";
import "./ToggleLangs.css";
import { Context } from "../../context/LangContext";

export default function ToggleLangs() {
  // On extrait la fonction
  const { toggleLang } = useContext(Context);
  //   console.log(toggleLang);

  return (
    <div className="container-langs">
      <img onClick={() => toggleLang("FR")} src={FrenchFlag} />
      <img onClick={() => toggleLang("EN")} src={EnglishFlag} />
      <img onClick={() => toggleLang("DE")} src={DeutschFlag} />
      {/* <img onClick={() => toggleLang("IT")} src={ItalyFlag} /> */}
      <img onClick={() => toggleLang("ES")} src={SpainFlag} />
    </div>
  );
}
