import React, { useState } from 'react';
import firebase from '../../../senssible/firebase';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pseudong, setPseudong] = useState('');

  const handleSignup = async () => {
    setError('');
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    setIsLoading(true);
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);

        // Vérifiez si l'image de profil existe
        if (profileImage) {
          // Référence de stockage Firebase
          const storageRef = firebase.storage().ref();
          // Référence spécifique pour l'image de profil de l'utilisateur
          const profileImageRef = storageRef.child(`profiles/${userCredential.user.uid}`);
          
          // Téléchargez l'image de profil
          await profileImageRef.put(profileImage);
          // Obtenez l'URL de téléchargement de l'image de profil
          const profileImageUrl = await profileImageRef.getDownloadURL();
      
          // Mettre à jour le profil de l'utilisateur avec le nom et l'URL de l'image de profil
          await userCredential.user.updateProfile({
            displayName: `${firstName} ${lastName}`,
            photoURL: profileImageUrl,
          });
      
          // Enregistrez les informations de l'utilisateur dans Firestore
          await firebase.firestore().collection('users').doc(userCredential.user.uid).set({
            firstName: firstName,
            lastName: lastName,
            email: email,
            photoURL: profileImageUrl,
            pseudong : pseudong,
            
          });
      
          console.log('Profil utilisateur mis à jour avec succès.');
        } else {
          // Si aucune image de profil n'est fournie, mettez à jour seulement les informations de base
          await userCredential.user.updateProfile({
            displayName: `${firstName} ${lastName}`,
          });
      
          await firebase.firestore().collection('users').doc(userCredential.user.uid).set({
            firstName: firstName,
            lastName: lastName,
            email: email,
            pseudong : pseudong,
          });
        }
    console.log('Inscription réussie !');
    //redirection vers la page de profil
    window.location.href = '/nationglorycomu/';
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setIsLoading(true);
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);

      const email = result.user.email;
      const { given_name, family_name } = result.additionalUserInfo.profile;

      const profileImageUrl = result.user.photoURL || 'https://firebasestorage.googleapis.com/v0/b/nationsglory-62812.appspot.com/o/Prendre%20sa%20sant%C3%A9%20en%20main%20n%E2%80%99a%20jamais%20%C3%A9t%C3%A9%20aussi%20simple.jpg?alt=media&token=dc085ed1-9a30-4dc8-92cc-ad7eaa8a840c';

      await firebase.firestore().collection('users').doc(result.user.uid).set({
        firstName: given_name,
        lastName: family_name,
        email: email,
        photoURL: profileImageUrl,
      });

      console.log('Inscription avec Google réussie !');
      window.location.href = '/nationglorycomu/';
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Prénom"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nom"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Adresse email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirmer le mot de passe"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setProfileImage(e.target.files[0])}
      />
      <input
        type="text"
        placeholder="Pseudong"
        value={pseudong}
        onChange={(e) => setPseudong(e.target.value)}
      />
      <button onClick={handleSignup} disabled={isLoading}>S'inscrire</button>
      <button onClick={handleGoogleSignup} disabled={isLoading}>S'inscrire avec Google</button>
    </div>
  );
};

export default Signup;
