import React from 'react';
import './components.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>Pet Heaven is a charity society dedicated to the welfare of abandoned pets.</p>
                    <p>Our mission is to provide shelter, care, and love to pets that have been left behind and to find them new forever homes.</p>   
                </div>
                <div className="footer-section">
                <h3>Contact Us</h3>
                <p>Tel: <a href="tel:+6598237832">+65 9823 7832</a></p>
                <p>Email: <a onClick={() => window.location = 'mailto:yourmail@domain.com'}>petHaven@zmail.com</a></p>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} Pet Haven. All rights reserved.</p>
            </div>
            
        </footer>
    )
  };
  
  export default Footer;