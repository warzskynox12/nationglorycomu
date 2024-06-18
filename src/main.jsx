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
        path: '/nationglorycomu/', // Change this line
        element: <HomePage />
      },
      { 
        path: '/nationglorycomu/auth', // And this line
        element: <AuthPage />
      },
      { 
        path: '/nationglorycomu/profile', // And this line
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
