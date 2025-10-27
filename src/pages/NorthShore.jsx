import React from "react";
import { Link } from "react-router-dom";
import "@/styles/regional.css";
import northShoreImage from "@/assets/images/northshore.webp";
import pineTree from "@/assets/images/pine-tree.png";

// BADGE IMAGES
import bearHeadBadge from "@/assets/images/badge-bearheadlake.webp";
import cascadeBadge from "@/assets/images/badge-lookoutmountain.webp";
import georgeCrosbyBadge from "@/assets/images/badge-manitoupark.webp";
import grandPortageBadge from "@/assets/images/badge-pigeonriver.webp";
import jayCookeBadge from "@/assets/images/badge-jaycooke.webp";
import kettleBadge from "@/assets/images/badge-dkettle.webp";
import splitRockBadge from "@/assets/images/badge-twoharbors.webp";
import superiorTrailBadge from "@/assets/images/badge-gooseberry.webp";
import temperanceBadge from "@/assets/images/badge-temperanceriver.webp";
import tettegoucheBadge from "@/assets/images/badge-highfalls.webp";

export default function NorthShore() {
  const hikes = [
    {
      park: "Bear Head Lake State Park",
      trail: "Bear Head Lake",
      address: "9301 Bear Head State Park Rd, Ely, MN 55731",
      path: "/trails/north-shore/bear-head",
      badge: bearHeadBadge,
    },
    {
      park: "Cascade River State Park",
      trail: "Lookout Mountain",
      address: "3481 W Highway 61, Lutsen, MN 55612",
      path: "/trails/north-shore/cascade-river",
      badge: cascadeBadge,
    },
    {
      park: "George H. Crosby State Park",
      trail: "Manitou Park",
      address: "Benson Lake Loop, 7616 Co Hwy 7, Finland, MN 55603",
      path: "/trails/north-shore/george-crosby",
      badge: georgeCrosbyBadge,
    },
    {
      park: "Grand Portage State Park",
      trail: "High Falls (Pigeon River)",
      address: "9393 East Highway 61, Grand Portage, MN 55605",
      path: "/trails/north-shore/grand-portage",
      badge: grandPortageBadge,
    },
    {
      park: "Jay Cooke State Park",
      trail: "Silver Creek Trail",
      address: "780 East Highway 210, Carlton, MN 55718",
      path: "/trails/north-shore/jay-cooke",
      badge: jayCookeBadge,
    },
    {
      park: "Judge C.R. Magney State Park",
      trail: "Devil's Kettle Trail",
      address: "4051 East Highway 61, Grand Marais, MN 55604",
      path: "/trails/north-shore/kettle-trail",
      badge: kettleBadge,
    },
    {
      park: "Split Rock Lighthouse State Park",
      trail: "Two Harbors",
      address: "3755 Split Rock Lighthouse Rd, Two Harbors, MN 55616",
      path: "/trails/north-shore/split-rock",
      badge: splitRockBadge,
    },
    {
      park: "Superior Hiking Trail",
      trail: "Gooseberry Falls",
      address: "3206 Highway 61, Two Harbors, MN 55616",
      path: "/trails/north-shore/superior-trail",
      badge: superiorTrailBadge,
    },
    {
      park: "Temperance River State Park",
      trail: "River Gorge Trail",
      address: "7620 West Highway 61, Schroeder, MN 55613",
      path: "/trails/north-shore/temperance-river",
      badge: temperanceBadge,
    },
    {
      park: "Tettegouche State Park",
      trail: "High Falls",
      address: "5702 Highway 61, Silver Bay, MN 55614",
      path: "/trails/north-shore/tettegouche-trail",
      badge: tettegoucheBadge,
    },
  ];

  return (
    <div className="region-container">
      <div id="top" aria-hidden="true"></div>

      <div className="metro-header northshore">
        <h1>North Shore</h1>
        <p>
          From Duluth to Grand Marais, hike the rugged cliffs and forests that hug Lake Superior — 
          Minnesota’s most breathtaking shoreline.
        </p>
      </div>

      <div className="metro-image-wrapper">
        <img
          src={northShoreImage}
          alt="North Shore cliffs and Lake Superior"
          className="metro-image"
        />
      </div>

      <div className="hikes-list">
        <div className="hikes-list-header">
          <img src={pineTree} alt="pine tree icon" className="pine-icon-large" />
          <h2 className="hikes-list-title">North Shore Hikes & Badges</h2>
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
