import { Link } from "react-router-dom";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-line"></div>

      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span>GROSS</span>
            <strong>LEAD</strong>
          </Link>

          <p>
            Building meaningful digital experiences that help businesses
            connect, grow and move forward.
          </p>

          <div className="footer-socials">
            <a hrf="#" aria-label="Instagram">
              
            </a>

            <a hrf="#" aria-label="LinkedIn">
              
            </a>
          </div> 
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-column">
          <h3>Services</h3>

          <span>Explore Our Services</span>
          <span>Digital Solutions</span>
          <span>Technology Solutions</span>
        </div>

        <div className="footer-column footer-contact">
          <h3>Get In Touch</h3>

          <div className="footer-contact-item">
            <span>✉</span>
            <span>business.grosslead@gmail.com</span>
          </div>

          <div className="footer-contact-item">
            <span>☎</span>
            <span>+91 ***********</span>
          </div>

          <div className="footer-contact-item">
            <span>⌖</span>
            <span>India</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Grosslead Media. All rights reserved.
        </p>

        <div>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;