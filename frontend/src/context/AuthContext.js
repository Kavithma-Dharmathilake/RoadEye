import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(
    () => JSON.parse(localStorage.getItem('authTokens')) || null
  );
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem('user')) || null
  );

  const loginUser = (token, userData) => {
    setAuthTokens(token);
    setUser(userData);
    localStorage.setItem('authTokens', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ authTokens, user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
