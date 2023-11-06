import Logo from "../assets/logo.svg";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <img src={Logo} alt="Logo" />
        <ul className="nav">
          <li className="sportsee">SportSee</li>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglages</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
