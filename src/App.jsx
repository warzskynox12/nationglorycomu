import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthPage from './AuthPage';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';



const App = () => {
  return (
    //utilise BrowserRouter
    <BrowserRouter>
      <div>
        <HomePage />
        <AuthPage />
        <ProfilePage />
      </div>
    </BrowserRouter>

  );
};

export default App;