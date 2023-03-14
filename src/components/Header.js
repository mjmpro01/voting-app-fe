import React from 'react';
import { Link } from 'react-router-dom';

function Header({ onLogout }) {
  return (
    <div className="header">
      <Link to="/dashboard">Dashboard</Link>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Header;
