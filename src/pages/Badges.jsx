// src/pages/Badges.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/badges.css";

import foursquar3 from "../assets/images/foursquar3.webp";
import popup from "../assets/images/popup.webp";
import privacy from "../assets/images/privacy.jpg";
import collectbadge from "../assets/images/collect.webp";

export default function BadgesPromo() {
  return (
    <main className="badges-container">
      {/* Nostalgia Image */}
      <img
        src={foursquar3}
        alt="Classic Foursquare Badges From 2011"
        className="badge-image"
      />

      <h1>Remember 2011?</h1>
      <p>Foursquare was one of the hottest and top-rated apps on the App Store.</p>
      <p>You’d check in at coffee shops or other places and unlock badges, which you could collect.</p>
      <p>Hiking Minnesota would like to bring some of those 2011 vibes back.</p>

      {/* Popup Image */}
      <img src={popup} alt="Try for a badge popup" className="badge-popup" />

      <h1>How Does It Work?</h1>
      <p>Physically locate yourself at one of our fifty listed hikes.</p>
      <p>Open up “Hiking Minnesota” on your mobile device or tablet.</p>
      <p>Click on “Sign In With Google” and complete the sign-in process.</p>
      <p>Once signed in, click on “Badge Collection” in the header (it appears after sign-in).</p>
      <p>When you see “Do you want to try for a badge?”, click “Yes.”</p>
      <p>If you are within one mile of the trailhead, you earn the badge!</p>
      <p>Sign in with Google any time you like and click on "Badge Collection" to see your earned badges.</p>

      {/* Placeholder Badge */}
      <img
        src={collectbadge}
        alt="Woman shouting to collect 50 badges"
        className="badge-placeholder"
      />

      <h1>Badge Catalog</h1>
      <p>
        If you're interested in seeing every badge you can collect,&nbsp;
        <Link to="/badge-catalog" className="text-blue-600 hover:underline">
          <strong>here is a catalog of all fifty badges.</strong>
        </Link>
      </p>

      {/* Privacy Section */}
      <img
        src={privacy}
        alt="We value your right to privacy"
        className="badge-privacy"
      />

      <h1>Your Privacy</h1>
      <p>We value your privacy.</p>
      <p>We don't know your Google password.  That stays between you and Google.   We never see it.</p>
      <p>We only check your location once, at the exact moment you click “Yes” under "Do you want to try for a badge?"</p>
      <p>We don’t continue checking your location, and we don’t sell your location data or your Google ID.</p>
      <p>Hiking Minnesota only stores what’s necessary to track your earned badges — your name (from Google), your badges, and the date you earned them.   That's it.   That's the full extent of the data we store.</p>
      <p>All data about what badges you have is stored in a private, permission-locked database, and can only be accessed by you.</p>
      <p>We don’t sell data -- to anyone.</p>
      <p>Hiking Minnesota is for hikers, not for advertisers.</p>
      <p>I created this website to be a fan site for hiking fans, not a data honeypot for Larry in Customer Acquisition.</p>

      {/* Back Button */}
      <button className="badges-back-btn" onClick={() => window.history.back()}>
        ← Back
      </button>
    </main>
  );
}