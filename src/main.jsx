import React from 'react';
import ReactDOM from 'react-dom/client'; // Modifier l'importation ici
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // Créer une racine

root.render( // Utiliser `render` sur l'instance de la racine
  <BrowserRouter>
    <App />
  </BrowserRouter>
);