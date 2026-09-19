import "../styles/WhyGrosslead.css";

const reasons = [
  {
    number: "01",
    title: "Business First",
    text: "We understand the business objective before building the digital solution.",
  },
  {
    number: "02",
    title: "Creative Thinking",
    text: "We combine creativity with technology to create experiences that stand out.",
  },
  {
    number: "03",
    title: "Technology Driven",
    text: "We use modern technologies to build scalable and reliable digital solutions.",
  },
  {
    number: "04",
    title: "Long-Term Approach",
    text: "We focus on building meaningful solutions that can grow with the business.",
  },
];

const WhyGrosslead = () => {
  return (
    <section className="why-section">
      <div className="why-container">
        <div className="why-header">
          <div className="why-label">
            <span></span>
            WHY GROSSLEAD
          </div>

          <h2>
            More than a service.
            <br />
            <span>A digital partner.</span>
          </h2>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => (
            <div className="why-card" key={reason.number}>
              <div className="why-card-top">
                <span>{reason.number}</span>
                <div></div>
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.text}</p>

              <span className="why-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGrosslead;