import React from 'react';
import firebase from '../../../senssible/firebase';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      console.log('Déconnexion réussie !');
      window.location.href = '/nationglorycomu/';
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
};

export default Logout;
