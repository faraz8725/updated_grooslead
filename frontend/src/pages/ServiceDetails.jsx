/*import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { slug } = useParams();

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "160px 30px 80px",
      }}
    >
      <h1>Service</h1>

      <p style={{ marginTop: "15px", color: "#ffc107" }}>
        {slug}
      </p>
    </section>
  );
};

export default ServiceDetails;  */


import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import API_URL from "../config/api";
import "../styles/ServiceDetails.css";

const ServiceDetails = () => {
  const { slug } = useParams();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_URL}/api/services/${slug}`
        );

        const data = await response.json();

        if (response.ok) {
          setService(data);
        } else {
          setError(data.message || "Service not found.");
        }
      } catch (error) {
        console.error("Error fetching service:", error);
        setError("Unable to load service.");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [slug]);

  if (loading) {
    return (
      <div className="service-details-page">
        <div className="service-details-container">
          <div className="service-details-loading">
            Loading service...
          </div>
        </div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="service-details-page">
        <div className="service-details-container">
          <div className="service-details-error">
            <h1>Service Not Found</h1>

            <p>
              {error || "The requested service could not be found."}
            </p>

            <Link to="/" className="service-back-button">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="service-details-page">
      {/* HERO */}
      <section className="service-details-hero">
        <div className="service-details-container">
          <div className="service-details-label">
            <span></span>
            OUR SERVICE
          </div>

          <h1>{service.title || service.name}</h1>

          {service.description && (
            <p className="service-details-description">
              {service.description}
            </p>
          )}
        </div>
      </section>

      {/* IMAGE */}
      {service.image && (
        <section className="service-details-image-section">
          <div className="service-details-container">
            <div className="service-details-image-wrapper">
              <img
                src={service.image}
                alt={service.title || "Service"}
                className="service-details-image"
              />
            </div>
          </div>
        </section>
      )}

      {/* FULL CONTENT */}
      <section className="service-details-content-section">
        <div className="service-details-container">
          <div className="service-details-content-grid">
            <div className="service-details-content-label">
              <span></span>
              ABOUT THIS SERVICE
            </div>

            <div className="service-details-content">
              {service.content ? (
                <div className="service-content-text">
                  {service.content.split("\n").map((paragraph, index) =>
                    paragraph.trim() ? (
                      <p key={index}>{paragraph}</p>
                    ) : null
                  )}
                </div>
              ) : (
                <p>
                  More information about this service will be available
                  soon.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE INFORMATION */}
      <section className="service-details-info-section">
        <div className="service-details-container">
          <div className="service-details-info">
            <div>
              <span>Service</span>
              <strong>{service.title || service.name}</strong>
            </div>

            {service.status && (
              <div>
                <span>Status</span>
                <strong>{service.status}</strong>
              </div>
            )}

            {service.slug && (
              <div>
                <span>Slug</span>
                <strong>{service.slug}</strong>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* BACK */}
      <section className="service-details-bottom">
        <div className="service-details-container">
          <Link to="/" className="service-back-button">
            ← Back to Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
