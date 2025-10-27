import React from "react";
import "../styles/privacy.css";

export default function Privacy() {
  return (
    <main className="privacy-container">
      {/* Header */}
      <h1 className="privacy-header">Privacy Policy</h1>

      <p className="privacy-date">
        <strong>Effective Date:</strong> September 29, 2025
      </p>

      <p>
        This page explains in plain language what data we collect, why we collect it, and how we use it.
      </p>

      {/* What We Collect */}
      <h2>What We Collect</h2>
      <ul>
        <li>
          <strong>Basic Site Analytics:</strong> We use Google Analytics to understand
          how many people visit the site and which pages are popular. Google Analytics
          sets cookies in your browser to make this possible.
        </li>
        <li>
          <strong>Login Information:</strong> If you log in, we know your Google ID.
          We don’t ever see your password — that stays between you and Google.
        </li>
        <li>
          <strong>Location for Badges:</strong> When you try to earn a badge, we check
          your location at that moment. Even if you’re too far away from the trailhead
          to earn the badge, your location at the attempt is recorded.  We don't continue
          to track your location after you click on the button.  
          <em> (Don’t worry — location distances were set up to be generous. You don’t need to be standing
          right on the trailhead sign to earn a badge.)</em>
        </li>
        <li>
          <strong>Badge Records:</strong> If you earn a badge, we tie the following information to your Google login:
          <ul>
            <li>The name of the badge(s) you earned</li>
            <li>The date you earned the badge(s)</li>
          </ul>
        </li>
      </ul>

      {/* What We Don’t Do */}
      <h2>What We Don’t Do</h2>
      <ul>
        <li>We don’t sell your data to anyone.</li>
        <li>We don’t share your data, outside of the data that we use for Google - we do use Google for login information, and Google Analytics to track how many people visit the website.</li>
        <li>We don't know your location (other than the moment you click on the button to try for a badge).</li>
        <li>After you click on the button to try for a badge, we don't continue to ask the browser for your location afterwards-- the check is a one-time thing which only runs at the moment the button is pushed.</li>
      </ul>

      {/* Why We Collect */}
      <h2>Why Do We Use Google At All?</h2>
      <ul>
        <li>We have to have some kind of name/identity to attach your badges to.</li>
        <li>Google Analytics tells us how many people are visiting the website, and which individual webpages are getting the most attention.</li>
      </ul>

      {/* Cookies */}
      <h2>Cookies</h2>
      <p>
        Google Analytics sets cookies to track visits and traffic. You can disable cookies
        in your browser if you’d rather not be included in analytics. The site will still
        work, though badge earning and login may require some cookies.
      </p>

      {/* Updates */}
      <h2>Updates</h2>
      <p>If this policy changes in the future, we’ll update it here.</p>

      {/* Back Button */}
      <button onClick={() => window.history.back()} className="privacy-back-btn">
        ← Back
      </button>
    </main>
  );
}
