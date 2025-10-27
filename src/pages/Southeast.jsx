import React from "react";
import { Link } from "react-router-dom";
import "@/styles/regional.css";
import southeastImage from "@/assets/images/southeast.webp";
import pineTree from "@/assets/images/pine-tree.png";

// BADGE IMAGES
import bigIslandBadge from "@/assets/images/badge-bigisland.webp";
import blufftopBadge from "@/assets/images/badge-blufftop.webp";
import chimneyRockBadge from "@/assets/images/badge-chimneyrock.webp";
import hiddenFallsBadge from "@/assets/images/badge-hiddenfalls.webp";
import kingsBluffBadge from "@/assets/images/badge-kingsbluff.webp";
import lakeLoopBadge from "@/assets/images/badge-lakeloop.webp";
import mountCharityBadge from "@/assets/images/badge-mountcharity.webp";
import mysteryCaveBadge from "@/assets/images/badge-mysterycave.webp";
import riceLakeBadge from "@/assets/images/badge-ricelake.webp";
import singingHillsBadge from "@/assets/images/badge-singinghills.webp";

export default function Southeast() {
  const hikes = [
    {
      park: "Big Island Trail",
      trail: "Myre–Big Island State Park",
      address: "Big Island Loop, 19499 790th Avenue, Albert Lea, MN 56007-7022",
      path: "/trails/southeast/big-island",
      badge: bigIslandBadge,
    },
    {
      park: "Bluff Top Trail",
      trail: "Frontenac State Park",
      address: "29223 County 28 Blvd, Frontenac, MN 55026",
      path: "/trails/southeast/blufftop-trail",
      badge: blufftopBadge,
    },
    {
      park: "Chimney Rock Trail",
      trail: "Beaver Creek Valley State Park",
      address: "19041 Highway 74, Altura, MN 55910",
      path: "/trails/southeast/chimney-rock",
      badge: chimneyRockBadge,
    },
    {
      park: "Hidden Falls Trail",
      trail: "Nerstrand Big Woods State Park",
      address: "9700 170th St E, Nerstrand, MN 55053",
      path: "/trails/southeast/hidden-falls",
      badge: hiddenFallsBadge,
    },
    {
      park: "Great River Bluffs State Park",
      trail: "Kings Bluff Trail",
      address: "43605 Kipp Drive, Winona, MN 55987",
      path: "/trails/southeast/kings-bluff",
      badge: kingsBluffBadge,
    },
    {
      park: "Lake Louise State Park",
      trail: "Lake Loop Trail",
      address: "12385 766th Avenue, Le Roy, MN 55951",
      path: "/trails/southeast/lake-loop",
      badge: lakeLoopBadge,
    },
    {
      park: "John A. Latsch State Park",
      trail: "Mount Charity Trail",
      address: "70007 Highway 61, Winona, MN  55987",
      path: "/trails/southeast/mount-charity",
      badge: mountCharityBadge,
    },
    {
      park: "Forestville–Mystery Cave State Park",
      trail: "Mystery Cave Trail",
      address: "Historic Forestville Trail, 21071 County Rd 118, Preston, MN  55965",
      path: "/trails/southeast/mystery-cave",
      badge: mysteryCaveBadge,
    },
    {
      park: "Rice Lake State Park",
      trail: "Rice Lake Loop",
      address: "Rice Lake State Park, Lake Trail, 8485 Rose Street, Owatonna, MN 55060",
      path: "/trails/southeast/rice-lake",
      badge: riceLakeBadge,
    },
    {
      park: "Sakatah Singing Hills State Trail",
      trail: "Singing Hills Trail",
      address: "50499 Sakatah Lake St Park Rd, Waterville, MN  56096",
      path: "/trails/southeast/singing-hills",
      badge: singingHillsBadge,
    },
  ];

  return (
    <div className="region-container">
      <div id="top" aria-hidden="true"></div>
      <div className="metro-header southeast">
        <h1>Southeast</h1>
        <p>
          Welcome to Minnesota’s bluff country — a landscape carved by rivers and time.
          Explore rolling hills, hidden caves, and scenic overlooks throughout the Southeast.
        </p>
      </div>

      <div className="metro-image-wrapper">
        <img
          src={southeastImage}
          alt="Southeast Minnesota bluffs and rivers"
          className="metro-image"
        />
      </div>

      <div className="hikes-list">
        <div className="hikes-list-header">
          <img src={pineTree} alt="pine tree icon" className="pine-icon-large" />
          <h2 className="hikes-list-title">Southeast Hikes & Badges</h2>
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
