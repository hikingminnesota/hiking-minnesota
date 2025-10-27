import React from "react";
import { Link } from "react-router-dom";
import { Map, Mountain, Clock, ArrowRight, Leaf } from "lucide-react";

import badgePlaceholder from "../../assets/images/badge-twoharbors.webp";
import trailheadStatic from "../../assets/images/map-norsh-splitrock.png";
import trailheadHero from "../../assets/images/Split-Rock-Dougtone.webp";
// 📝 Photo credit (for internal records only):
// Hero image: Photo by Dougtone via Wikimedia Commons 


// Icons for the stat cards
const TrailStatIcons = {
  Region: Map,
  Difficulty: Mountain,
  "Trail Distance": ArrowRight,
  "Estimated Hike Duration": Clock,
  "Elevation Gain": Mountain,
  "Best Season To Visit": Leaf,
};

// Core data points
const trailData = [
  { label: "Region", value: "North Shore" },
  { label: "Difficulty", value: "Easy to Moderate" },
  { label: "Trail Distance", value: "1.2 miles (loop)" },
  { label: "Estimated Hike Duration", value: "30 - 45 minutes" },
  { label: "Elevation Gain", value: "Around 80 feet (gentle climb from shore to overlooks)" },
  { label: "Best Season To Visit", value: "Late spring through fall" },
];

const StatCard = ({ label, value, icon: Icon }) => (
  <div className="flex flex-col items-start p-5 bg-white/90 rounded-2xl shadow-md border-l-4 border-lime-500 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
    <div className="flex items-center space-x-3 mb-1">
      <Icon className="w-6 h-6 text-lime-700" />
      <p className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
        {label}
      </p>
    </div>
    <p className="text-xl font-bold text-gray-900">{value}</p>
  </div>
);

export default function SplitRock() {
  const addressLink =
    "https://www.google.com/maps?q=Split+Rock+Lighthouse+State+Park,+3713+Split+Rock+Lighthouse+Rd,+Two+Harbors,+MN+55616";
  const addressText =
    "Split Rock Lighthouse State Park, 3713 Split Rock Lighthouse Rd, Two Harbors, MN 55616";
  const feesText = "Minnesota State Park vehicle permit ($7/day or $35/year)";

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="relative h-[80vh] max-h-[800px] flex items-center justify-center overflow-hidden">
        <img
          src={trailheadHero}
          alt="Split Rock Lighthouse overlooking Lake Superior"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="relative text-center px-6 z-10">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white leading-tight drop-shadow-lg">
            Split Rock Lighthouse State Park
          </h1>
          <p className="text-2xl sm:text-3xl font-medium text-lime-300 mt-4 tracking-wide">
            Little Two Harbors Trail
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main
        id="trail-details"
        className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-16 scroll-mt-24"
      >
        {/* Trail Overview */}
        <h2 className="text-4xl font-bold text-gray-900 mb-10 border-b-4 border-lime-300 pb-3">
          Trail Overview
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {trailData.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              icon={TrailStatIcons[stat.label] || Map}
            />
          ))}
        </div>

        {/* Main + Sidebar */}
        <div className="flex flex-col lg:flex-row lg:space-x-12 mb-20">
          {/* Left Text Column */}
          <div className="lg:w-2/3 space-y-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
              The Lighthouse, the Shoreline, and the Trail
            </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
              Photo above of Split Rock Lighthouse is courtesy of <a
    href="https://commons.wikimedia.org/wiki/File:Split_Rock_Lighthouse_-_Minnesota_-_15829762261.jpg"
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-blue-700 hover:text-blue-900"
  >
    Dougtone via Wikimedia Commons
  </a>
  {" "}(
  <a
    href="https://creativecommons.org/licenses/by-sa/2.0/deed.en"
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-blue-700 hover:text-blue-900"
  >
    CC ShareAlike 2.0 - Generic
  </a>
  ).
  </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This scenic trail explores the rugged Lake Superior
              shoreline and forests surrounding the iconic Split Rock Lighthouse.</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Short, accessible loops connect the visitor center, beaches, and
              overlooks of Little Two Harbors Bay.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Expect stunning views of the lighthouse from the beach,
              basalt cliffs, and wooded trails. Great for photography, picnics,
              and short family hikes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The route features minimal elevation change and
              well-maintained surfaces. Options extend to the Split Rock River
              Loop and connections with the Superior Hiking Trail.
            </p>
          </div>

          {/* Right Sidebar */}
          <aside className="lg:w-1/3 mt-10 lg:mt-0 bg-gray-800 text-white rounded-2xl shadow-2xl p-8 space-y-5">
            <h4 className="text-2xl font-bold text-lime-400 border-b border-gray-600 pb-3">
              Essential Details
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong>Fees Required:</strong> {feesText}
              </li>
              <li>
                <strong>Trail Surface:</strong> Gravel and dirt path, some rocky shoreline sections
              </li>
              <li>
                <strong>Restrooms:</strong> Modern restrooms at the visitor center and parking area
              </li>
              <li>
                <strong>Camping:</strong> Yes — cart-in campsites, backpack sites, and nearby campground
              </li>
              <li>
                <strong>Kid Friendly?</strong> Yes
              </li>
              <li>
                <strong>Pet Policy:</strong> Pets allowed on 6-ft leash (but not allowed on Pebble Beach itself)
              </li>
              <li>
                <strong>Parking:</strong> Large paved lot near visitor center and trailhead
              </li>
              <li>
                <strong className="text-lime-400 block mb-1">
                  Trailhead Address:
                </strong>
                <a
                  href={addressLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white hover:text-lime-300 visited:text-white transition-colors"
                >
                  {addressText}
                </a>
              </li>
            </ul>
          </aside>
        </div>

        {/* BADGE + STATIC MAP (two square cards) */}
        <section className="mb-20" id="extras">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Badge */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 ring-1 ring-black/5">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Badge for this hike:
              </h3>
              <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={badgePlaceholder}
                  alt="Placeholder badge for this hike"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-contain p-6"
                />
              </div>
            </div>

            {/* Right: Trailhead location (static image that links out) */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 ring-1 ring-black/5">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Trailhead location
              </h3>
              <a
                href={addressLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open trailhead in Google Maps"
                className="block group"
              >
                <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                  <img
                    src={trailheadStatic}
                    alt="Trailhead map preview for Split Rock Lighthouse"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 rounded-xl" />
                </div>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-lime-700 group-hover:underline">
                  Open in Google Maps →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* BACK LINK */}
        <div className="text-center mt-12">
          <Link
            to="/northshore"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-full bg-blue-600 text-white shadow-md hover:bg-lime-700 hover:shadow-lg transform hover:scale-[1.05] transition-all duration-300"
          >
            ← Back to North Shore Trails
          </Link>
        </div>
      </main>
    </div>
  );
}