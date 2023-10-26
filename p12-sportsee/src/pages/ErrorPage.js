import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  //   const navigate = useNavigate();
  const { errorType } = useParams();

  let errorMessage = "Une erreur inconnue s'est produite.";

  if (errorType === "BackEnd") {
    errorMessage = "Problème de connexion avec le backend.";
  }
  if (errorType === "404") {
    errorMessage = "La page que vous demandez n'existe pas.";
  }

  return (
    <div className="error">
      <h2>Erreur {errorType}</h2>
      <p>{errorMessage}</p>
      <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </div>
  );
}

export default ErrorPage;
