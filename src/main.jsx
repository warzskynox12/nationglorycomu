import React, { Children } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthPage from './AuthPage';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';

const router = createBrowserRouter([
  { 
    path: '/nationglorycomu/', 
    element: <HomePage />,
    Children:[
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
)
