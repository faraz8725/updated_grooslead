/*import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

import "../styles/Admin.css";

const AdminServices = () => {
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
                SERVICES
              </span>

              <h2>
                Manage your
                <br />
                <span>services.</span>
              </h2>
            </div>

            <button className="admin-primary-button">
              + Add Service
            </button>
          </div>

          <div className="admin-empty-state">
            <span>+</span>

            <div>
              <h3>Services will appear here</h3>
              <p>
                Once connected with the backend, services added from
                this panel will be displayed here.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminServices; */

import { useEffect, useState } from "react";

import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

import "../styles/Admin.css";

const API_URL = " https://updated-grooslead.onrender.com";

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    status: "active",
  });

  const token = localStorage.getItem("token");

  const fetchServices = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}/api/services`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch services");
      }

      setServices(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
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
      content: "",
      image: "",
      status: "active",
    });

    setEditingService(null);
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please login as admin first.");
      return;
    }

    try {
      const url = editingService
        ? `${API_URL}/api/services/${editingService._id}`
        : `${API_URL}/api/services`;

      const method = editingService ? "PUT" : "POST";

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
        throw new Error(data.message || "Something went wrong");
      }

      alert(
        editingService
          ? "Service updated successfully."
          : "Service created successfully."
      );

      resetForm();
      fetchServices();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleEdit = (service) => {
    setEditingService(service);

    setFormData({
      title: service.title || "",
      description: service.description || "",
      content: service.content || "",
      image: service.image || "",
      status: service.status || "active",
    });

    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!token) {
      alert("Please login as admin first.");
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to delete this service?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `${API_URL}/api/services/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete service");
      }

      alert("Service deleted successfully.");

      fetchServices();
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
                SERVICES
              </span>

              <h2>
                Manage your
                <br />
                <span>services.</span>
              </h2>
            </div>

            <button
              className="admin-primary-button"
              onClick={() => {
                setEditingService(null);
                setFormData({
                  title: "",
                  description: "",
                  content: "",
                  image: "",
                  status: "active",
                });
                setShowForm(true);
              }}
            >
              + Add Service
            </button>
          </div>

          {showForm && (
            <form
              className="admin-form"
              onSubmit={handleSubmit}
            >
              <h3>
                {editingService
                  ? "Edit Service"
                  : "Add New Service"}
              </h3>

              <div className="admin-form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label>Content</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label>Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://..."
                />
              </div>

              <div className="admin-form-group">
                <label>Status</label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className="admin-form-actions">
                <button
                  type="submit"
                  className="admin-primary-button"
                >
                  {editingService
                    ? "Update Service"
                    : "Create Service"}
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
                <h3>Loading services...</h3>
              </div>
            </div>
          )}

          {error && !loading && (
            <div className="admin-empty-state">
              <div>
                <h3>Failed to load services</h3>
                <p>{error}</p>
              </div>
            </div>
          )}

          {!loading && !error && services.length === 0 && (
            <div className="admin-empty-state">
              <span>+</span>

              <div>
                <h3>No services found</h3>
                <p>
                  Add your first service using the button above.
                </p>
              </div>
            </div>
          )}

          {!loading && !error && services.length > 0 && (
            <div className="admin-service-list">
              {services.map((service) => (
                <div
                  className="admin-service-card"
                  key={service._id}
                >
                  <div>
                    <small>
                      {service.status?.toUpperCase()}
                    </small>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>
                  </div>

                  <div className="admin-card-actions">
                    <button
                      onClick={() => handleEdit(service)}
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(service._id)
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

export default AdminServices;
