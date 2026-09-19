import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Career.css";

const Career = () => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    // Backend/API will be connected here later.
    // Career openings added from Admin Panel will appear here.
  }, []);

  return (
    <div className="career-page">
      <section className="career-hero">
        <div className="career-container">
          <div className="career-label">
            <span></span>
            JOIN GROSSLEAD
          </div>

          <h1>
            Build your
            <br />
            <span>next chapter.</span>
          </h1>

          <p>
            Work with curious minds, creative thinkers and technology
            enthusiasts who enjoy building things that matter.
          </p>
        </div>
      </section>

      <section className="career-openings">
        <div className="career-container">
          <div className="career-section-label">
            <span></span>
            OPEN POSITIONS
          </div>

          {careers.length > 0 ? (
            <div className="career-list">
              {careers.map((career, index) => (
                <div
                  className="career-item"
                  key={career._id || career.id || index}
                >
                  <span className="career-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="career-info">
                    <h2>{career.title || career.name}</h2>

                    {career.description && (
                      <p>{career.description}</p>
                    )}
                  </div>

                  <span className="career-arrow">↗</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="career-empty">
              <div className="career-empty-symbol">+</div>

              <div>
                <h2>New opportunities are coming.</h2>
                <p>
                  There are currently no public openings. Check back soon for
                  new opportunities at Grosslead.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="career-bottom">
        <div className="career-container">
          <h2>
            Don't see your role?
            <br />
            <span>Let's still talk.</span>
          </h2>

          <Link to="/contact" className="career-button">
            Get In Touch
            <span>↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Career;