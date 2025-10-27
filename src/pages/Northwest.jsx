import React from "react";
import { Link } from "react-router-dom";
import "@/styles/regional.css";
import northwestImage from "@/assets/images/northwest.webp";
import placeholderBadge from "@/assets/images/k1.webp";
import pineTree from "@/assets/images/pine-tree.png";
import buffaloBadge from "@/assets/images/badge-buffaloriver.webp";
import itascaBadge from "@/assets/images/badge-headwaterstrail.webp";
import bronsonBadge from "@/assets/images/badge-damtrail.webp";
import basswoodBadge from "@/assets/images/badge-basswoodtrail.webp";

export default function Northwest() {
  const hikes = [
    {
      park: "Buffalo River State Park",
      trail: "Prairie Trail",
      address: "565 155th St South, Glyndon, MN 56547",
      path: "/trails/northwest/buffalo-river",
      badge: buffaloBadge,
    },
    {
      park: "Itasca State Park",
      trail: "Headwaters Trail",
      address: "36750 Main Park Drive, Park Rapids, MN 56470",
      path: "/trails/northwest/headwaters-trail",
      badge: itascaBadge,
    },
    {
      park: "Lake Bemidji State Park",
      trail: "Basswood Trail",
      address: "39721 Park Entrance Rd, Pelican Rapids, MN 56572",
      path: "/trails/northwest/basswood-trail",
      badge: basswoodBadge,
    },
    {
      park: "Lake Bronson State Park",
      trail: "Dam Trail",
      address: "3793 230th Street, Lake Bronson, MN 56734",
      path: "/trails/northwest/lake-bronson",
      badge: bronsonBadge,
    },
  ];

  return (
    <div className="region-container">
      <div id="top" aria-hidden="true"></div>

      <div className="metro-header northwest">
        <h1>Northwest</h1>
        <p>
          Venture north into Minnesota’s lake country — where forests meet
          prairies and the Mississippi River begins its journey. Quiet beauty
          and wide-open spaces await.
        </p>
      </div>

      <div className="metro-image-wrapper">
        <img
          src={northwestImage}
          alt="Northwest Minnesota lake and forest scene"
          className="metro-image"
        />
      </div>

      <div className="hikes-list">
        <div className="hikes-list-header">
          <img src={pineTree} alt="pine tree icon" className="pine-icon-large" />
          <h2 className="hikes-list-title">Northwest Hikes & Badges</h2>
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