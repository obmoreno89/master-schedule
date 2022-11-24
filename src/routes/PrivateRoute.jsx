import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');

  console.log(token);

  if (!token) {
    return <Navigate to='/master-schedule/signin' />;
  }
  return children;
}

export default PrivateRoute;
