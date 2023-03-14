import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

function Logout() {
  useEffect(() => {
    localStorage.removeItem('user');
  }, []);

  return <Redirect to="/" />;
}

export default Logout;
