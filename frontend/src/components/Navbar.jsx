import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserCircle, LogOut, ChevronDown } from "lucide-react";

import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [services, setServices] = useState([]);

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    navigate("/");
    window.location.reload();
  };

  const handleProfileClick = () => {
    if (user?.role === "admin") {
      navigate("/admin");
    }
  };

  const getInitial = () => {
    if (!user?.name) return "U";

    return user.name.charAt(0).toUpperCase();
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <span className="logo-main">GROSS</span>
          <span className="logo-accent">LEAD</span>
        </Link>

        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/about" className="nav-link">
            About Us
          </Link>

          <div className="services-menu">
            <button className="nav-link services-trigger">
              Services
              <ChevronDown size={15} />
            </button>

            <div className="services-dropdown">
              {services.length > 0 ? (
                services.map((service) => (
                  <Link
                    key={service._id || service.id}
                    to={`/services/${service.slug}`}
                    className="service-dropdown-item"
                  >
                    {service.title || service.name}
                  </Link>
                ))
              ) : (
                <div className="services-empty">
                  Services coming soon
                </div>
              )}
            </div>
          </div>

          <Link to="/career" className="nav-link">
            Career
          </Link>

          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>
        </div>

        <div className="navbar-actions">
          {user ? (
            <div className="profile-area">
              <button
                className="profile-button"
                onClick={handleProfileClick}
                aria-label="Profile"
              >
                <span className="profile-letter">{getInitial()}</span>
              </button>

              <button
                className="logout-button"
                onClick={handleLogout}
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="login-button">
              <UserCircle size={18} />
              <span>Login</span>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;