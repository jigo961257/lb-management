import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext<{
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: {children: React.ReactNode}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); 
  
    const login = () => {
      // Implement your login logic here (e.g., API call, token storage)
      setIsAuthenticated(true);
    };
  
    const logout = () => {
      // Implement your logout logic here (e.g., clear tokens)
      setIsAuthenticated(false);
    };
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => {
    return useContext(AuthContext);
  };