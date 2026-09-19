import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/ServicesSection.css";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Backend/API will be connected here later.
    // Services added from Admin Panel will be displayed here.
  }, []);

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <div className="services-label">
            <span></span>
            WHAT WE DO
          </div>

          <div className="services-heading-row">
            <h2>
              Solutions built
              <br />
              <span>for what's next.</span>
            </h2>

            <p>
              We combine creativity, technology and strategy to create digital
              solutions that help businesses move forward.
            </p>
          </div>
        </div>

        {services.length > 0 ? (
          <div className="services-grid">
            {services.map((service, index) => (
              <Link
                to={`/services/${service.slug}`}
                className="service-item"
                key={service._id || service.id || index}
              >
                <div className="service-item-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="service-item-content">
                  <h3>{service.title || service.name}</h3>

                  {service.description && (
                    <p>{service.description}</p>
                  )}
                </div>

                <div className="service-item-arrow">↗</div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="services-empty">
            <div className="services-empty-number">+</div>

            <div>
              <h3>Our Services</h3>
              <p>
                Our digital solutions will appear here as they are added
                through the admin panel.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;