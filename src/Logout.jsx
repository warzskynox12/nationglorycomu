import React from 'react';
import firebase from './firebase';
import Navbar from './Navbar';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      console.log('Déconnexion réussie !');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
};

export default Logout;
