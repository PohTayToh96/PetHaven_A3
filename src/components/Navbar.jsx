import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';
import Logo from '../../public/images/logo.png';

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/"><img src={Logo} alt="logo" className='logo'/><h2 className="navbar">Pet Haven</h2></Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/adoption">Adoption</Link></li>
          {isLoggedIn && <li><Link to="/release">Release</Link></li>}
          <li><Link to="/where">Where to find us</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
          {!isLoggedIn && <li><Link to="/signup">Sign Up</Link></li>}
          {isLoggedIn && (
            <li>
              <button onClick={onLogout} className="logout-button">Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
