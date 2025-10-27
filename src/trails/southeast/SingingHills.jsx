import React from "react";
import { Link } from "react-router-dom";
import { Map, Mountain, Clock, ArrowRight, Leaf } from "lucide-react";

import badgePlaceholder from "../../assets/images/badge-singinghills.webp";
import trailheadStatic from "../../assets/images/map-seast-singinghills.png";
import trailheadHero from "../../assets/images/Sakatah-Lake.webp";


const TrailStatIcons = {
  Region: Map,
  Difficulty: Mountain,
  "Trail Distance": ArrowRight,
  "Estimated Hike Duration": Clock,
  "Elevation Gain": Mountain,
  "Best Season To Visit": Leaf,
};

const trailData = [
  { label: "Region", value: "Southeast" },
  { label: "Difficulty", value: "Easy" },
  { label: "Trail Distance", value: "39 miles total (most visitors walk 1-3 miles)" },
  { label: "Estimated Hike Duration", value: "30–90 minutes (depending on chosen section)" },
  { label: "Elevation Gain", value: "Minimal (flat, plaved trail)" },
  { label: "Best Season To Visit", value: "Summer and fall" },
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

export default function SingingHills() {
  const addressLink =
    "https://www.google.com/maps?q=Sakatah+Lake+State+Park,+50038+Cannon+River+Ln,+Waterville,+MN+56096";
  const addressText =
    "Sakatah Lake State Park — 50499 Sakatah Lake St Park Rd, Waterville, MN  56096";
  const feesText = "Minnesota State Park vehicle permit ($7/day or $35/year)";

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* HERO */}
      <section className="relative h-[80vh] max-h-[800px] flex items-center justify-center overflow-hidden">
        <img
          src={trailheadHero}
          alt="Sakatah Lake State Park - Sakatah Singing Hills Trail"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="relative text-center px-6 z-10">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white leading-tight drop-shadow-lg">
            Sakatah Lake State Park
          </h1>
          <p className="text-2xl sm:text-3xl font-medium text-lime-300 mt-4 tracking-wide">
            Sakatah Singing Hills Trail
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

        {/* Description + Sidebar */}
        <div className="flex flex-col lg:flex-row lg:space-x-12 mb-20">
          <div className="lg:w-2/3 space-y-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Paved Path Through Woods and Lakes
            </h3>
                                    <p className="text-lg text-gray-700 leading-relaxed">
  Photo of Sakatah Lake hiking trail is courtesy of <a
    href="https://commons.wikimedia.org/wiki/File:Sakatah_Singing_Hills_State_Trail.JPG"
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-blue-700 hover:text-blue-900"
  >
    William Wesen via Wikimedia Commons
  </a>
  {" "}(
  <a
    href="https://creativecommons.org/licenses/by-sa/3.0/deed.en"
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-blue-700 hover:text-blue-900"
  >
    CC Attribution - Share Alike 3.0 Unported
  </a>
  ).
</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Sakatah Singing Hills Trail offers a smooth, scenic route that
              follows an old rail line through forests, wetlands, and the shores
              of Sakatah Lake.</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Although primarily a paved bike trail, it’s ideal
              for long, peaceful walks with steady scenery and gentle terrain.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The trail connects multiple small towns and parks along its route,
              making it one of Minnesota’s most accessible and family-friendly
              long-distance trails.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you walk a short section or an entire stretch, you’ll find
              a mix of open prairie, shaded woodland, and lake views that make
              every mile enjoyable.
            </p>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 mt-10 lg:mt-0 bg-gray-800 text-white rounded-2xl shadow-2xl p-8 space-y-5">
            <h4 className="text-2xl font-bold text-lime-400 border-b border-gray-600 pb-3">
              Essential Details
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li><strong>Fees Required:</strong> {feesText}</li>
              <li><strong>Trail Surface:</strong> Paved asphalt</li>
              <li><strong>Restrooms:</strong> Trailhead and park areas</li>
              <li><strong>Camping:</strong> Available in Sakatah Lake State Park</li>
              <li><strong>Kid Friendly?</strong> Yes</li>
              <li><strong>Pet Policy:</strong> Pets on leash</li>
              <li><strong>Parking:</strong> Park trailhead and town access points</li>
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
                  alt="Placeholder badge for Sakatah Singing Hills Trail"
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
                    alt="Trailhead map preview for Sakatah Singing Hills Trail"
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
            to="/southeast"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-full bg-blue-600 text-white shadow-md hover:bg-lime-700 hover:shadow-lg transform hover:scale-[1.05] transition-all duration-300"
          >
            ← Back to Southeast Region Trails
          </Link>
        </div>
      </main>
    </div>
  );
}
