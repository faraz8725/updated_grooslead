import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Login.css";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);

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

          <form className="auth-form">
            {showSignup && (
              <div className="auth-field">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
            )}

            <div className="auth-field">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="auth-field">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <button type="button" className="auth-submit">
              {showSignup ? "Create Account" : "Login"}
              <span>↗</span>
            </button>
          </form>

          <div className="auth-switch">
            {showSignup ? (
              <>
                Already have an account?
                <button onClick={() => setShowSignup(false)}>
                  Login
                </button>
              </>
            ) : (
              <>
                Don't have an account?
                <button onClick={() => setShowSignup(true)}>
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

export default Login;