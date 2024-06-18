import React from 'react';
import { Link } from 'react-router-dom';
import Firebase from './firebase';
import Logout from './Logout'

const Navbar = () => {
  const user = Firebase.auth().currentUser;
  return (
    <nav>
      <ul>
        <li><Link to="/nationglorycomu/"><button>Accueil</button></Link></li>
        {user ? (
          <>
            <li><Link to="/nationglorycomu/Profile"><button>Profil</button></Link></li>
            <li><Logout /></li>
          </>
        ) : (
          <li><Link to="/nationglorycomu/Auth"><button>Connexion</button></Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;