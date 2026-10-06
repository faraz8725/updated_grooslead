import { useEffect, useState } from "react";

import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

import API_URL from "../config/api";

import "../styles/Admin.css";

const AdminTeam = () => {
  const [members, setMembers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [editingMember, setEditingMember] =
    useState(null);

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    description: "",
    order: 0,
    status: "active",
    image: null,
  });

  const fetchMembers = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API_URL}/api/team/admin/all`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMembers(data);
      } else {
        alert(data.message || "Failed to fetch team.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const resetForm = () => {
    setFormData({
      name: "",
      designation: "",
      description: "",
      order: 0,
      status: "active",
      image: null,
    });

    setEditingMember(null);
    setShowForm(false);
  };

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
        "description",
        formData.description
      );
      data.append("order", formData.order);
      data.append("status", formData.status);

      if (formData.image) {
        data.append("image", formData.image);
      }

      const endpoint = editingMember
        ? `${API_URL}/api/team/${editingMember._id}`
        : `${API_URL}/api/team`;

      const method = editingMember ? "PUT" : "POST";

      const response = await fetch(endpoint, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        alert(
          result.message ||
            "Failed to save team member."
        );
        return;
      }

      alert(
        editingMember
          ? "Team member updated."
          : "Team member added."
      );

      resetForm();
      fetchMembers();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (member) => {
    setEditingMember(member);

    setFormData({
      name: member.name || "",
      designation: member.designation || "",
      description: member.description || "",
      order: member.order || 0,
      status: member.status || "active",
      image: null,
    });

    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this team member?"
    );

    if (!confirmed) return;

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API_URL}/api/team/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Delete failed.");
        return;
      }

      alert("Team member deleted.");

      fetchMembers();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
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
                OUR TEAM
              </span>

              <h2>
                Manage the
                <br />
                <span>team.</span>
              </h2>
            </div>

            <button
              className="admin-primary-button"
              onClick={() => {
                if (showForm) {
                  resetForm();
                } else {
                  setShowForm(true);
                }
              }}
            >
              {showForm
                ? "Close Form"
                : "+ Add Team Member"}
            </button>
          </div>

          {showForm && (
            <form
              className="admin-form"
              onSubmit={handleSubmit}
            >
              <h3>
                {editingMember
                  ? "Edit Team Member"
                  : "Add Team Member"}
              </h3>

              <div className="admin-form-group">
                <label>Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Team member name"
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
                  placeholder="e.g. Senior Developer"
                  required
                />
              </div>

              <div className="admin-form-group">
                <label>Description</label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Short introduction about the team member..."
                />
              </div>

              <div className="admin-form-group">
                <label>Photo</label>

                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  required={!editingMember}
                />

                {editingMember &&
                  !formData.image && (
                    <p
                      style={{
                        marginTop: "8px",
                        color: "#777",
                        fontSize: "12px",
                      }}
                    >
                      Leave empty to keep existing photo.
                    </p>
                  )}
              </div>

              <div className="admin-form-group">
                <label>Display Order</label>

                <input
                  type="number"
                  name="order"
                  min="0"
                  value={formData.order}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label>Status</label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="active">
                    Active
                  </option>

                  <option value="inactive">
                    Inactive
                  </option>
                </select>
              </div>

              <div className="admin-form-actions">
                <button
                  type="submit"
                  className="admin-primary-button"
                  disabled={saving}
                >
                  {saving
                    ? "Saving..."
                    : editingMember
                    ? "Update Member"
                    : "Add Member"}
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

          {loading ? (
            <div className="admin-empty-state">
              <div>
                <h3>Loading team...</h3>
              </div>
            </div>
          ) : members.length === 0 ? (
            <div className="admin-empty-state">
              <span>+</span>

              <div>
                <h3>No team members added.</h3>

                <p>
                  Add your first team member from
                  the button above.
                </p>
              </div>
            </div>
          ) : (
            <div className="admin-service-list">
              {members.map((member, index) => (
                <div
                  className="admin-service-card admin-team-card"
                  key={member._id}
                >
                  <div className="admin-team-image">
                    <img
                      src={member.image}
                      alt={member.name}
                    />
                  </div>

                  <small>
                    {String(index + 1).padStart(2, "0")} ·{" "}
                    {member.status.toUpperCase()}
                  </small>

                  <h3>{member.name}</h3>

                  <p>
                    {member.designation}
                  </p>

                  {member.description && (
                    <p>
                      {member.description}
                    </p>
                  )}

                  <div className="admin-card-actions">
                    <button
                      type="button"
                      onClick={() =>
                        handleEdit(member)
                      }
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(member._id)
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

export default AdminTeam;