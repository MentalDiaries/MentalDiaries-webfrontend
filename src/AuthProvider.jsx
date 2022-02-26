import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [allDiaries, setAllDiaries] = useState([]);
  useEffect(() => {
    // TODO: Auth logic
    const username = localStorage.getItem('username');
    const refreshToken = localStorage.getItem('refreshToken');
    const accessToken = localStorage.getItem('accessToken');
    if (!username || !refreshToken || !accessToken) return;
    console.log(username);
    // If the user info is available in the localStorage.
    setUser({ username, refreshToken, accessToken });
    //  IF user session or not
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser, allDiaries, setAllDiaries }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
