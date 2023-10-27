import React from "react";
import { NavLink } from "react-router-dom";

const Error = ({ type, msg }) => (
  <div className="error">
    <h2>Erreur {type}</h2>
    <p>{msg}</p>
    <NavLink to="/">Retourner sur la page d'accueil</NavLink>
  </div>
);

export default Error;
