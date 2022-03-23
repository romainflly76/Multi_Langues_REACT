import React, { useContext } from "react";
import { Context } from "../../context/LangContext";
import "./Contenu.css";
import data from "../../assets/data.js";

export default function Contenu() {
  // Contenu fait partie des enfants du provider, donc on a acces au context
  const { lang } = useContext(Context);
  console.log(lang);

  return (
    <div className="content">
      <h1 className="title">{data["FR"].title}</h1>
      <p className="content-txt">{data["FR"].txt}</p>
    </div>
  );
}
