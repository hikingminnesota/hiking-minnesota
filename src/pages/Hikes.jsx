// src/pages/Hikes.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hikes.css";
import regionColors from "../regionColors";
import tomFisk from "../assets/images/pexels-tomfisk-30709422.webp";
import jeffWiles from "../assets/images/pexels-jeff-wiles-2155751648-34152041.webp";
import MinnesotaMap from "../components/MinnesotaMap";
import pineTree from "../assets/images/pine-tree.png";

const Hikes = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  // Merge: full hike list from List Of Hikes.jsx
  const groups = [
    {
      region: "northshore",
      label: "North Shore",
      hikes: [
        { name: "Bear Head Lake State Park - Blueberry Hill Trail", path: "/trails/north-shore/bear-head" },
        { name: "Cascade River State Park - Lookout Mountain Trail", path: "/trails/north-shore/cascade-river" },
        { name: "George H. Crosby Manitou State Park - Benson Lake Loop", path: "/trails/north-shore/george-crosby" },
        { name: "Grand Portage State Park - High Falls Trail - Pigeon River", path: "/trails/north-shore/grand-portage" },
        { name: "Jay Cooke State Park - River View Trail", path: "/trails/north-shore/jay-cooke" },
        { name: "Judge C.R. Magney State Park - Devil's Kettle Trail", path: "/trails/north-shore/kettle-trail" },
        { name: "Split Rock Lighthouse State Park - Little Two Harbors Trail", path: "/trails/north-shore/split-rock" },
        { name: "Superior Hiking Trail - Gooseberry Falls To Split Rock Lighthouse", path: "/trails/north-shore/superior-trail" },
        { name: "Temperance River State Park - River Trail", path: "/trails/north-shore/temperance-river" },
        { name: "Tettegouche State Park - High Falls Trail", path: "/trails/north-shore/tettegouche-trail" },
      ],
    },
    {
      region: "metro",
      label: "Twin Cities Metro",
      hikes: [
        { name: "Afton State Park - St. Croix River Bluffs Trail", path: "/trails/twin-cities-metro/afton-state" },
        { name: "Carver Park Reserve - Lowry Nature Center Trails", path: "/trails/twin-cities-metro/lowry-nature" },
        { name: "Fort Snelling State Park - Pike Island Loop Trail", path: "/trails/twin-cities-metro/fort-snelling" },
        { name: "Interstate State Park - Glacial Potholes Trail", path: "/trails/twin-cities-metro/glacial-potholes" },
        { name: "Lebanon Hills Regional Park - Equestrian Hiking Trails", path: "/trails/twin-cities-metro/lebanon-hills" },
        { name: "Minnehaha Park - Minnehaha Creek Falls Trail", path: "/trails/twin-cities-metro/minnehaha-creek" },
        { name: "Minnesota Valley State Trail - Various Access Points", path: "/trails/twin-cities-metro/minnesota-valley" },
        { name: "Mississippi National River Trails - River and Recreation Area", path: "/trails/twin-cities-metro/mississippi-national" },
        { name: "Murphy-Hanrehan Park Reserve - Forest and Hills Hiking Trails", path: "/trails/twin-cities-metro/murphy-hanrehan" },
        { name: "William O'Brien State Park - Riverside Trail", path: "/trails/twin-cities-metro/riverside-trail" },
      ],
    },
    {
      region: "southeast",
      label: "Southeast",
      hikes: [
        { name: "Forestville Mystery Cave State Park - Historic Forestville Trail", path: "/trails/southeast/mystery-cave" },
        { name: "Frontenac State Park - Bluff Top Trail", path: "/trails/southeast/blufftop-trail" },
        { name: "Great River Bluffs State Park - Kings Bluff Trail", path: "/trails/southeast/kings-bluff" },
        { name: "John A. Latsch State Park - Mount Charity Trail", path: "/trails/southeast/mount-charity" },
        { name: "Lake Louise State Park - Lake Loop Trail", path: "/trails/southeast/lake-loop" },
        { name: "Myre Big Island State Park - Big Island Loop", path: "/trails/southeast/big-island" },
        { name: "Nerstrand Big Woods State Park - Hidden Falls Trail", path: "/trails/southeast/hidden-falls" },
        { name: "Rice Lake State Park - Lake Trail", path: "/trails/southeast/rice-lake" },
        { name: "Sakatah Lake State Park - Sakatah Singing Hills Trail (Paved)", path: "/trails/southeast/singing-hills" },
        { name: "Whitewater State Park - Chimney Rock Trail", path: "/trails/southeast/chimney-rock" },
      ],
    },
    {
      region: "central",
      label: "Central",
      hikes: [
        { name: "Charles A. Lindbergh State Park - Lindbergh Trails", path: "/trails/central/charles-lindbergh" },
        { name: "Crow Wing State Park - Old Wadena Trail", path: "/trails/central/crow-wing" },
        { name: "Glacial Lakes State Park - Kettle Lake Trail", path: "/trails/central/kettle-lake" },
        { name: "Inspiration Peak State Wayside - Summit Trail", path: "/trails/central/inspiration-peak" },
        { name: "Itasca State Park - Lake Itasca Loop", path: "/trails/central/itasca-loop" },
        { name: "Lake Bemidji State Park - Boardwalk Trail", path: "/trails/central/boardwalk-trail" },
        { name: "Lake Carlos State Park - Hiking Club Trail", path: "/trails/central/lake-carlos" },
        { name: "Lake Maria State Park - Hiking Trails", path: "/trails/central/lake-maria" },
        { name: "Savanna Portage State Park - Old Military Road Trail", path: "/trails/central/military-road" },
        { name: "Sibley State Park - Mount Tom Trail", path: "/trails/central/mount-tom" },
      ],
    },
    {
      region: "northwest",
      label: "Northwest",
      hikes: [
        { name: "Buffalo River State Park - Prairie Hiking Loop", path: "/trails/northwest/buffalo-river" },
        { name: "Lake Bronson State Park - Dam Trail", path: "/trails/northwest/lake-bronson" },
        { name: "Maplewood State Park - Basswood Trail", path: "/trails/northwest/basswood-trail" },
        { name: "Itasca State Park - Headwaters Trail", path: "/trails/northwest/headwaters-trail" },
      ],
    },
    {
      region: "western",
      label: "West & Southwest",
      hikes: [
        { name: "Big Stone Lake State Park - Meadowbrook Area Trails", path: "/trails/west-and-southwest/big-stone" },
        { name: "Blue Mounds State Park - Mound Trail", path: "/trails/west-and-southwest/blue-mounds" },
        { name: "Camden State Park - Redwood River Trail", path: "/trails/west-and-southwest/redwood-river" },
        { name: "Kilen Woods State Park - Des Moines River Trail", path: "/trails/west-and-southwest/kilen-woods" },
        { name: "Minneopa State Park - Minneopa Falls - Bison Trail", path: "/trails/west-and-southwest/minneopa-bison" },
        { name: "Pipestone National Monument - Circle Trail", path: "/trails/west-and-southwest/pipestone-national" }
      ],
    },
  ];

  return (
    <div className="hikes-page">
      <section className="flex flex-col gap-8 items-center mb-20">
        <img src={tomFisk} alt="Kellogg, Minnesota" className="w-full max-w-5xl rounded-lg shadow-lg object-cover" />
        <img src={jeffWiles} alt="Center City, Minnesota" className="w-full max-w-5xl rounded-lg shadow-lg object-cover" />
      </section>

      <div className="hiking-title flex items-center justify-center gap-3 mb-2">
        <img
          src={pineTree}
          alt="Hiking Minnesota logo"
          style={{
            width: "73px",
            height: "73px",
            filter: "drop-shadow(0 0 1px rgba(0,0,0,0.3))",
          }}
        />
        <h1 className="text-3xl font-bold text-center">hiking minnesota</h1>
      </div>

      <div className="map-block text-center">
        <p className="text-gray-600 mt-2 mb-4">Select a region on the map or browse hikes below.</p>
        <MinnesotaMap />
      </div>

      <div className="hikes-list">
        {groups.map((group) => (
          <div
            key={group.region}
            className="hike-section mb-8 rounded-xl shadow-md transition-transform transform hover:scale-105"
            style={{
              backgroundColor: regionColors[group.label] || "#EEE",
              padding: "1.5rem",
            }}
          >
            <h2 className="region-title font-semibold text-lg mb-3">{group.label}</h2>
            <ul>
              {group.hikes.map((hike, idx) => (
                <li key={idx}>
                  <Link
                    to={hike.path}
                    className="hover:underline hover:font-medium transition-colors duration-150"
                  >
                    {hike.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hikes;
