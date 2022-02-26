import React from 'react';
import './Login.css';
import { AccountBox } from './Login-src/accountBox';
const Login = () => {
  return (
    <div className="modal">
      <div className="login">
        <AccountBox />
      </div>
    </div>
  );
};

export default Login;
