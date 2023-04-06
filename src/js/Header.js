import React, { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

function MainHeader(props) {
  const user = JSON.parse(localStorage.getItem('user'));
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('user');
    // TODO: Implement logout functionality
  }

  return (
    <header className="main-header">
      <div className="logo">
        <img src="https://coderslabkosova.com/blocks/MainHeader/logoCLen.svg" />
      </div>
      <ul className="main-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/prices">Prices</Link></li>
        <li><Link to="#about">About us</Link></li>
        <li><Link to="#contact">Contact</Link></li>
        <li>{user && <Link to="/dashboard">My Profile</Link>}</li>
        <li>{!user && <Link to="/login">Login</Link>}</li>
        <li>{user && <Link to="/login" onClick={handleLogout}>Logout</Link>}</li>
      </ul>
      <Outlet/>
    </header>
  );
}

export default MainHeader;
