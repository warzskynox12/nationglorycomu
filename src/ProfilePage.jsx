import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from './firebase';
import Navbar from './Navbar';
import ppimage from './assets/pp.jpg';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid'; // Importer uuidv4 si vous utilisez uuid

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const [error, setError] = useState(null);
    const [isGoogleProvider, setIsGoogleProvider] = useState(false);
    
    const navigate = useNavigate()

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                setIsGoogleProvider(user.providerData.some(provider => provider.providerId === 'google.com'));
            } else {
                setUser('');
                navigate('/nationglory/AuthPage')
            }
        });
        return () => unsubscribe();
    }, []);

    const handleLinkGoogleAccount = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await firebase.auth().currentUser.linkWithPopup(provider);
            console.log('Compte Google lié avec succès !');
            setIsGoogleProvider(true);
        } catch (error) {
            setError(error.message);
            console.error(error.message);
        }
    };

    const handleUpdateEmail = async () => {
        try {
            await firebase.auth().currentUser.updateEmail(newEmail);
            console.log('Adresse email mise à jour avec succès !');
        } catch (error) {
            setError(error.message);
            console.error(error.message);
        }
    };

    const handleUpdatePassword = async () => {
        try {
            if (newPassword !== confirmNewPassword) {
                setError('les mots de passe doivent correspondre.');
                return;
            }
            await firebase.auth().currentUser.updatePassword(newPassword);
            console.log('Mot de passe mis à jour avec succès !');
        } catch (error) {
            setError(error.message);
            console.error(error.message);
        }
    };
    

    const handleUpdateName = async () => {
        try {
            await firebase.auth().currentUser.updateProfile({
                displayName: `${newFirstName} ${newLastName}`
            });
            console.log('Nom mis à jour avec succès !');
        } catch (error) {
            setError(error.message);
            console.error(error.message);
        }
    };

// Initialiser Dropbox avec vos identifiants d'application

const [profileImageUrl, setProfileImageUrl] = useState(null); // État pour stocker l'URL de l'image de profil
    const [newProfileImage, setNewProfileImage] = useState(null); // État pour stocker la nouvelle image de profil sélectionnée par l'utilisateur

    const handleClick = () => {
        if (newProfileImage !== null) {
            const imgRef = ref(firebase.storage(), `profiles/${uuidv4()}`); // Créer une référence à l'emplacement de stockage de l'image
            uploadBytes(imgRef, newProfileImage).then(snapshot => {
                console.log(snapshot);
                getDownloadURL(snapshot.ref).then(url => {
                    setProfileImageUrl(url); // Mettre à jour l'état profileImageUrl avec la nouvelle URL de l'image
                    // Vous pouvez également utiliser l'URL ici pour d'autres fins si nécessaire
                });
            });
        }
    }

    const handleFileChange = (event) => {
        setNewProfileImage(event.target.files[0]); // Mettre à jour l'état newProfileImage avec le fichier sélectionné
    }





    return (
        <div>
            <Navbar />
            <h1>Profil de l'utilisateur</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {user ? (
                <div>
                    <img src={profileImageUrl || 'https://firebasestorage.googleapis.com/v0/b/nationsglory-62812.appspot.com/o/Prendre%20sa%20sant%C3%A9%20en%20main%20n%E2%80%99a%20jamais%20%C3%A9t%C3%A9%20aussi%20simple.jpg?alt=media&token=dc085ed1-9a30-4dc8-92cc-ad7eaa8a840c'} alt="Image de profil" />
                    <p>Prénom: {user.displayName.split(' ')[0]}</p>
                    <p>Nom: {user.displayName.split(' ')[1]}</p>
                    <p>Email: {user.email}</p>
                    {isGoogleProvider ? (
                        <p>Connecté avec Google</p>
                    ) : (
                        <button onClick={handleLinkGoogleAccount}>Lier un compte Google</button>
                    )}
                    <div>
                        <h2>Modifier l'adresse email</h2>
                        <input
                            type="email"
                            placeholder="Nouvelle adresse email"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                        />
                        <button onClick={handleUpdateEmail}>Mettre à jour l'email</button>
                    </div>
                    <div>
                        <h2>Modifier le mot de passe</h2>
                        <input
                            type="password"
                            placeholder="Nouveau mot de passe"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Confirmer le nouveau mot de passe"
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                        />
                        <button onClick={handleUpdatePassword}>Mettre à jour le mot de passe</button>
                    </div>
                    <div>
                        <h2>Modifier le nom</h2>
                        <input
                            type="text"
                            placeholder="Nouveau prénom"
                            value={newFirstName}
                            onChange={(e) => setNewFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Nouveau nom de famille"
                            value={newLastName}
                            onChange={(e) => setNewLastName(e.target.value)}
                        />
                        <button onClick={handleUpdateName}>Mettre à jour le nom</button>
                    </div>
                    <div>
                        <h2>Modifier l'image de profil</h2>
                        <input type="file" onChange={handleFileChange} />
                        <button onClick={handleClick}>Télécharger l'image de profil</button>
                    </div>
                </div>
            ) : (
                <p>Veuillez vous connecter pour accéder à votre profil.</p>
            )}
        </div>
    );
};

export default ProfilePage;
