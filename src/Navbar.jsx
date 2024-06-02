import React from 'react';
import { Link } from 'react-router-dom';
import Firebase from './firebase';
import Logout from './Logout'

const Navbar = () => {
  const user = Firebase.auth().currentUser;

  return (
    <nav>
      <ul>
        <li><button onClick={() => window.location.href = '/nationglorycomu/'}>Accueil</button></li>
        {user ? (
          <>
            <li><button onClick={() => window.location.href = '/nationglorycomu/ProfilePage'}>Profil</button></li>
            <li><Logout /></li>
            </>
        ) : (
          <li><button onClick={() => window.location.href = '/nationglorycomu/AuthPage'}>Connexion</button></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
