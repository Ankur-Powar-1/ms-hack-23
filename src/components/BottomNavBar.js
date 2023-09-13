import React from 'react';
import './BottomNavBar-Style.css'
import { Link } from 'react-router-dom'; // If you're using React Router

const BottomNavBar = (props) => {
  return (
    <div className="bottom-navbar">
        <Link to="/" className="nav-item">Feed</Link>
        <Link to="/option2" className="nav-item">Community</Link>
        <Link to="/option3" className="nav-item">Mentor</Link>
        <Link to="/option4" className="nav-item">Market</Link>
    </div>
  );
};

export default BottomNavBar;
