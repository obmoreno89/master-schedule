import React from 'react';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const token = sessionStorage.getItem('token');

  if (token) {
    return <Navigate to='master-shedule/' />;
  }
  return children;
}

export default PublicRoute;
