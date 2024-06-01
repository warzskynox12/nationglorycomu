import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/AuthPage">Connexion</Link></li>
        <li><Link to="/logout">Déconnexion</Link></li>
        <li><Link to="/ProfilePage">Profil</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
