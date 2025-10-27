// Header
// src/components/Header.jsx

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logoLight from "../assets/icons/pine-tree.png";
import googleBtnLight from "../assets/icons/official-button.png";

// single, top-level import from your actual helper location
import { loginWithGoogle, logout, getEnrichedUser } from "../lib/appwrite";

export default function Header() {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false); // prevent double OAuth

  // ----- helpers to avoid the "68" avatar bug -----
  const getDisplayName = (u) => {
    const name = (u?.name || "").trim();
    if (name) {
      const letters = name.replace(/[^A-Za-z ]+/g, " ").trim();
      if (letters) return letters.split(/\s+/)[0]; // first word
    }
    const email = (u?.email || "").trim();
    if (email) return email.split("@")[0];
    return "hiker";
  };

  const getInitials = (u) => {
    const from =
      (u?.name && u.name.trim()) ||
      (u?.email && u.email.split("@")[0]) ||
      "";
    const lettersOnly = from.replace(/[^A-Za-z ]+/g, " ").trim();
    if (!lettersOnly) return "🙂";
    const parts = lettersOnly.split(/\s+/);
    const a = parts[0]?.[0] || "";
    const b = parts[1]?.[0] || "";
    const init = (a + b).toUpperCase();
    return init || "🙂";
  };
  // ------------------------------------------------

  // Load user once
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const u = await getEnrichedUser(); // returns null if no session
        if (mounted) setUser(u);
      } catch {
        if (mounted) setUser(null);
      } finally {
        if (mounted) setAuthReady(true);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const linkClass = ({ isActive }) => `nav-link ${isActive ? "active" : ""}`;
  const initials = getInitials(user);
  const displayName = getDisplayName(user);

  // Treat as authenticated only if Appwrite gave us a real session object
  const isAuthed = !!(user && user.$id && user.email);

  // Single-call login handler to prevent 429s
  const handleLogin = async () => {
    if (loggingIn) return;
    setLoggingIn(true);
    try {
      await loginWithGoogle("/badges/me"); // redirects on success
    } finally {
      // If OAuth fails synchronously (no redirect), allow retry soon
      setTimeout(() => setLoggingIn(false), 1500);
    }
  };

  return (
    <header className="navbar">
      {/* Brand */}
      <div className="brand">
        <img
          src={logoLight}
          alt="Hiking Minnesota logo"
          className="brand-icon logo-light"
        />
        <span className="brand-text">hiking minnesota</span>
      </div>

      {/* Nav */}
      <nav className="nav-links">
        <NavLink to="/hikes" end className={linkClass}>
          hikes
        </NavLink>
        {isAuthed && (
          <NavLink to="/badges/me" end className={linkClass}>
            badge collection
          </NavLink>
        )}
        <NavLink to="/badges" end className={linkClass}>
          badges
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          about the site
        </NavLink>
      </nav>

      {/* Auth */}
      <div className="auth-area">
        {!authReady ? (
          <div className="auth-skeleton" aria-hidden="true" title="Loading…" />
        ) : isAuthed ? (
          <>
            <div className="user-circle" title={displayName}>
              {initials}
            </div>
            <span className="welcome-text">Welcome {displayName}</span>
            <button
              className="logout-button"
              onClick={async () => {
                await logout();
                setUser(null);
              }}
            >
              Log out
            </button>
          </>
        ) : (
          <button
            type="button"
            className="login-button"
            onClick={handleLogin}
            disabled={loggingIn}
            aria-disabled={loggingIn}
            title={loggingIn ? "Signing in…" : "Sign in with Google"}
          >
            {loggingIn ? (
              "Signing in…"
            ) : (
              <img
                src={googleBtnLight}
                alt="Sign in with Google"
                className="google-btn-light"
              />
            )}
          </button>
        )}
      </div>
    </header>
  );
}