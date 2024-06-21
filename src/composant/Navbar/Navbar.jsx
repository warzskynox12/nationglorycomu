import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Firebase from '../../senssible/firebase';
import Logout from './Logout/Logout';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true); // Nouvel état pour suivre la vérification

  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(currentUser => {
      setUser(currentUser);
      setCheckingAuth(false); // Authentification vérifiée
    });

    return () => unsubscribe(); // Nettoyer l'abonnement
  }, []);

  if (checkingAuth) {
    return <div>Vérification de l'authentification...</div>; // Ou un indicateur de chargement
  }

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
          <li><Link to="/nationglorycomu/Auth"><button>Se connecter</button></Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;