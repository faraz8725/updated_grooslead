import { useEffect, useState } from "react";

import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

import API_URL from "../config/api";

import "../styles/Admin.css";

const AdminContacts = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API_URL}/api/contact/admin`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessages(data);
      } else {
        alert(
          data.message ||
            "Failed to fetch messages."
        );
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const toggleStatus = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API_URL}/api/contact/admin/${id}/status`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(
          data.message ||
            "Failed to update status."
        );
        return;
      }

      fetchMessages();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Delete this contact message?"
    );

    if (!confirmed) return;

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API_URL}/api/contact/admin/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(
          data.message ||
            "Failed to delete message."
        );
        return;
      }

      fetchMessages();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-main">
        <AdminTopbar />

        <section className="admin-management">
          <div className="admin-management-header">
            <div>
              <span className="admin-section-label">
                <i></i>
                CONTACT MESSAGES
              </span>

              <h2>
                Messages from
                <br />
                <span>your audience.</span>
              </h2>
            </div>
          </div>

          {loading ? (
            <div className="admin-empty-state">
              <div>
                <h3>Loading messages...</h3>
              </div>
            </div>
          ) : messages.length === 0 ? (
            <div className="admin-empty-state">
              <span>+</span>

              <div>
                <h3>No contact messages yet.</h3>

                <p>
                  Messages submitted through the
                  website contact form will appear here.
                </p>
              </div>
            </div>
          ) : (
            <div className="admin-contact-list">
              {messages.map((message, index) => (
                <article
                  className={`admin-contact-card ${
                    message.status === "unread"
                      ? "unread"
                      : ""
                  }`}
                  key={message._id}
                >
                  <div className="admin-contact-top">
                    <div>
                      <small>
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </small>

                      <h3>{message.subject}</h3>
                    </div>

                    <span
                      className={`admin-contact-status ${message.status}`}
                    >
                      {message.status}
                    </span>
                  </div>

                  <div className="admin-contact-details">
                    <div>
                      <small>NAME</small>
                      <strong>
                        {message.name}
                      </strong>
                    </div>

                    <div>
                      <small>EMAIL</small>
                      <strong>
                        {message.email}
                      </strong>
                    </div>

                    <div>
                      <small>DATE</small>
                      <strong>
                        {new Date(
                          message.createdAt
                        ).toLocaleString()}
                      </strong>
                    </div>
                  </div>

                  <div className="admin-contact-message">
                    <small>MESSAGE</small>

                    <p>{message.message}</p>
                  </div>

                  <div className="admin-card-actions">
                    <button
                      type="button"
                      onClick={() =>
                        toggleStatus(message._id)
                      }
                    >
                      Mark as{" "}
                      {message.status === "read"
                        ? "Unread"
                        : "Read"}
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(message._id)
                      }
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default AdminContacts;