/*import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

import "../styles/Admin.css";

const AdminCareers = () => {
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
                CAREERS
              </span>

              <h2>
                Manage
                <br />
                <span>opportunities.</span>
              </h2>
            </div>

            <button className="admin-primary-button">
              + Add Career
            </button>
          </div>

          <div className="admin-empty-state">
            <span>+</span>

            <div>
              <h3>Career openings will appear here</h3>
              <p>
                Once connected with the backend, career openings added
                from this panel will be displayed here.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminCareers; */


import { useEffect, useState } from "react";

import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

import "../styles/Admin.css";

const API_URL = "http://localhost:5000";

const AdminCareers = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingCareer, setEditingCareer] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "India",
    type: "Full Time",
    experience: "Fresher",
    status: "open",
  });

  const token = localStorage.getItem("token");

  const fetchCareers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}/api/careers`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch careers"
        );
      }

      setCareers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      location: "India",
      type: "Full Time",
      experience: "Fresher",
      status: "open",
    });

    setEditingCareer(null);
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please login as admin first.");
      return;
    }

    try {
      const url = editingCareer
        ? `${API_URL}/api/careers/${editingCareer._id}`
        : `${API_URL}/api/careers`;

      const method = editingCareer ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong"
        );
      }

      alert(
        editingCareer
          ? "Career updated successfully."
          : "Career created successfully."
      );

      resetForm();
      fetchCareers();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleEdit = (career) => {
    setEditingCareer(career);

    setFormData({
      title: career.title || "",
      description: career.description || "",
      location: career.location || "India",
      type: career.type || "Full Time",
      experience: career.experience || "Fresher",
      status: career.status || "open",
    });

    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!token) {
      alert("Please login as admin first.");
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to delete this career?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `${API_URL}/api/careers/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to delete career"
        );
      }

      alert("Career deleted successfully.");

      fetchCareers();
    } catch (error) {
      alert(error.message);
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
                CAREERS
              </span>

              <h2>
                Manage
                <br />
                <span>opportunities.</span>
              </h2>
            </div>

            <button
              className="admin-primary-button"
              onClick={() => {
                setEditingCareer(null);

                setFormData({
                  title: "",
                  description: "",
                  location: "India",
                  type: "Full Time",
                  experience: "Fresher",
                  status: "open",
                });

                setShowForm(true);
              }}
            >
              + Add Career
            </button>
          </div>

          {showForm && (
            <form
              className="admin-form"
              onSubmit={handleSubmit}
            >
              <h3>
                {editingCareer
                  ? "Edit Career"
                  : "Add New Career"}
              </h3>

              <div className="admin-form-group">
                <label>Job Title</label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Frontend Developer"
                  required
                />
              </div>

              <div className="admin-form-group">
                <label>Description</label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the job opportunity..."
                  required
                />
              </div>

              <div className="admin-form-group">
                <label>Location</label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="India"
                />
              </div>

              <div className="admin-form-group">
                <label>Job Type</label>

                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="Full Time">
                    Full Time
                  </option>

                  <option value="Part Time">
                    Part Time
                  </option>

                  <option value="Internship">
                    Internship
                  </option>

                  <option value="Contract">
                    Contract
                  </option>

                  <option value="Remote">
                    Remote
                  </option>
                </select>
              </div>

              <div className="admin-form-group">
                <label>Experience</label>

                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g. 1-2 Years"
                />
              </div>

              <div className="admin-form-group">
                <label>Status</label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              <div className="admin-form-actions">
                <button
                  type="submit"
                  className="admin-primary-button"
                >
                  {editingCareer
                    ? "Update Career"
                    : "Create Career"}
                </button>

                <button
                  type="button"
                  className="admin-secondary-button"
                  onClick={resetForm}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {loading && (
            <div className="admin-empty-state">
              <div>
                <h3>Loading careers...</h3>
              </div>
            </div>
          )}

          {error && !loading && (
            <div className="admin-empty-state">
              <div>
                <h3>Failed to load careers</h3>
                <p>{error}</p>
              </div>
            </div>
          )}

          {!loading && !error && careers.length === 0 && (
            <div className="admin-empty-state">
              <span>+</span>

              <div>
                <h3>No career openings found</h3>

                <p>
                  Add your first career opening using the
                  button above.
                </p>
              </div>
            </div>
          )}

          {!loading && !error && careers.length > 0 && (
            <div className="admin-career-list">
              {careers.map((career) => (
                <div
                  className="admin-career-card"
                  key={career._id}
                >
                  <div>
                    <small>
                      {career.status?.toUpperCase()}
                    </small>

                    <h3>{career.title}</h3>

                    <p>{career.description}</p>

                    <div className="admin-career-meta">
                      <span>
                        📍 {career.location}
                      </span>

                      <span>
                        💼 {career.type}
                      </span>

                      <span>
                        🎓 {career.experience}
                      </span>
                    </div>
                  </div>

                  <div className="admin-card-actions">
                    <button
                      onClick={() => handleEdit(career)}
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(career._id)
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default AdminCareers;
