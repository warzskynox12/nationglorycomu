import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import AuthPage from './AuthPage';
import ProfilePage from './ProfilePage';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/nationglorycomu/" element={<App />} />
        <Route path="/nationglorycomu/AuthPage" element={<AuthPage />} />
        <Route path="/nationglorycomu/ProfilePage" element={<ProfilePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);