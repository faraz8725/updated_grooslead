

/*

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserCircle, LogOut, ChevronDown } from "lucide-react";

import API_URL from "../config/api";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [services, setServices] = useState([]);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    loadUser();

    // Login/signup ke baad Navbar ko update karne ke liye
    window.addEventListener("storage", loadUser);
    window.addEventListener("userUpdated", loadUser);

    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_URL}/api/services`);
        const data = await response.json();

        if (response.ok) {
          setServices(data);
        } else {
          console.error("Failed to fetch services:", data.message);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();

    return () => {
      window.removeEventListener("storage", loadUser);
      window.removeEventListener("userUpdated", loadUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
    setShowProfileMenu(false);

    navigate("/");
    window.location.reload();
  };

  const handleProfileClick = () => {
    if (user?.role === "admin") {
      setShowProfileMenu((prev) => !prev);
    }
  };

  const handleAdminDashboard = () => {
    setShowProfileMenu(false);
    navigate("/admin");
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
                <span className="profile-letter">
                  {getInitial()}
                </span>
              </button>

              {/* Admin ke liye profile dropdown *}
              {user.role === "admin" && showProfileMenu && (
                <div className="profile-dropdown">
                  <button
                    className="profile-dropdown-item"
                    onClick={handleAdminDashboard}
                  >
                    Admin Dashboard
                  </button>
                </div>
              )}

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

*/ 



import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserCircle, LogOut, ChevronDown } from "lucide-react";

import API_URL from "../config/api";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [services, setServices] = useState([]);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    loadUser();

    window.addEventListener("storage", loadUser);
    window.addEventListener("userUpdated", loadUser);

    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_URL}/api/services`);
        const data = await response.json();

        if (response.ok) {
          setServices(data);
        } else {
          console.error("Failed to fetch services:", data.message);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();

    return () => {
      window.removeEventListener("storage", loadUser);
      window.removeEventListener("userUpdated", loadUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
    setShowProfileMenu(false);

    navigate("/");
    window.location.reload();
  };

  const handleProfileClick = () => {
    if (user?.role === "admin") {
      setShowProfileMenu((prev) => !prev);
    }
  };

  const handleAdminDashboard = () => {
    setShowProfileMenu(false);
    navigate("/admin");
  };

  const handleServicesClick = () => {
    setShowServicesMenu((prev) => !prev);
  };

  const handleServiceClick = () => {
    setShowServicesMenu(false);
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

          {/* SERVICES */}
          <div className="services-menu">
            <button
              className="nav-link services-trigger"
              onClick={handleServicesClick}
              type="button"
            >
              Services
              <ChevronDown
                size={15}
                className={showServicesMenu ? "services-chevron-open" : ""}
              />
            </button>

            {showServicesMenu && (
              <div className="services-dropdown">
                {services.length > 0 ? (
                  services.map((service) => (
                    <Link
                      key={service._id || service.id}
                      to={`/services/${service.slug}`}
                      className="service-dropdown-item"
                      onClick={handleServiceClick}
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
            )}
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
                <span className="profile-letter">
                  {getInitial()}
                </span>
              </button>

              {user.role === "admin" && showProfileMenu && (
                <div className="profile-dropdown">
                  <button
                    className="profile-dropdown-item"
                    onClick={handleAdminDashboard}
                  >
                    Admin Dashboard
                  </button>
                </div>
              )}

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
