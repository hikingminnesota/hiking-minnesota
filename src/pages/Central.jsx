import React from "react";
import { Link } from "react-router-dom";
import "@/styles/regional.css";
import centralImage from "@/assets/images/central.webp";
import pineTree from "@/assets/images/pine-tree.png";

// BADGE IMAGES
import boardwalkBadge from "@/assets/images/badge-boardwalktrail.webp";
import crowWingBadge from "@/assets/images/badge-crowwing.webp";
import lakeCarlosBadge from "@/assets/images/badge-lakecarlos.webp";
import lakeMariaBadge from "@/assets/images/badge-lakemaria.webp";
import inspirationPeakBadge from "@/assets/images/badge-inspirationpeak.webp";
import itascaLoopBadge from "@/assets/images/badge-lakeitascaloop.webp";
import charlesLindberghBadge from "@/assets/images/badge-lindberghpark.webp";
import kettleLakeBadge from "@/assets/images/badge-glaciallakes.webp";
import militaryRoadBadge from "@/assets/images/badge-oldmilitaryroad.webp";
import mountTomBadge from "@/assets/images/badge-sibleystatepark.webp";

export default function Central() {
  const hikes = [
    {
      park: "Boardwalk Trail",
      trail: "Bemidji State Park",
      address: "3401 State Park Rd NE, Bemidji, MN 56601",
      path: "/trails/central/boardwalk-trail",
      badge: boardwalkBadge,
    },
    {
      park: "Charles A. Lindbergh State Park",
      trail: "Lindbergh Trail",
      address: "1615 Lindbergh Dr S, Little Falls, MN 56345",
      path: "/trails/central/charles-lindbergh",
      badge: charlesLindberghBadge,
    },
    {
      park: "Crow Wing State Park",
      trail: "Old Wadena Trail",
      address: "3124 State Park Rd, Brainerd, MN 56401",
      path: "/trails/central/crow-wing",
      badge: crowWingBadge,
    },
    {
      park: "Glacial Lakes State Park",
      trail: "Kettle Lake Trail",
      address: "25022 County Road 41, Starbuck, MN 56381",
      path: "/trails/central/kettle-lake",
      badge: kettleLakeBadge,
    },    
    {
      park: "Inspiration Peak State Wayside",
      trail: "Summit Trail",
      address: "43749 120th Street, Clitherall, MN 56524",
      path: "/trails/central/inspiration-peak",
      badge: inspirationPeakBadge,
    },
    {
      park: "Lake Carlos State Park",
      trail: "Hidden Lake Trail",
      address: "2601 County Road 38 NE, Carlos, MN 56319",
      path: "/trails/central/lake-carlos",
      badge: lakeCarlosBadge,
    },
    {
      park: "Lake Itasca State Park",
      trail: "Lake Itasca Loop",
      address: "36750 Main Park Dr, Park Rapids, MN 56470",
      path: "/trails/central/itasca-loop",
      badge: itascaLoopBadge,
    },
    {
      park: "Lake Maria State Park",
      trail: "Lake Maria Trail",
      address: "11411 Clementa Ave NW, Monticello, MN 55362",
      path: "/trails/central/lake-maria",
      badge: lakeMariaBadge,
    },
    {
      park: "Savanna Portage State Park",
      trail: "Old Military Road",
      address: "55626 Lake Place, McGregor, MN 55760",
      path: "/trails/central/military-road",
      badge: militaryRoadBadge,
    },
    {
      park: "Sibley State Park",
      trail: "Mount Tom Trail",
      address: "800 Sibley Park Rd NE, New London, MN 56273",
      path: "/trails/central/mount-tom",
      badge: mountTomBadge,
    },
  ];

  return (
    <div className="region-container">
      <div id="top" aria-hidden="true"></div>

      <div className="metro-header central">
        <h1>Central Minnesota</h1>
        <p>
          Welcome to the heart of Minnesota — where rolling prairies meet peaceful woods,
          and every trail carries a story of history and nature.
        </p>
      </div>

      <div className="metro-image-wrapper">
        <img
          src={centralImage}
          alt="Central Minnesota landscape of lakes and forests"
          className="metro-image"
        />
      </div>

      <div className="hikes-list">
        <div className="hikes-list-header">
          <img src={pineTree} alt="pine tree icon" className="pine-icon-large" />
          <h2 className="hikes-list-title">Central Hikes & Badges</h2>
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