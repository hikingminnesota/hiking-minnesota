import React from "react";
import "../styles/terms.css";

export default function Terms() {
  return (
    <main className="terms-container">
      {/* Header */}
      <h1 className="terms-header">Terms of Service</h1>

      <p className="terms-date">
        <strong>Effective Date:</strong> September 29, 2025
      </p>

      <p>
        Welcome to <em>Hiking Minnesota</em>! By using this site, you agree to these Terms of Service. 
      </p>

      {/* Section 1 */}
      <h2>1. Who Can Use This Site</h2>
      <p>
        Hiking Minnesota is for people who agree to use the site responsibly.
      </p>

      {/* Section 2 */}
      <h2>2. Fair Use</h2>
      <p>We built Hiking Minnesota for hikers, not hackers. Please don’t:</p>
      <ul>
        <li>Try to cheat or exploit the badge system</li>
        <li>Attack or disrupt the site (e.g., hacking, scraping, automated abuse)</li>
        <li>Pretend to be someone else</li>
        <li>Try to login to the site with someone else's Google ID</li>
      </ul>

      {/* Section 3 */}
      <h2>3. Accounts & Badges</h2>
      <ul>
        <li>If you log in with Google, we’ll know your Google ID.</li>
        <li>When you earn a badge, we’ll store the badge name and the date you earned it.</li>
        <li>When you attempt to earn a badge, we’ll check your location at that moment (but not afterwards).</li>
      </ul>
      <p>Badges are meant to be fun and encouraging — please enjoy them, but don’t misuse them.</p>

      {/* Section 4 */}
      <h2>4. Trail Info & Accuracy</h2>
      <p>
        We try our best to make Hiking Minnesota accurate and useful. But trails change, and bad weather happens.
        All trail, map, and badge information is provided “as is,” without guarantees. Always hike responsibly and be prepared.
      </p>

      {/* Section 5 */}
      <h2>5. Liability</h2>
      <p>
        Hiking is an outdoor activity with risks. Hiking Minnesota isn’t responsible for injuries, lost items,
        or anything that happens on your hike. Please stay safe and use good judgment on the trail.
      </p>

      {/* Section 6 */}
      <h2>6. Changes to These Terms</h2>
      <p>
        We may update these Terms of Service. If we make changes, we’ll post the updated version here, as well as the date we updated it.
      </p>

      {/* Back Button */}
      <button onClick={() => window.history.back()} className="terms-back-btn">
        ← Back
      </button>
    </main>
  );
}
