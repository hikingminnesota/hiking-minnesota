import React from "react";
import "../styles/cookies.css";

export default function Cookies() {
  return (
    <main className="cookies-container">
      {/* Header */}
      <h1 className="cookies-header">Cookie Policy</h1>

      <p className="cookies-date">
        <strong>Effective Date:</strong> September 29, 2025
      </p>

      <p>
        This page explains what cookies we use and why.
      </p>

      {/* What Are Cookies */}
      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files saved in your browser. They help websites work
        properly and remember information.
      </p>

      {/* Cookies We Use */}
      <h2>Cookies We Use</h2>
      <ul>
        <li>
          <strong>Google Analytics Cookies:</strong> We use Google Analytics to
          understand how many people visit the site and which pages are most popular.
        </li>
        <li>
          <strong>Login Cookies:</strong> If you log in, cookies help us know who you
          are during your session.
        </li>
        <li>
          <strong>Badge Cookies (Session):</strong> When you attempt or earn a badge,
          cookies might temporarily remember your session.
        </li>
      </ul>

      {/* How to Control Cookies */}
      <h2>How to Control Cookies</h2>
      <p>
        You can disable cookies in your browser settings. If you disable cookies,
        Hiking Minnesota will still work, but:
      </p>
      <ul>
        <li>Analytics data won’t include your visit</li>
        <li>Some features (like login and badge tracking) may not work correctly</li>
      </ul>

      {/* No Sneaky Business */}
      <h2>No Sneaky Business</h2>
      <p>
        We don’t use cookies for advertising. We don’t sell your data. Cookies are only
        here to make the site functional and to help us understand how people use it.
      </p>

      {/* Updates */}
      <h2>Updates</h2>
      <p>If our cookie use changes, we’ll update this page.</p>

      {/* Back Button */}
      <button onClick={() => window.history.back()} className="cookies-back-btn">
        ← Back
      </button>
    </main>
  );
}
