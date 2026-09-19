import { Link } from "react-router-dom";

import "../styles/About.css";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-label">
            <span></span>
            ABOUT GROSSLEAD
          </div>

          <h1>
            Ideas that create
            <br />
            <span>impact.</span>
          </h1>

          <p>
            We bring together creativity, technology and strategy to help
            businesses create meaningful digital experiences.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-container">
          <div className="about-section-label">
            <span></span>
            OUR STORY
          </div>

          <div className="about-story-grid">
            <h2>
              We believe great
              <br />
              <span>digital experiences</span>
              <br />
              start with understanding.
            </h2>

            <div className="about-story-text">
              <p>
                Every business has a unique challenge. We take the time to
                understand that challenge before thinking about the solution.
              </p>

              <p>
                Our approach combines thoughtful design, modern technology and
                practical thinking to create digital experiences that are
                useful, scalable and built around real business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-container">
          <div className="about-section-label">
            <span></span>
            WHAT DRIVES US
          </div>

          <div className="about-values-grid">
            <div className="about-value">
              <span>01</span>
              <h3>Curiosity</h3>
              <p>
                We keep learning, exploring and looking for better ways to
                solve problems.
              </p>
            </div>

            <div className="about-value">
              <span>02</span>
              <h3>Creativity</h3>
              <p>
                We look beyond the obvious to create experiences that feel
                purposeful and distinctive.
              </p>
            </div>

            <div className="about-value">
              <span>03</span>
              <h3>Technology</h3>
              <p>
                We use modern technology to turn ideas into reliable digital
                solutions.
              </p>
            </div>

            <div className="about-value">
              <span>04</span>
              <h3>Growth</h3>
              <p>
                We build with the future in mind so solutions can evolve as
                businesses grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-container">
          <h2>
            Have an idea?
            <br />
            <span>Let's build it.</span>
          </h2>

          <Link to="/contact" className="about-cta-button">
            Start a Conversation
            <span>↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;