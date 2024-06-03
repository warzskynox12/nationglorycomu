import React from 'react';
import AuthPage from './AuthPage';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/AuthPage" element={<AuthPage />} /> 
        <Route path="/ProfilePage" element={<ProfilePage />} /> 
      </Routes>
    </Router>
  );
};

root.render(<App />);

export default App;