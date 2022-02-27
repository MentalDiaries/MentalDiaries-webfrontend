import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({username:"dfas"});

  useEffect(() => {
    // TODO: Auth logic
    //  IF user session or not
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
