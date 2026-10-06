import { useEffect, useState } from "react";

import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

import API_URL from "../config/api";

import "../styles/Admin.css";

const AdminCEO = () => {
  const [ceo, setCEO] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    designation: "CEO & Founder",
    thoughtTitle:
      "We don't just build digital solutions. We build opportunities.",
    messageOne: "",
    messageTwo: "",
    image: null,
  });

  const fetchCEO = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/ceo`
      );

      if (response.status === 404) {
        setCEO(null);
        return;
      }

      const data = await response.json();

      if (response.ok) {
        setCEO(data);

        setFormData({
          name: data.name || "",
          designation:
            data.designation || "CEO & Founder",
          thoughtTitle:
            data.thoughtTitle || "",
          messageOne:
            data.messageOne || "",
          messageTwo:
            data.messageTwo || "",
          image: null,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCEO();
  }, []);

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSaving(true);

    try {
      const token = localStorage.getItem("token");

      const data = new FormData();

      data.append("name", formData.name);
      data.append(
        "designation",
        formData.designation
      );
      data.append(
        "thoughtTitle",
        formData.thoughtTitle
      );
      data.append(
        "messageOne",
        formData.messageOne
      );
      data.append(
        "messageTwo",
        formData.messageTwo
      );

      if (formData.image) {
        data.append("image", formData.image);
      }

      const response = await fetch(
        `${API_URL}/api/ceo`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: data,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        alert(
          result.message ||
            "Failed to save CEO information."
        );
        return;
      }

      alert("CEO information saved successfully.");

      fetchCEO();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setSaving(false);
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
                FROM THE CEO
              </span>

              <h2>
                Manage CEO
                <br />
                <span>message.</span>
              </h2>
            </div>
          </div>

          {loading ? (
            <div className="admin-empty-state">
              <div>
                <h3>Loading CEO information...</h3>
              </div>
            </div>
          ) : (
            <form
              className="admin-form"
              onSubmit={handleSubmit}
            >
              <h3>
                {ceo
                  ? "Update CEO Information"
                  : "Add CEO Information"}
              </h3>

              <div className="admin-form-group">
                <label>CEO Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="CEO Name"
                  required
                />
              </div>

              <div className="admin-form-group">
                <label>Designation</label>

                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="CEO & Founder"
                />
              </div>

              <div className="admin-form-group">
                <label>Thought Heading</label>

                <input
                  type="text"
                  name="thoughtTitle"
                  value={formData.thoughtTitle}
                  onChange={handleChange}
                  placeholder="CEO thought heading"
                />
              </div>

              <div className="admin-form-group">
                <label>Message Paragraph One</label>

                <textarea
                  name="messageOne"
                  value={formData.messageOne}
                  onChange={handleChange}
                  placeholder="CEO message..."
                />
              </div>

              <div className="admin-form-group">
                <label>Message Paragraph Two</label>

                <textarea
                  name="messageTwo"
                  value={formData.messageTwo}
                  onChange={handleChange}
                  placeholder="CEO message..."
                />
              </div>

              <div className="admin-form-group">
                <label>CEO Photo</label>

                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  required={!ceo}
                />

                {ceo && (
                  <p
                    style={{
                      marginTop: "8px",
                      color: "#777",
                      fontSize: "12px",
                    }}
                  >
                    Leave empty to keep the current photo.
                  </p>
                )}
              </div>

              <div className="admin-form-actions">
                <button
                  type="submit"
                  className="admin-primary-button"
                  disabled={saving}
                >
                  {saving
                    ? "Saving..."
                    : "Save CEO Information"}
                </button>
              </div>
            </form>
          )}
        </section>
      </main>
    </div>
  );
};

export default AdminCEO;