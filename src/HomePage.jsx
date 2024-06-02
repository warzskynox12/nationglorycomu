import React, { useState, useEffect } from 'react';
import firebase from './firebase'; 
import Navbar from './Navbar';


  
const App = () => {
  const [user, setUser] = useState(''); // État pour stocker les informations sur l'utilisateur

  useEffect(() => {
      // Observer les changements d'état de l'utilisateur
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
          if (user) {
              // Utilisateur connecté
              setUser(user); // Mettre à jour l'état de l'utilisateur
          } else {
              // Aucun utilisateur connecté
              setUser(null); // Remettre à null l'état de l'utilisateur
          }
      });

      // Arrêter l'écoute des changements d'état de l'utilisateur lors du démontage du composant
      return () => unsubscribe();
  }, []);

  // Extraire le prénom de l'utilisateur
  const firstName = user ? user.displayName.split(' ')[0] : '';

  return (
    <div>
      <div>
            <h1>Welcome to the Home Page! {firstName}</h1>
            <Navbar />
        </div>
  </div>
  );
};

export default App;