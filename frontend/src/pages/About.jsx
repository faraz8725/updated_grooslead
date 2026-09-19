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
            Grosslead Media Private Limited is a next-generation digital marketing company specializing in programmatic advertising and high-quality lead generation. We focus on performance, and transparency, helping businesses achieve scalable growth through media buying and AI-driven campaign optimization.
We connect advertisers with a vast network of ad exchanges and direct sites through our advanced media buying team, ensuring high-intent leads and maximum ROI.

          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-container">
          <div className="about-section-label">
            <span></span>
            OUR VISION AND MISSION
          </div>

          <div className="about-story-grid">
            <h2>
            
              
              <span>To be a global leader in</span>
              <br />
              digital marketing innovation
            </h2>

            <div className="about-story-text">
              <p>
                Empower businesses to thrive online through measurable and impactful marketing campaigns that deliver consistent growth and value.
.
              </p>

              <p>
                .
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
              <h3>Lead Generation for Automotive & Life Insurance
</h3>
              <p>
                We help automotive and life insurance businesses generate high-quality leads through targeted digital strategies.
              </p>
            </div>

            <div className="about-value">
              <span>02</span>
              <h3>Programmatic Advertising & Media Buying
</h3>
              <p>
                We use smart programmatic strategies to reach the right audience across high-impact digital channels.
              </p>
            </div>

            <div className="about-value">
              <span>03</span>
              <h3>Call-Verified Lead Qualification
</h3>
              <p>
                We verify every lead through real conversations to ensure genuine interest and intent.
              </p>
            </div>

            <div className="about-value">
              <span>04</span>
              <h3>Scalable & High-Intent Lead Delivery
</h3>
              <p>
               We deliver high-intent leads at scale, tailored to your business goals and target audience.
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