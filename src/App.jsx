import React, { Children } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

