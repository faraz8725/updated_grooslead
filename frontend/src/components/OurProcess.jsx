import "../styles/OurProcess.css";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "We understand your goals, audience, challenges and requirements.",
  },
  {
    number: "02",
    title: "Plan",
    text: "We create a clear strategy and roadmap for the solution.",
  },
  {
    number: "03",
    title: "Create",
    text: "Our team turns the strategy into design, technology and experiences.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "We test, refine and deliver a solution ready for the real world.",
  },
  {
    number: "05",
    title: "Grow",
    text: "We continue improving the solution as your business evolves.",
  },
];

const OurProcess = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-heading">
          <div className="process-label">
            <span></span>
            OUR PROCESS
          </div>

          <h2>
            From first idea
            <br />
            <span>to real impact.</span>
          </h2>

          <p>
            A simple, focused approach that keeps ideas, people and technology
            moving in the same direction.
          </p>
        </div>

        <div className="process-list">
          {steps.map((step) => (
            <div className="process-item" key={step.number}>
              <div className="process-number">{step.number}</div>

              <div className="process-line"></div>

              <div className="process-info">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>

              <div className="process-arrow">↗</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;