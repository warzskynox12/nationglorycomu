import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/nationglory/">Accueil</Link></li>
        <li><Link to="/nationglory/AuthPage">Connexion</Link></li>
        <li><Link to="/nationglory/logout">Déconnexion</Link></li>
        <li><Link to="/nationglory/ProfilePage">Profil</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
