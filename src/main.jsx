import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import AuthPage from './AuthPage';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage'; 
import App from './App';

const router = createBrowserRouter([
  { 
    path: '/nationglorycomu/', 
    element: <App />,
    children: [
      {
        path: '/nationglorycomu/',
        element: <HomePage />
      },
      { 
        path: '/nationglorycomu/auth', 
        element: <AuthPage />
      },
      { 
        path: '/nationglorycomu/profile', 
        element: <ProfilePage /> 
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
