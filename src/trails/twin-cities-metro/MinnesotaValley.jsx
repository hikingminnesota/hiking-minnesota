import React from "react";
import { Link } from "react-router-dom";
import { Map, Mountain, Clock, ArrowRight, Leaf } from "lucide-react";

import badgePlaceholder from "../../assets/images/badge-rivervalleyhike.webp";
import trailheadStatic from "../../assets/images/map-metro-minnesotavalley.png";
import trailheadHero from "../../assets/images/Minnesota-Valley-State-Trail.webp";
// 📝 Photo credit (for internal records only):
// Hero image: Photo by VikingB via Wikimedia Commons (CC BY-SA 4.0 International)

const TrailStatIcons = {
  Region: Map,
  Difficulty: Mountain,
  "Trail Distance": ArrowRight,
  "Estimated Hike Duration": Clock,
  "Elevation Gain": Mountain,
  "Best Season To Visit": Leaf,
};

const trailData = [
  { label: "Region", value: "Twin Cities Metro" },
  { label: "Difficulty", value: "Easy to Moderate" },
  { label: "Trail Distance", value: "2.1 miles round trip" },
  { label: "Estimated Hike Duration", value: "45 minutes - 1 hour" },
  { label: "Elevation Gain", value: "Minimal to moderate along river valley" },
  { label: "Best Season To Visit", value: "Spring through fall" },
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

export default function MinnesotaValley() {
  const addressLink =
    "https://www.google.com/maps?q=10100+Old+Cedar+Ave+S,+Bloomington,+MN+55425";
  const addressText =
    "Minnesota Valley State Trail — Bloomington segment of hike -- access point near 10100 Old Cedar Ave S, Bloomington, MN 55425";
  const feesText = "No state park permit required (trail managed by DNR and partners)";

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* HERO */}
      <section className="relative h-[80vh] max-h-[800px] flex items-center justify-center overflow-hidden">
        <img
          src={trailheadHero}
          alt="Minnesota Valley State Trail - River Valley Hike (Bloomington Segment)"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="relative text-center px-6 z-10">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white leading-tight drop-shadow-lg">
            Minnesota Valley State Trail
          </h1>
          <p className="text-2xl sm:text-3xl font-medium text-lime-300 mt-4 tracking-wide">
            River Valley Hike (Bloomington Segment Of Hike)
          </p>
        </div>
      </section>

      {/* MAIN */}
      <main
        id="trail-details"
        className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-16 scroll-mt-24"
      >
        {/* Overview */}
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

        {/* Text + Sidebar */}
        <div className="flex flex-col lg:flex-row lg:space-x-12 mb-20">
          {/* Left column */}
          <div className="lg:w-2/3 space-y-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
              A Scenic Corridor Along the Minnesota River
            </h3>

  <p className="text-lg text-gray-700 leading-relaxed">
  Photo above of hiking trail is courtesy of <a
    href="https://www.goodfreephotos.com/united-states/minnesota/voyaguers-national-park/minnesota-voyaguers-national-park-hiking-path.jpg.php"
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-blue-700 hover:text-blue-900"
  >
    GoodFreePhotos.com
  </a>
  {" "}(
  <a
    href="https://creativecommons.org/publicdomain/"
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-blue-700 hover:text-blue-900"
  >
    CC0 / Public Domain License
    </a>
  ).
</p>



            <p className="text-lg text-gray-700 leading-relaxed">
              The Minnesota Valley State Trail follows the meandering path of the
              Minnesota River, connecting several natural and historic sites
              throughout the Twin Cities Metro area.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This long-distance multi-use trail offers a mix of paved and natural
              surfaces, providing an excellent route for hikers, bikers, and
              birdwatchers who want to experience the diverse habitats of the river
              valley — from wetlands and floodplains to prairies and oak savannas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Multiple access points make it easy to hike short scenic sections or
              tackle longer stretches between state and local parks. It’s one of the
              most versatile trails in the entire metro region.</p>
            <p className="text-lg text-gray-700 leading-relaxed">    
              Special note for badge hunters: there are actually several different hikes here in Shakopee, 
              Chaska, and Bloomington, but badge is awarded for visiting the Bloomington segment of the hike.
            </p>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 mt-10 lg:mt-0 bg-gray-800 text-white rounded-2xl shadow-2xl p-8 space-y-5">
            <h4 className="text-2xl font-bold text-lime-400 border-b border-gray-600 pb-3">
              Essential Details
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li><strong>Fees Required:</strong> {feesText}</li>
              <li><strong>Trail Surface:</strong> Paved and natural surface sections</li>
              <li><strong>Restrooms:</strong> At key trailheads and park areas</li>
              <li><strong>Camping:</strong> Available in nearby parks</li>
              <li><strong>Kid Friendly?</strong> Yes</li>
              <li><strong>Pet Policy:</strong> Pets on leash</li>
              <li><strong>Parking:</strong> Trailheads in Bloomington, Shakopee, and Chaska</li>
              <li>
                <strong className="text-lime-400 block mb-1">
                  Trailhead Address (for Bloomington segment of hike):
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

        {/* Badge + Map */}
        <section className="mb-20" id="extras">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-2xl p-6 ring-1 ring-black/5">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Badge for this hike:
              </h3>
              <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={badgePlaceholder}
                  alt="Placeholder badge for Minnesota Valley State Trail"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-contain p-6"
                />
              </div>
            </div>

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
                    alt="Trailhead map preview for Minnesota Valley State Trail"
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

        {/* Back Link */}
        <div className="text-center mt-12">
          <Link
            to="/metro"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-full bg-blue-600 text-white shadow-md hover:bg-lime-700 hover:shadow-lg transform hover:scale-[1.05] transition-all duration-300"
          >
            ← Back to Twin Cities Metro Trails
          </Link>
        </div>
      </main>
    </div>
  );
}
