import { Link } from "react-router-dom";

import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-tag">
            <span></span>
            Programmatic Precision,Performance Delivered.
          </div>

          <h1>
            We Build Digital
            <br />
            <span>Experiences</span>
            <br />
            That Move Businesses
            <br />
            Forward.
          </h1>

          <p>
            We help businesses turn ideas into meaningful digital experiences
            through technology, creativity and smart solutions.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="hero-primary-btn">
              Let's Work Together
              <span>↗</span>
            </Link>

            <Link to="/about" className="hero-secondary-btn">
              Discover Grosslead
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>
          <div className="hero-orbit orbit-three"></div>

          <div className="hero-center">
            <span>G</span>
          </div>

          <div className="hero-floating-card card-one">
            <small>IDEAS</small>
            <strong>→</strong>
          </div>

          <div className="hero-floating-card card-two">
            <small>DESIGN</small>
            <strong>+</strong>
          </div>

          <div className="hero-floating-card card-three">
            <small>TECH</small>
            <strong>×</strong>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;