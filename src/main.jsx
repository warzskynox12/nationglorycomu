import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import AuthPage from './AuthPage';
import Logout from './Logout';
import ProfilePage from './ProfilePage';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/nationglory/" element={<App />} />
        <Route path="/nationglory/AuthPage" element={<AuthPage />} />
        <Route path="/nationglory/logout" element={<Logout />} />
        <Route path="/nationglory/ProfilePage" element={<ProfilePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);