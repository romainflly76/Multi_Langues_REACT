import React, { createContext, useState } from "react";

// On le créer dans le provider (Provider qui va entourer toute notre App ou partie de l'application)
export const Context = createContext();

// On creer une constante (langue supportée) et on met toutes les langues que le site supporte
const supportedLangs = ["EN", "FR", "ES", "DE"];
// On creer une variable "browserLAng"  navigator.language qui a acces à la langue du navigateur
// Slice pour decoupé les 3 premiers caracteres et touppercase
// toUppercase: Retourne la valeur de la chaîne courante, convertie en majuscules
let browserLang = navigator.language.slice(0, 2).toUpperCase();

// if si l'index de supportedLangs du tableau (parametre e la langue du navigateur)
// Est strictement égale à -1 (si on est sur une autre Langue, genre Deutsch ou Russe par exemple)
if (supportedLangs.indexOf(browserLang) === -1) {
  console.log("not supported");
  // Il chargera dans ce cas là, la langue English par defaut
  browserLang = "EN";
}

const ContextProvider = (props) => {
  const [lang, setLang] = useState(browserLang);

  // Changer la langue au click!
  const toggleLang = (changeLang) => {
    // et on setLang de changeLang
    setLang(changeLang);
  };

  // On fournie les valeur de lang
  return (
    // on passe lafonction toggleLang
    <Context.Provider value={{ lang, toggleLang }}>
      {props.children}
    </Context.Provider>
  );
};

// On exporte
export default ContextProvider;
