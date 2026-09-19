
/*
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [showSignup, setShowSignup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const endpoint = showSignup
        ? "http://localhost:5000/api/auth/signup"
        : "http://localhost:5000/api/auth/login";

      const body = showSignup
        ? {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }
        : {
            email: formData.email,
            password: formData.password,
          };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Save JWT token
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      // Save user data
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      // Success
      alert(
        showSignup
          ? "Account created successfully!"
          : "Login successful!"
      );

      // Dashboard par redirect
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const switchAuth = () => {
    setShowSignup(!showSignup);

    setFormData({
      name: "",
      email: "",
      password: "",
    });

    setError("");
  };

  return (
    <div className="auth-page">
      <div className="auth-background-circle auth-circle-one"></div>
      <div className="auth-background-circle auth-circle-two"></div>

      <div className="auth-container">
        <div className="auth-brand">
          <Link to="/">
            <span>GROSS</span>
            <strong>LEAD</strong>
          </Link>
        </div>

        <div className="auth-card">
          <div className="auth-label">
            <span></span>
            {showSignup ? "CREATE ACCOUNT" : "WELCOME BACK"}
          </div>

          <h1>
            {showSignup ? (
              <>
                Create your
                <br />
                <span>account.</span>
              </>
            ) : (
              <>
                Welcome
                <br />
                <span>back.</span>
              </>
            )}
          </h1>

          <p className="auth-description">
            {showSignup
              ? "Create your Grosslead account to get started."
              : "Sign in to continue to your Grosslead account."}
          </p>

          <form className="auth-form" onSubmit={handleSubmit}>
            {showSignup && (
              <div className="auth-field">
                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="auth-field">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="auth-field">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {error && (
              <p className="auth-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="auth-submit"
              disabled={loading}
            >
              {loading
                ? "Please wait..."
                : showSignup
                ? "Create Account"
                : "Login"}

              {!loading && <span>↗</span>}
            </button>
          </form>

          <div className="auth-switch">
            {showSignup ? (
              <>
                Already have an account?
                <button type="button" onClick={switchAuth}>
                  Login
                </button>
              </>
            ) : (
              <>
                Don't have an account?
                <button type="button" onClick={switchAuth}>
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>

        <Link to="/" className="auth-back">
          ← Back to Website
        </Link>
      </div>
    </div>
  );
};

export default Login;   */



import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import API_URL from "../config/api";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [showSignup, setShowSignup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const endpoint = showSignup
        ? `${API_URL}/api/auth/signup`
        : `${API_URL}/api/auth/login`;

      const body = showSignup
        ? {
            name: formData.name.trim(),
            email: formData.email.trim(),
            password: formData.password,
          }
        : {
            email: formData.email.trim(),
            password: formData.password,
          };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      /* Save JWT token */
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      /* Save user data */
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));

        /* Tell Navbar that user has changed */
        window.dispatchEvent(new Event("userUpdated"));
      }

      /* Success message */
      alert(
        showSignup
          ? "Account created successfully!"
          : "Login successful!"
      );

      /* Go back to website */
      navigate("/");
    } catch (error) {
      console.error("Auth error:", error);
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const switchAuth = () => {
    setShowSignup(!showSignup);

    setFormData({
      name: "",
      email: "",
      password: "",
    });

    setError("");
  };

  return (
    <div className="auth-page">
      <div className="auth-background-circle auth-circle-one"></div>
      <div className="auth-background-circle auth-circle-two"></div>

      <div className="auth-container">

        {/* BRAND */}
        <div className="auth-brand">
          <Link to="/">
            <span>GROSS</span>
            <strong>LEAD</strong>
          </Link>
        </div>

        {/* AUTH CARD */}
        <div className="auth-card">

          <div className="auth-label">
            <span></span>
            {showSignup ? "CREATE ACCOUNT" : "WELCOME BACK"}
          </div>

          <h1>
            {showSignup ? (
              <>
                Create your
                <br />
                <span>account.</span>
              </>
            ) : (
              <>
                Welcome
                <br />
                <span>back.</span>
              </>
            )}
          </h1>

          <p className="auth-description">
            {showSignup
              ? "Create your Grosslead account to get started."
              : "Sign in to continue to your Grosslead account."}
          </p>

          {/* FORM */}
          <form className="auth-form" onSubmit={handleSubmit}>

            {/* NAME - SIGNUP ONLY */}
            {showSignup && (
              <div className="auth-field">
                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {/* EMAIL */}
            <div className="auth-field">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="auth-field">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* ERROR */}
            {error && (
              <p className="auth-error">
                {error}
              </p>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              className="auth-submit"
              disabled={loading}
            >
              {loading
                ? "Please wait..."
                : showSignup
                ? "Create Account"
                : "Login"}

              {!loading && <span>↗</span>}
            </button>

          </form>

          {/* SWITCH LOGIN / SIGNUP */}
          <div className="auth-switch">
            {showSignup ? (
              <>
                Already have an account?

                <button
                  type="button"
                  onClick={switchAuth}
                >
                  Login
                </button>
              </>
            ) : (
              <>
                Don't have an account?

                <button
                  type="button"
                  onClick={switchAuth}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

        </div>

        {/* BACK */}
        <Link to="/" className="auth-back">
          ← Back to Website
        </Link>

      </div>
    </div>
  );
};

export default Login;

