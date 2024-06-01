import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Assurez-vous d'importer BrowserRouter et Routes
import HomePage from './HomePage';
import AuthPage from './AuthPage';
import Logout from './Logout';
import ProfilePage from './ProfilePage';


const App = () => {
  return (
    <Router> {/* Enveloppez votre application dans le composant Router */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AuthPage" element={<AuthPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;