// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css'; // Importing CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>Give food to people in need </p>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i> 123-456-7890</span>
                        <span><i className="fas fa-envelope"></i> fooddonation.com</span>
                    </div>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Donation</a></li>
                        <li><a href="#">History</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h2>Follow Us</h2>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Let's give food to people in need.
            </div>
        </footer>
    );
};

export default Footer;