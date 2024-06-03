import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './AuthPage';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';

const App = () => {
  return (
    <Router basename="/nationglorycomu">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AuthPage" element={<AuthPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
