import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './globalCss/var.css';
import './globalCss/index.css';
import AuthProvider from './AuthProvider';
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
