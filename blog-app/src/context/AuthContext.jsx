import React, { createContext, useContext, useState, useEffect } from 'react';

// basically just making a context so we can check if someone's logged in anywhere in the app
const AuthContext = createContext();

export function AuthProvider({ children }) {
  // checking if they were already logged in before (like if they refresh the page)
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedAuth = localStorage.getItem('isAuthenticated');
    return savedAuth === 'true';
  });

  // whenever login status changes, save it so we remember next time
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  // pretty self explanatory lol
  const login = () => {
    setIsAuthenticated(true);
  };

  // logs you out
  const logout = () => {
    setIsAuthenticated(false);
  };

  // bundling everything together to pass down to components
  const value = {
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// custom hook so we can use auth stuff in any component
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    // if someone tries to use this outside the provider, send this
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}