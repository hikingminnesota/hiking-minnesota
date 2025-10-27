import React from "react";
import { Link } from "react-router-dom";
import "@/styles/regional.css";
import metroImage from "@/assets/images/pexels-thomas-parker-1272388137-32911264.webp";
import pineTree from "@/assets/images/pine-tree.png";

// BADGE IMAGES 
import aftonBadge from "@/assets/images/badge-saintcroixbluffs.webp";
import fortSnellingBadge from "@/assets/images/badge-fortsnelling.webp";
import lebanonBadge from "@/assets/images/badge-lebanonhills.webp";
import lowryBadge from "@/assets/images/badge-lowrynature.webp";
import minnehahaBadge from "@/assets/images/badge-minnehahapark.webp";
import minnesotaValleyBadge from "@/assets/images/badge-rivervalleyhike.webp";
import mississippiBadge from "@/assets/images/badge-mississippinational.webp";
import murphyBadge from "@/assets/images/badge-murphyhanrehan.webp";
import riversideBadge from "@/assets/images/badge-obrienstatepark.webp";
import glacialBadge from "@/assets/images/badge-glacialpotholes.webp";

export default function Metro() {
  const hikes = [
    {
      park: "Afton State Park",
      trail: "St. Croix Bluffs",
      address: "6959 Peller Ave S, Hastings, MN 55033",
      path: "/trails/twin-cities-metro/afton-state",
      badge: aftonBadge,
    },
    {
      park: "Fort Snelling State Park",
      trail: "Pike Island Trail",
      address: "101 Snelling Lake Rd, St Paul, MN 55111",
      path: "/trails/twin-cities-metro/fort-snelling",
      badge: fortSnellingBadge,
    },
    {
      park: "Interstate State Park",
      trail: "Glacial Potholes Trail",
      address: "307 Milltown Rd, Taylors Falls, MN 55084",
      path: "/trails/twin-cities-metro/glacial-potholes",
      badge: glacialBadge,
    },
    {
      park: "Lebanon Hills Park",
      trail: "Main Trail - West Trailhead",
      address: "4801 Johnny Cake Ridge Rd, Eagan, MN 55122",
      path: "/trails/twin-cities-metro/lebanon-hills",
      badge: lebanonBadge,
    },
    {
      park: "Lowry Nature Center",
      trail: "Nature Loop Trail",
      address: "7025 Nature Center Drive, Victoria, MN 55386",
      path: "/trails/twin-cities-metro/lowry-nature",
      badge: lowryBadge,
    },
    {
      park: "Minnehaha Creek Trail",
      trail: "Falls to River Trail",
      address: "4801 S Minnehaha Dr, Minneapolis, MN 55417",
      path: "/trails/twin-cities-metro/minnehaha-creek",
      badge: minnehahaBadge,
    },
    {
      park: "Minnesota Valley State Trail",
      trail: "River Valley Hike (Bloomington Segment)",
      address: "10110 Old Cedar Avenue S, Bloomington, MN 55425",
      path: "/trails/twin-cities-metro/minnesota-valley",
      badge: minnesotaValleyBadge,
    },
    {
      park: "Mississippi National River And Recreation Area",
      trail: "(Bridal Veil Falls Section)",
      address: "1238 East River Parkway, Minneapolis, MN 55414",
      path: "/trails/twin-cities-metro/mississippi-national",
      badge: mississippiBadge,
    },
    {
      park: "Murphy–Hanrehan Park Reserve",
      trail: "MTB Trailhead",
      address: "15563 Murphy Lake Blvd, Prior Lake, MN, 55372",
      path: "/trails/twin-cities-metro/murphy-hanrehan",
      badge: murphyBadge,
    },
    {
      park: "O'Brien State Park",
      trail: "St. Croix Riverside Trail",
      address: "16821 O'Brien Trail N, Marine on St Croix, MN 55047",
      path: "/trails/twin-cities-metro/riverside-trail",
      badge: riversideBadge,
    },
  ];

  return (
    <div className="region-container">
      <div id="top" aria-hidden="true"></div>

      <div className="metro-header">
        <h1>Twin Cities Metro</h1>
        <p>
          Welcome to the heart of Minnesota — where city meets nature. Explore waterfalls,
          river trails, and forested escapes across the Minneapolis–St. Paul area.
        </p>
      </div>

      <div className="metro-image-wrapper">
        <img
          src={metroImage}
          alt="Spoonbridge and Cherry sculpture in Minneapolis Sculpture Garden"
          className="metro-image"
        />
      </div>

      <div className="hikes-list">
        <div className="hikes-list-header">
          <img src={pineTree} alt="pine tree icon" className="pine-icon-large" />
          <h2 className="hikes-list-title">Metro Area Hikes & Badges</h2>
        </div>

        <ul className="hike-list">
          {hikes.map((hike, index) => (
            <li key={index} className="hike-list-item-wide">
              <img
                src={hike.badge}
                alt={`${hike.trail} badge`}
                className="hike-badge-medium"
              />
              <div className="hike-info">
                <Link to={hike.path} className="hike-link-wide">
                  <strong>{hike.park}</strong> – {hike.trail}
                </Link>
                <p className="hike-address">{hike.address}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="back-button-container">
          <Link to="/" className="back-button">← Back to Main Menu</Link>
        </div>
      </div>
    </div>
  );
}
