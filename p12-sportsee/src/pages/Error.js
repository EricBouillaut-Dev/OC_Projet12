import { NavLink } from "react-router-dom";

//Composant de la page d'erreur
function Error() {
  return (
    <div className="error">
      <h2>Erreur inconnue</h2>
      <p>Une erreur inconnue s'est produite.</p>
      <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </div>
  );
}

export default Error;
