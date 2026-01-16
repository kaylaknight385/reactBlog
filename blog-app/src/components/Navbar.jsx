import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// the navbar that shows up on every page
export function Navbar() {
  // grabbing auth status and logout function from context
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* site logo/title */}
        <Link to="/" className="nav-logo">
          My Blog
        </Link>

        <ul className="nav-menu">
          {/* basic links everyone can see */}
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>

          {/* if you're logged in, show admin stuff and logout button */}
          {isAuthenticated ? (
            <>
              <li className="nav-item">
                <Link to="/admin" className="nav-link">
                  Admin
                </Link>
              </li>
              <li className="nav-item">
                <button onClick={logout} className="nav-button">
                  Log Out
                </button>
              </li>
            </>
          ) : (
            // otherwise just show the login link
            <li className="nav-item">
              <Link to="/login" className="nav-link nav-link-login">
                Log In
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}