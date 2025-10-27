import React from "react";
import { Link } from "react-router-dom";
import { Map, Mountain, Clock, ArrowRight, Leaf } from "lucide-react";

import badgePlaceholder from "../../assets/images/badge-dkettle.webp";
import trailheadStatic from "../../assets/images/map-norsh-kettletrail.png";
import trailheadHero from "../../assets/images/Kettle-Trail-Tony-Webster.webp";
// 📝 Photo credit (for internal records only):
// Hero image: Photo by Tony Webster via Wikimedia Commons (CC BY-SA 2.0)


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
  { label: "Difficulty", value: "Moderate" },
  { label: "Trail Distance", value: "2.0 miles (round trip)" },
  { label: "Estimated Hike Duration", value: "1.5 hours" },
  { label: "Elevation Gain", value: "400 feet (steep stairs and switchbacks)" },
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

export default function KettleTrail() {
  const addressLink =
    "https://www.google.com/maps?q=Judge+C.R.+Magney+State+Park,+4051+E+Highway+61,+Grand+Marais,+MN+55604";
  const addressText =
    "Judge C.R. Magney State Park — Devil’s Kettle Trail, 4051 East Highway 61, Grand Marais, MN 55604";
  const feesText = "Minnesota State Park vehicle permit ($7/day or $35/year)";

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="relative h-[80vh] max-h-[800px] flex items-center justify-center overflow-hidden">
        <img
          src={trailheadHero}
          alt="Devil’s Kettle waterfall in Judge C.R. Magney State Park"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="relative text-center px-6 z-10">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white leading-tight drop-shadow-lg">
            Judge C.R. Magney State Park
          </h1>
          <p className="text-2xl sm:text-3xl font-medium text-lime-300 mt-4 tracking-wide">
            Devil’s Kettle Trail
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
              The Mystery of the Disappearing River
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Photo above of boardwalk at Devil's Kettle waterfall is courtesy of <a
    href="https://commons.wikimedia.org/wiki/File:Devil%27s_Kettle_-_Judge_C.R._Magney_State_Park_-_Minnesota_%2835809120200%29.jpg"
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-blue-700 hover:text-blue-900"
  >
    Tony Webster via Wikimedia Commons
  </a>
  {" "}(
  <a
    href="https://creativecommons.org/licenses/by-sa/2.0/"
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-blue-700 hover:text-blue-900"
  >
    CC Share Alike 2.0 Generic
  </a>
  ).
</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Follow the Brule River upstream through birch and spruce
              forest to one of Minnesota’s most puzzling natural wonders: the
              Devil’s Kettle waterfall, where half the river vanishes into a deep
              pothole and never reemerges.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Expect a steady climb via stairs and switchbacks, with
              scenic overlooks of the Upper Falls and forested valleys along the
              way. Ideal for adventurous hikers and photographers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The mystery of where the water goes has fascinated
              geologists for decades, making this hike as thought-provoking as it
              is beautiful.
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
                <strong>Trail Surface:</strong> Packed dirt with wooden stairs and boardwalk sections
              </li>
              <li>
                <strong>Restrooms:</strong> Modern flush restrooms at visitor center trailhead
              </li>
              <li>
                <strong>Camping:</strong> Yes — park campground with tent and RV sites near trailhead
              </li>
              <li>
                <strong>Kid Friendly?</strong> Older teens ok; children will be frustrated with steep stair sections
              </li>
              <li>
                <strong>Pet Policy:</strong> Pets allowed on 6 foot leash
              </li>
              <li>
                <strong>Parking:</strong> Paved lot at visitor center next to trailhead
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

        {/* BADGE + STATIC MAP */}
        <section className="mb-20" id="extras">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-2xl p-6 ring-1 ring-black/5">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Badge for this hike:
              </h3>
              <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={badgePlaceholder}
                  alt="Placeholder badge for Devil’s Kettle Trail"
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
                    alt="Trailhead map preview for Judge Magney State Park"
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