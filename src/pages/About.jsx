import React, { useEffect } from "react";
import "../styles/about.css";
import x1 from "../assets/images/x1.webp";
import codepiece from "../assets/images/code-piece.webp";

export default function About() {
  // Trigger the client-side decoder after React finishes rendering
  useEffect(() => {
    if (window.__tapRenderEmail) {
      window.__tapRenderEmail();
    }
  }, []);

  return (
    <div className="about-container">
      {/* Top Image */}
      <img src={x1} alt="Hiking and Badges note" className="about-image" />

      {/* Main Content */}
      <main className="about-content">
        {/* About Section */}
        <h2 className="about-heading">About Hiking Minnesota</h2>
        <div className="about-section">
          <p>Hi there! My name is Matthew. I created this website. I'm a Minnesotan who loves hiking, and I wanted to create a free resource for hiking fans.</p>
          <p>I had the idea for this site a couple of years ago.   I had a random idea one day to create something with "hiking + badges", and I actually wrote a note to myself to remember it.</p>
          <p>Years ago, back when Foursquare was new and exciting, I was spending hours and hours every week trying to collect Foursquare badges.</p>   
          <p>At the time, I felt the same way about Foursquare badges that some people feel about Pokemon;  I wanted to collect everything.</p>
          <p>I have so much nostalgia for that era in my life.   It brings back a lot of memories thinking about 2010, 2011.</p>
          <p>This website is a hybrid of my nostalgia for 2010-era Foursquare and my love for hiking.</p>
        </div>

        {/* Explanation Of Badge Geolocation */}
        <h2 className="about-heading">How Does Awarding Badges Work?</h2>
        <div className="about-section">
          <p>
            When you try to earn a badge, the website runs this line:   
          </p>
          <p>
          <img src={codepiece} alt="Piece of code" className="about-image" style={{ width: "80%", maxWidth: "800px", margin: "0 auto", display: "block" }}/>
          </p>
          <p>
            That snippet of code queries the browser on your mobile device or tablet for your geolocation, which we compare to the latitude/longitude coordinates for the hike trailhead.
          </p>
          <p>
            If you're within a mile and half of the trailhead, you get the badge.
          </p>
          <p>
            After you click on the button to try for a badge, we don't continue to ask the browser for your location afterwards.  The location check is a one-time thing which only runs at the moment the button is pushed.
          </p>
        </div>

          {/* Explanation Of Badge Design */}
        <h2 className="about-heading">Will You Add More Hikes And More Badges?</h2>
        <div className="about-section">
          <p>
            The current goal is yes, more hikes and more badges will be added to this site.</p> 
          <p>
            There's no current timeframe for when, but additional content is indeed the goal.</p>
        </div>

        {/* FreeGPTPrompts Section */}
        <h2 className="about-heading">FreeGPTPrompts.org</h2>
        <div className="about-section">
          <p>
            I created another website, named {" "}
            <a href="https://freegptprompts.org" target="_blank" rel="noopener noreferrer">
              FreeGPTPrompts.org
            </a>
            , a utility tool website for people who are beginning the process of learning about AI and want 
            lots of free prompts to try.
          </p>
          <p>
            When I started learning about AI, I wanted to try a huge variety of different prompts, to see what
            the AI was capable of.
          </p>
          <p>
            I wasn’t able to find any website with a variety of free prompts. Every site had prompts
            locked behind a paywall, or being sold as "prompt packs" (which is stupid).
          </p>
          <p>Free GPT Prompts was my attempt to create the utility tool that I needed.</p>
        </div>

          {/* Penguin Cash Section */}
        <h2 className="about-heading">Penguin Cash</h2>
        <div className="about-section">
          <p>
            My newest project is{" "}
            <a href="https://penguincash.org" target="_blank" rel="noopener noreferrer">
              Penguin Cash
            </a>
            , a completely free, privacy-first personal finance app for Windows, Mac, and Linux.
          </p>
          <p>
            Where is your money going?  How much are you spending every month on various items?  Years ago, you could buy software to track this information.   Now, companies want you to pay a monthly fee and subscribe.  I think that's garbage.
          </p>
          <p>
          Penguin Cash helps track your personal finances for free.  No cost to download, no subscription, no ads.   It does not track you or sell your data.   It's entirely free.   
          </p>
        </div>

        {/* --- E-mail Obfuscation System (DO NOT DELETE) --- */}
        <h2 className="about-heading">Contact Info</h2>
        <div className="about-section about-contact">
          <p>
            Inquiries can be sent to{" "}
            <span
              id="zkx"
              data-a="cGR3d2toeg=="
              data-b="a2xubHFqcGxxcWh2cndk"
              data-c="ZnJw"
              aria-label="email placeholder"
            >
              loading contact...
            </span>
          </p>
        </div>

        {/* Back Button */}
        <button className="about-back-btn" onClick={() => window.history.back()}>
          ← Back
        </button>
      </main>
    </div>
  );
}