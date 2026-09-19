import { Link } from "react-router-dom";

import "../styles/WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <section className="who-section">
      <div className="who-container">
        <div className="who-label">
          <span></span>
          WHO WE ARE
        </div>

        <div className="who-content">
          <div className="who-heading">
            <h2>
              We turn ideas into
              <span> digital experiences.</span>
            </h2>
          </div>

          <div className="who-text">
            <p>
              Grosslead Media is a digital and technology-focused company
              helping businesses build meaningful experiences in the digital
              world.
            </p>

            <p>
              From creative ideas to technology-driven solutions, we focus on
              understanding the problem first and then building solutions that
              are simple, useful and impactful.
            </p>

            <Link to="/about" className="who-link">
              More About Us
              <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="who-bottom-line">
          <div>
            <strong>01</strong>
            <span>Ideas</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Technology</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Growth</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;