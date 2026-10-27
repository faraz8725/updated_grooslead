



import { useEffect, useState } from "react";

import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import API_URL from "../config/api";

import "../styles/CEOMessage.css";

const CEOMessage = () => {
  const [ceo, setCEO] = useState(null);

  useEffect(() => {
    const fetchCEO = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/ceo`
        );

        const data = await response.json();

        if (response.ok) {
          setCEO(data);
        }
      } catch (error) {
        console.error(
          "Error fetching CEO:",
          error
        );
      }
    };

    fetchCEO();
  }, []);

  if (!ceo) {
    return null;
  }

  return (
    <div className="ceo-section">

      <div className="ceo-image-wrapper">
        <div className="ceo-image-frame">
          <img
            src={ceo.image}
            alt={ceo.name}
            className="ceo-image"
          />
        </div>
      </div>

      <div className="ceo-content">

        <div className="ceo-label">
          <span></span>
          FROM THE CEO
        </div>

        <div className="ceo-quote-mark">
          “
        </div>

        <h3>
          {ceo.thoughtTitle}
        </h3>

        {ceo.messageOne && (
          <p className="ceo-message-text">
            {ceo.messageOne}
          </p>
        )}

        {ceo.messageTwo && (
          <p className="ceo-message-text">
            {ceo.messageTwo}
          </p>
        )}

        <div className="ceo-signature">

          <div className="ceo-name-box">
            <strong>
              {ceo.name}
            </strong>

            <span>
              {ceo.designation}
            </span>
          </div>

          <Link
            to="/team"
            className="ceo-team-link"
          >
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