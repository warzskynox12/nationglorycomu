import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from './firebase'; // Importez le module Firebase

const Homepage = () => {
    const [user, setUser] = useState(null); // État pour stocker les informations sur l'utilisateur

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
            <h1>Welcome to the Home Page! {firstName}</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AuthPage">Connexion</Link></li>
                    <li><Link to="/logout">Déconnexion</Link></li>
                    <li><Link to="/ProfilePage">Profile</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Homepage;
