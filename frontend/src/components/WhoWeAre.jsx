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
              Grosslead Media Private Limited is a next-generation digital marketing company specializing in programmatic advertising and high-quality lead generation. We focus on performance, and transparency, helping businesses achieve scalable growth through media buying and AI-driven campaign optimization.


            </p>

            <p>
             We connect advertisers with a vast network of ad exchanges and direct sites through our advanced media buying team, ensuring high-intent leads and maximum ROI.
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