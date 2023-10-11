import Logo from "../assets/logo.svg";

function NavBar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" />
      <ul className="nav">
        <li className="sportsee">SportSee</li>
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglages</li>
        <li>Communauté</li>
      </ul>
    </div>
  );
}

export default NavBar;
