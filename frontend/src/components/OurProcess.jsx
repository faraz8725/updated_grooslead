import "../styles/OurProcess.css";

const steps = [
  {
    number: "01",
    title: "User Acquisition ",
    text: "Identify and attract high-intent users",
  },
  {
    number: "02",
    title: "Ad Placement & Media Buying ",
    text: "Run targeted campaigns on premium platforms",
  },
  {
    number: "03",
    title: "Lead Capture ",
    text: "Drive users to optimized landing pages.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "We test, refine and deliver a solution ready for the real world.",
  },
  {
    number: "05",
    title: "Call Center Verification ",
    text: "Our dedicated team filters and verifies leads.",
  },
{
    number: "06",
    title: "Call Center Verification  ",
    text: "Only high-quality, verified leads are shared with clients.",
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