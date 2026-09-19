import { useEffect, useState } from "react";

import "../styles/AdminTopbar.css";

const AdminTopbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser(null);
      }
    }
  }, []);

  const getInitial = () => {
    if (!user?.name) return "A";

    return user.name.charAt(0).toUpperCase();
  };

  return (
    <header className="admin-topbar">
      <div>
        <span className="admin-topbar-label">CONTROL CENTER</span>
        <h1>Admin Dashboard</h1>
      </div>

      <div className="admin-user">
        <div className="admin-user-info">
          <strong>{user?.name || "Administrator"}</strong>
          <span>{user?.role || "admin"}</span>
        </div>

        <div className="admin-user-avatar">
          {getInitial()}
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;