import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-container">
          <div className="contact-label">
            <span></span>
            GET IN TOUCH
          </div>

          <h1>
            Let's start a
            <br />
            <span>conversation.</span>
          </h1>

          <p>
            Have a project, idea or question? Tell us what you're working on
            and let's explore how we can help.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-section-label">
                <span></span>
                CONTACT DETAILS
              </div>

              <h2>
                We'd love to
                <br />
                <span>hear from you.</span>
              </h2>

              <div className="contact-details">
                <div className="contact-detail">
                  <small>EMAIL</small>
                  <p>hello@grosslead.com</p>
                </div>

                <div className="contact-detail">
                  <small>PHONE</small>
                  <p>+91 XXXXX XXXXX</p>
                </div>

                <div className="contact-detail">
                  <small>LOCATION</small>
                  <p>India</p>
                </div>
              </div>
            </div>

            <form className="contact-form">
              <div className="contact-form-row">
                <div className="contact-field">
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="contact-field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="contact-field">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="What can we help with?"
                />
              </div>

              <div className="contact-field">
                <label>Message</label>
                <textarea
                  rows="6"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button type="button" className="contact-submit">
                Send Message
                <span>↗</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;