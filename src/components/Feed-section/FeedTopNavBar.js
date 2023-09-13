import React from 'react';
import './TopNavBar-Style.css'
import { Link } from 'react-router-dom'; // If you're using React Router

const TopNavBar = () => {
  return (
    <div className="top-navbar">
        <Link to="/hot" className="nav-item">HOT</Link>
        <Link to="/success" className="nav-item">SUCCESS</Link>
        <Link to="/community" className="nav-item">COMMUNITY</Link>
    </div>
  );
};

export default TopNavBar;
