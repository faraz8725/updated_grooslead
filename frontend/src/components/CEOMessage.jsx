
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import "../styles/CEOMessage.css";

const CEOMessage = () => {
  return (
    <div className="ceo-section">

      {/* CEO PHOTO */}
      <div className="ceo-image-wrapper">
        <div className="ceo-image-frame">
          <img
            src="/team/ceo.jpg"
            alt="CEO of Grosslead Media"
            className="ceo-image"
          />
        </div>
      </div>

      {/* CEO CONTENT */}
      <div className="ceo-content">

        <div className="ceo-label">
          <span></span>
          FROM THE CEO
        </div>

        <div className="ceo-quote-mark">
          “
        </div>

        <h3>
          We don't just build
          <span> digital solutions.</span>
          <br />
          We build opportunities.
        </h3>

        <p className="ceo-message-text">
          At Grosslead, we believe that meaningful growth begins with
          meaningful ideas. Our vision is to combine technology, data and
          creativity to help businesses reach the right audience and create
          lasting digital impact.
        </p>

        <p className="ceo-message-text">
          We are building a culture where people think boldly, move quickly
          and continuously learn. Every challenge is an opportunity to create
          something better, smarter and more valuable.
        </p>

        <div className="ceo-signature">

          <div className="ceo-name-box">
            <strong>CEO NAME</strong>
            <span>CEO & Founder, Grosslead Media Private Limited</span>
          </div>

          <Link to="/team" className="ceo-team-link">
            <span>OUR TEAM</span>

            <strong>
              <ArrowUpRight size={19} />
            </strong>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default CEOMessage;




