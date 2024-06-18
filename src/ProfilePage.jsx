import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from './firebase';
import Navbar from './Navbar';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import { getAuth, updateProfile } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import Logout from './Logout';
import axios from 'axios';
import { set } from 'firebase/database';


const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const [error, setError] = useState(null);
    const [isGoogleProvider, setIsGoogleProvider] = useState(false);
    const [profileImageUrl, setProfileImageUrl] = useState(null);
    const [newProfileImage, setNewProfileImage] = useState(null);
    const navigate = useNavigate();
    const [pseudoNG, setPseudoNG] = useState('');
    const [pseudong, setPseudong] = useState('');
    const [playerCount, setPlayerCount] = useState(null);
    const [infoplayer, setInfoplayer] = useState(null);
    const url = 'https://apinationscomu.onrender.com/';
    const [latestConnection , setLatestConnection] = useState(0);
    const [latestServer , setLatestServer] = useState('');
    const [country, setCountry] = useState('');
    const [countryRank, setCountryRank] = useState('');
    const [power, setPower] = useState(0);
    const [powermax, setPowermax] = useState(0);
    const [description, setDescription] = useState('');

    async function fetchData() {
        const db = getFirestore();
    
        if (user) { // Vérifiez si l'utilisateur est connecté
            const docRef = doc(db, "users", user.uid);
        
            const docSnap = await getDoc(docRef);
        
            if (docSnap.exists()) {
                setPseudoNG(docSnap.data().pseudong);
            } 
        } 
    }
    fetchData();
    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const response = await axios.get(`${url}user?player=${pseudoNG}`);
                setInfoplayer(response.data);

                // Extract server data and find the one with the latest connection
                let latestConn = new Date(0); // Initialize to the earliest possible date
                let latestSrv = '';

                if (response.data.servers) { // Ensure servers data is present
                    for (const [server, details] of Object.entries(response.data.servers)) {
                        if (details.last_connection) {
                            const serverLastConn = new Date(details.last_connection);
                            if (serverLastConn > latestConn) {
                                latestConn = serverLastConn;
                                latestSrv = server;
                            }
                        }
                    }

                    setLatestConnection(latestConn);
                    setLatestServer(latestSrv);

                    // Access the country and country_rank of the latest server
                    if (latestSrv && response.data.servers[latestSrv]) {
                        setCountry(response.data.servers[latestSrv].country || 'pas de pays');
                        setCountryRank(response.data.servers[latestSrv].country_rank || '');
                        setPower(response.data.servers[latestSrv].power || 0);
                        setPowermax(response.data.servers[latestSrv].max_power || 0);
                        setDescription(response.data.description || 'pas de description');

                    }
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [pseudoNG, url]);

    useEffect(() => {
        axios.get(url+'playercount').then(response => {
            setPlayerCount(response.data);
        });
        }, []);
    const totalPlayers = playerCount ? Object.values(playerCount).reduce((total, server) => {
        return total + (server.players > -1 ? server.players : 0);
    }, 0) : 0;

    


    

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                setIsGoogleProvider(user.providerData.some(provider => provider.providerId === 'google.com'));
            } else {
                setUser('');
                navigate('/nationglorycomu/Auth');
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleUpdatePseudo = async () => {
        try {
            const db = getFirestore();
            await setDoc(doc(db, "users", user.uid), { pseudong: pseudong }, { merge: true });
            console.log('Pseudo NG mis à jour avec succès !');
            location.reload();
        } catch (error) {
            setError(error.message);
            console.error(error.message);
        }
    };

    const handleLinkGoogleAccount = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await firebase.auth().currentUser.linkWithPopup(provider);
            console.log('Compte Google lié avec succès !');
            setIsGoogleProvider(true);
            location.reload();
        } catch (error) {
            setError(error.message);
            console.error(error.message);
        }
    };

    const handleUpdateEmail = async () => {
        try {
            await firebase.auth().currentUser.updateEmail(newEmail);
            console.log('Adresse email mise à jour avec succès !');
            location.reload();
        } catch (error) {
            setError(error.message);
            console.error(error.message);
        }
    };

    const handleUpdatePassword = async () => {
        try {
            if (newPassword !== confirmNewPassword) {
                setError('Les mots de passe doivent correspondre.');
                return;
            }
            await firebase.auth().currentUser.updatePassword(newPassword);
            console.log('Mot de passe mis à jour avec succès !');
            location.reload();
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
            location.reload();
        } catch (error) {
            setError(error.message);
            console.error(error.message);
        }
    };

    const handleFileChange = (event) => {
        setNewProfileImage(event.target.files[0]);
    };

    const handleClick = async () => {
        try {
            if (newProfileImage) {
                const imgRef = ref(firebase.storage(), `profiles/${uuidv4()}`);
                const snapshot = await uploadBytes(imgRef, newProfileImage);
                console.log(snapshot);

                const url = await getDownloadURL(snapshot.ref);
                setProfileImageUrl(url);

                const auth = getAuth();
                const user = auth.currentUser;
                if (user) {
                    await updateProfile(user, { photoURL: url });

                    const db = getFirestore();
                    await setDoc(doc(db, "users", user.uid), { photoURL: url }, { merge: true });

                    location.reload();
                } else {
                    console.error('Utilisateur non connecté');
                }
            }
        } catch (error) {
            console.error('Erreur lors du téléchargement de l\'image de profil :', error);
        }
    };

    const photoORI = "https://firebasestorage.googleapis.com/v0/b/nationsglory-62812.appspot.com/o/Prendre%20sa%20sant%C3%A9%20en%20main%20n%E2%80%99a%20jamais%20%C3%A9t%C3%A9%20aussi%20simple.jpg?alt=media&token=dc085ed1-9a30-4dc8-92cc-ad7eaa8a840c";


    
    return (
        <div>
            <Navbar />
            <h1>Profil de l'utilisateur</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {user ? (
                <div>
                    <h2>Informations de l'utilisateur</h2>
                    <img src={user.photoURL || photoORI} alt="Image de profil" />
                    <p>Prénom: {user.displayName.split(' ')[0]}</p>
                    <p>Nom: {user.displayName.split(' ')[1]}</p>
                    <p>Email: {user.email}</p>
                    <p>Pseudo NG: {pseudoNG}</p>
                    <h2>Informations de nationsglory</h2>
                    <div>
                        Nombre total de joueurs connectés : {totalPlayers}<br/>
                        {playerCount && (
                        <select>
                            {Array.from({length: 17}, (_, i) => (
                            <option key={i} value={playerCount[i] && playerCount[i].name}>
                                Nombre de connecter sur {playerCount[i] && playerCount[i].name} : {playerCount[i] ? (playerCount[i].players == -1 ? 0 : playerCount[i].players) : null}
                            </option>
                            ))}
                        </select>
                        )}
                    </div>
                    <div>
                        description : {description}<br/>
                        server : {latestServer}<br/>
                        dernier connection au server : {latestConnection.toLocaleString()}<br/>
                        pays : {country}<br/>
                        rang dans le pays : {countryRank}<br/>
                        power : {power} / {powermax}
                        
                    </div>
                    <h2>connection a google</h2>
                    <div>
                    {isGoogleProvider ? (
                        <p>Connecté avec Google</p>
                    ) : (
                        <button onClick={handleLinkGoogleAccount}>Lier un compte Google</button>
                    )}
                    </div>
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
                    <div>
                    <h2>Modifier le pseudo NG</h2>
                    <input
                        type="text"
                        placeholder="Pseudo NG"
                        value={pseudong}
                        onChange={(e) => setPseudong(e.target.value)}
                    />
                    <button onClick={handleUpdatePseudo}>Mettre à jour le pseudo NG</button>
                    </div>

                    <div>
                        <Logout />
                    </div>
                    
                    
                </div>
            ) : (
                <p>Veuillez vous connecter pour accéder à votre profil.</p>
            )}
        </div>
    );
};

export default ProfilePage;
