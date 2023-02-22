import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateGantt({ children }) {
  const token = sessionStorage.getItem('token');
  const saved = sessionStorage.getItem('saved');

  if (token && saved) {
    return (
      <Navigate
        // //to='master-shedule/'
        to='/mp-pro/gantt/group'
      />
    );
  }
  return children;
}

export default PrivateGantt;
