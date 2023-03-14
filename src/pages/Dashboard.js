import React from 'react';
import { useNavigate  } from 'react-router-dom';

function Dashboard() {
  const navigate  = useNavigate ();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
