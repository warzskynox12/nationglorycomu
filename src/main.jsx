import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; // Correction ici
import AuthPage from './composant/AuthPage/AuthPage';
import ProfilePage from './composant/profiles/ProfilePage';
import HomePage from './composant/HomePage/HomePage'; 
import App from './App';

const router = createBrowserRouter([
  { 
    path: '/nationglorycomu/', 
    element: <App />,
    children: [
      {
        path: '', // Correction ici
        element: <HomePage />
      },
      { 
        path: 'auth', // Correction ici
        element: <AuthPage />
      },
      { 
        path: 'profile', // Correction ici
        element: <ProfilePage /> 
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);