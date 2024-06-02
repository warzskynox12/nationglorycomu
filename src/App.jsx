import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './AuthPage';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/nationglorycomu/" element={<HomePage />} />
        <Route path="/nationglorycomu/AuthPage" element={<AuthPage />} />
        <Route path="/nationglorycomu/ProfilePage" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;