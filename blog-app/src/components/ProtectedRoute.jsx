import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// wrapper component to protect routes that need login
// basically if you're not logged in, it kicks you to the login page
export function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  // not logged in? bye bye, go to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // logged in? u get in
  return children;
}