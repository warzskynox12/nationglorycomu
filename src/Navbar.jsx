import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/nationglorycomu/">Accueil</Link></li>
        <li><Link to="/nationglorycomu/AuthPage">Connexion</Link></li>
        <li><Link to="/nationglorycomu/logout">Déconnexion</Link></li>
        <li><Link to="/nationglorycomu/ProfilePage">Profil</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
