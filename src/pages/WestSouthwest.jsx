import React from "react";
import { Link } from "react-router-dom";
import "@/styles/regional.css";
import westSouthwestImage from "@/assets/images/westsouthwest.webp";
import pineTree from "@/assets/images/pine-tree.png";

// BADGE IMAGES 
import bigstoneBadge from "@/assets/images/badge-bigstonelake.webp";
import bluemoundsBadge from "@/assets/images/badge-bluemounds.webp";
import redwoodriverBadge from "@/assets/images/badge-redwoodriver.webp";
import kilenwoodsBadge from "@/assets/images/badge-kilenwoods.webp";
import minneopafallsBadge from "@/assets/images/badge-minneopafalls.webp";
import pipestoneBadge from "@/assets/images/badge-pipestonenationals.webp";

export default function WestSouthwest() {
  const hikes = [
      {
      park: "Big Stone Lake State Park",
      trail: "Meadowbrook Area Trails",
      address: "35889 Meadowbrook State Park Rd, Ortonville, MN 56278",
      path: "/trails/west-and-southwest/big-stone",
      badge: bigstoneBadge,
    },
      {
      park: "Blue Mounds State Park",
      trail: "Mound Trail",
      address: "1410 161st St, Luverne, MN 56156",
      path: "/trails/west-and-southwest/blue-mounds",
      badge: bluemoundsBadge,
    },
    {
      park: "Kilen Woods State Park",
      trail: "Des Moines River Trail",
      address: "50200 860th Street, Lakefield, MN 56150",
      path: "/trails/west-and-southwest/kilen-woods",
      badge: kilenwoodsBadge,
    },
    {
      park: "Minneopa State Park",
      trail: "Minneopa Falls - Bison Trail",
      address: "54497 Gadwall Rd, Mankato, MN 56001",
      path: "/trails/west-and-southwest/minneopa-bison",
      badge: minneopafallsBadge,
    },
    {
      park: "Pipestone National Monument",
      trail: "Circle Trail",
      address: "36 Reservation Avenue, Pipestone, MN 56164",
      path: "/trails/west-and-southwest/pipestone-national",
      badge: pipestoneBadge,
    },
    {
      park: "Redwood River Trail",
      trail: "Camden State Park",
      address: "1897 Camden Park Rd, Lynd, MN 56157",
      path: "/trails/west-and-southwest/redwood-river",
      badge: redwoodriverBadge,
    },
  ];

  return (
    <div className="region-container">
      <div id="top" aria-hidden="true"></div>

      <div className="metro-header westsouthwest">
        <h1>West / Southwest</h1>
        <p>
          Explore Minnesota’s vast prairie landscapes, glacial ridges, and rocky outcrops —
          where sunsets stretch forever and every trail meets open sky.
        </p>
      </div>

      <div className="metro-image-wrapper">
        <img
          src={westSouthwestImage}
          alt="Prairie and rock formations of southwestern Minnesota"
          className="metro-image"
        />
      </div>

      <div className="hikes-list">
        <div className="hikes-list-header">
          <img src={pineTree} alt="pine tree icon" className="pine-icon-large" />
          <h2 className="hikes-list-title">West and Southwest Hikes & Badges</h2>
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
