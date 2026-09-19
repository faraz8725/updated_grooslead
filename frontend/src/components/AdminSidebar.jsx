import { NavLink, useNavigate } from "react-router-dom";

import "../styles/AdminSidebar.css";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
    window.location.reload();
  };

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-logo">
        <span>GROSS</span>
        <strong>LEAD</strong>
      </div>

      <div className="admin-sidebar-label">ADMIN PANEL</div>

      <nav className="admin-sidebar-nav">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `admin-nav-item ${isActive ? "active" : ""}`
          }
        >
          <span className="admin-nav-number">01</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/services"
          className={({ isActive }) =>
            `admin-nav-item ${isActive ? "active" : ""}`
          }
        >
          <span className="admin-nav-number">02</span>
          <span>Services</span>
        </NavLink>

        <NavLink
          to="/admin/careers"
          className={({ isActive }) =>
            `admin-nav-item ${isActive ? "active" : ""}`
          }
        >
          <span className="admin-nav-number">03</span>
          <span>Careers</span>
        </NavLink>
      </nav>

      <div className="admin-sidebar-bottom">
        <button
          className="admin-back-button"
          onClick={() => navigate("/")}
        >
          ← Back to Website
        </button>

        <button
          className="admin-logout-button"
          onClick={handleLogout}
        >
          Logout
          <span>↗</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;