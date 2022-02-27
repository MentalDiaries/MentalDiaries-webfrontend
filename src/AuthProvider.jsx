import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({username:"dfas"});

  useEffect(() => {
    // TODO: Auth logic
    const username = localStorage.getItem('username');
    if (!username) return;
    refreshToken = localStorage.getItem('refreshToken');
    accessToken = localStorage.getItem('accessToken');
    setUser({ username, refreshToken, accessToken });
    //  IF user session or not
  }, []);
  return (
    <AuthContext.Provider value={(user, setUser)}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
