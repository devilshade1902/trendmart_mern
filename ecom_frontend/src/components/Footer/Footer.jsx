import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Website Name/Logo */}
          <div className="footer-section footer-brand">
            <h2 className="footer-logo">Trend Mart</h2>
            <p className="footer-description">Your one-stop shop for fashion, electronics, and more.</p>
          </div>

          {/* Social Icons */}
          <div className="footer-section footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Trend Mart on Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Trend Mart on Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Trend Mart on Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Trend Mart on LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* About */}
          <div className="footer-section footer-links">
            <h3>About</h3>
            <ul>
              <li><a href="#our-story">Our Story</a></li>
              <li><a href="#mission">Mission</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
            </ul>
          </div>

          {/* Help & Customer Support */}
          <div className="footer-section footer-links">
            <h3>Help</h3>
            <ul>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#support-center">Support Center</a></li>
              <li><a href="#returns">Returns</a></li>
            </ul>
          </div>

          {/* Account */}
          <div className="footer-section footer-links">
            <h3>Account</h3>
            <ul>
              <li><a href="#my-account">My Account</a></li>
              <li><a href="#sign-in">Sign In</a></li>
              <li><a href="#register">Register</a></li>
            </ul>
          </div>

          {/* Order */}
          <div className="footer-section footer-links">
            <h3>Order</h3>
            <ul>
              <li><a href="#track-order">Track Order</a></li>
              <li><a href="#order-history">Order History</a></li>
            </ul>
          </div>

          {/* Payments */}
          <div className="footer-section footer-links">
            <h3>Payments</h3>
            <ul>
              <li><a href="#payment-options">Payment Options</a></li>
              <li><a href="#secure-payments">Secure Payments</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-links">
            <a href="#terms">Terms & Conditions</a>
            <span>|</span>
            <a href="#privacy">Privacy Policy</a>
          </div>
          <p>© {new Date().getFullYear()} Trend Mart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;