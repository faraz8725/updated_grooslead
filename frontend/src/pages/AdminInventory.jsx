import { useEffect, useState } from "react";

import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

import API_URL from "../config/api";

import "../styles/Admin.css";

const AdminInventory = () => {
  const [inventories, setInventories] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [editingInventory, setEditingInventory] =
    useState(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    url: "",
    status: "active",
    order: 0,
    image: null,
  });

  const fetchInventories = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API_URL}/api/inventories/admin/all`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setInventories(data);
      } else {
        alert(data.message || "Failed to fetch inventories.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventories();
  }, []);

  const resetForm = () => {
    setFormData({
      name: "",
      category: "",
      url: "",
      status: "active",
      order: 0,
      image: null,
    });

    setEditingInventory(null);
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
      data.append("category", formData.category);
      data.append("url", formData.url);
      data.append("status", formData.status);
      data.append("order", formData.order);

      if (formData.image) {
        data.append("image", formData.image);
      }

      const endpoint = editingInventory
        ? `${API_URL}/api/inventories/${editingInventory._id}`
        : `${API_URL}/api/inventories`;

      const method = editingInventory ? "PUT" : "POST";

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
            "Failed to save inventory."
        );
        return;
      }

      alert(
        editingInventory
          ? "Inventory updated successfully."
          : "Inventory added successfully."
      );

      resetForm();
      fetchInventories();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (inventory) => {
    setEditingInventory(inventory);

    setFormData({
      name: inventory.name || "",
      category: inventory.category || "",
      url: inventory.url || "",
      status: inventory.status || "active",
      order: inventory.order || 0,
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
      "Are you sure you want to delete this inventory?"
    );

    if (!confirmed) return;

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API_URL}/api/inventories/${id}`,
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

      alert("Inventory deleted successfully.");

      fetchInventories();
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
                WEBSITE INVENTORY
              </span>

              <h2>
                Manage your
                <br />
                <span>work.</span>
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
              {showForm ? "Close Form" : "+ Add Inventory"}
            </button>
          </div>

          {showForm && (
            <form
              className="admin-form"
              onSubmit={handleSubmit}
            >
              <h3>
                {editingInventory
                  ? "Edit Inventory"
                  : "Add New Inventory"}
              </h3>

              <div className="admin-form-group">
                <label>Website Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Grosslead Media"
                  required
                />
              </div>

              <div className="admin-form-group">
                <label>Category</label>

                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="e.g. Digital Experience"
                  required
                />
              </div>

              <div className="admin-form-group">
                <label>Website URL</label>

                <input
                  type="url"
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  required
                />
              </div>

              <div className="admin-form-group">
                <label>Website Screenshot</label>

                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  required={!editingInventory}
                />

                {editingInventory &&
                  !formData.image && (
                    <p
                      style={{
                        marginTop: "8px",
                        color: "#777",
                        fontSize: "12px",
                      }}
                    >
                      Leave empty to keep the existing image.
                    </p>
                  )}
              </div>

              <div className="admin-form-group">
                <label>Display Order</label>

                <input
                  type="number"
                  name="order"
                  value={formData.order}
                  onChange={handleChange}
                  min="0"
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
                    : editingInventory
                    ? "Update Inventory"
                    : "Add Inventory"}
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
                <h3>Loading inventory...</h3>
              </div>
            </div>
          ) : inventories.length === 0 ? (
            <div className="admin-empty-state">
              <span>+</span>

              <div>
                <h3>No inventory added yet.</h3>

                <p>
                  Add your first website/project from
                  the button above.
                </p>
              </div>
            </div>
          ) : (
            <div className="admin-service-list">
              {inventories.map((inventory, index) => (
                <div
                  className="admin-service-card admin-inventory-card"
                  key={inventory._id}
                >
                  <div className="admin-inventory-image">
                    <img
                      src={inventory.image}
                      alt={inventory.name}
                    />
                  </div>

                  <small>
                    {String(index + 1).padStart(2, "0")} ·{" "}
                    {inventory.status.toUpperCase()}
                  </small>

                  <h3>{inventory.name}</h3>

                  <p>
                    {inventory.category}
                  </p>

                  <p className="admin-inventory-url">
                    {inventory.url}
                  </p>

                  <div className="admin-card-actions">
                    <button
                      type="button"
                      onClick={() =>
                        handleEdit(inventory)
                      }
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(inventory._id)
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

export default AdminInventory;