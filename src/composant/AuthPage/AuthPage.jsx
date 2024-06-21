import React, { useState } from 'react';
import Signup from './signup/signup';
import Login from './login/login';
import Navbar from '../Navbar/Navbar';


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <Navbar />
      {isLogin ? <Login /> : <Signup />}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "S'inscrire" : "Se connecter"}
      </button>
    </div>
  );
};

export default AuthPage;
