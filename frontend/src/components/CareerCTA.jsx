import { Link } from "react-router-dom";

import "../styles/CareerCTA.css";

const CareerCTA = () => {
  return (
    <section className="career-cta">
      <div className="career-cta-container">
        <div className="career-cta-label">
          <span></span>
          CAREERS
        </div>

        <div className="career-cta-content">
          <h2>
            Build something
            <br />
            <span>meaningful with us.</span>
          </h2>

          <div className="career-cta-right">
            <p>
              We're always looking for people who are curious, creative and
              excited about building what's next.
            </p>

            <Link to="/career" className="career-cta-button">
              Explore Careers
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCTA;