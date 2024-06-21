import React, { useState, useEffect } from 'react';
import firebase from '../../senssible/firebase';
import Navbar from '../Navbar/Navbar';


  
const App = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
          if (user) {
              setUser(user); 
          } else {
               setUser(null); 
          }
      });
      return () => unsubscribe();
  }, []);


  const firstName = user ? user.displayName.split(' ')[0] : '';

  return (
    <div>
        <Navbar />
        <div>
            <h1>Welcome to the Home Page! {firstName}</h1>
        </div>
  </div>
  );
};

export default App;