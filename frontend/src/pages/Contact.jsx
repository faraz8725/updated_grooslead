/*import "../styles/Contact.css";

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

export default Contact; */



import { useState } from "react";

import API_URL from "../config/api";

import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const [error, setError] =
    useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSending(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        `${API_URL}/api/contact`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.message ||
            "Failed to send message."
        );
        return;
      }

      setSuccess(
        "Your message has been sent successfully."
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

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
            Have a project, idea or question?
            Tell us what you're working on
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
                  <p>
                    hello@grosslead.com
                  </p>
                </div>

                <div className="contact-detail">
                  <small>PHONE</small>
                  <p>
                    +91 XXXXX XXXXX
                  </p>
                </div>

                <div className="contact-detail">
                  <small>LOCATION</small>
                  <p>India</p>
                </div>

              </div>

            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="contact-form-row">

                <div className="contact-field">
                  <label>
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

              </div>

              <div className="contact-field">
                <label>
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What can we help with?"
                  required
                />
              </div>

              <div className="contact-field">
                <label>
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              {success && (
                <p className="contact-success">
                  {success}
                </p>
              )}

              {error && (
                <p className="contact-error">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="contact-submit"
                disabled={sending}
              >
                {sending
                  ? "Sending..."
                  : "Send Message"}

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