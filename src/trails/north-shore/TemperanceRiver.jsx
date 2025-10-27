import React from "react";
import { Link } from "react-router-dom";
import { Map, Mountain, Clock, ArrowRight, Leaf } from "lucide-react";

import badgePlaceholder from "../../assets/images/badge-temperanceriver.webp";
import trailheadHero from "../../assets/images/Temperance-River-Matthew-Benoit.webp";
import trailheadMap from "../../assets/images/map-norsh-temperanceriver.png";
// 📝 Photo credit (for internal records only):
// Hero image: Temperance River / Wooden Bridge — Photo by Matthew Benoit via Unsplash


// Icons for the stat cards (identical mapping to keep style parity)
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
  { label: "Trail Distance", value: "1.5 miles (loop)" },
  { label: "Estimated Hike Duration", value: "1 – 1.5 hours" },
  { label: "Elevation Gain", value: "Around 200 feet (rolling terrain with stairs)" },
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

export default function TemperanceRiver() {
  const addressLink = "https://maps.google.com/?q=Temperance+River+State+Park,+7620+W+Highway+61,+Schroeder,+MN+55613";
  const addressText = "Temperance River State Park — River Trail, 7620 West Highway 61, Schroeder, MN 55613";

  return (
    <div className="bg-white min-h-screen font-sans">

{/* HERO SECTION */}
<section className="relative h-[80vh] max-h-[800px] flex items-center justify-center overflow-hidden">
  <img
    src={trailheadHero}
    alt="Temperance River wooden bridge in Minnesota"
    className="absolute inset-0 w-full h-full object-cover object-center scale-105"
    loading="lazy"
  />
  <div className="absolute inset-0 bg-gray-900/60" />
  <div className="relative text-center px-6 z-10">
    <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white leading-tight drop-shadow-lg">
      Temperance River State Park
    </h1>
    <p className="text-2xl sm:text-3xl font-medium text-lime-300 mt-4 tracking-wide">
      River Trail
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
              A River Named After A Pun
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
  Above photo of bridge at Temperance River State Park is courtesy of {" "}
  <a
    href="https://unsplash.com/photos/brown-wooden-bridge-over-the-river-KeON2QpYPRE"
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-blue-700 hover:text-blue-900"
  >
    Matthew Benoit via Unsplash
  </a>
  .
</p>
              <p className="text-lg text-gray-700 leading-relaxed">
              European settlers, who arrived in the 1830s and discovered the river, gave it the name "Temperance" around 1864 because it flowed into Lake Superior without forming a sandbar at its mouth, which was a pun on "no bar".
            </p>
<p className="text-lg text-gray-700 leading-relaxed">
  The Temperance River Gorge Trail follows one of Minnesota’s most dramatic river canyons.  The narrow gorge was carved by rushing water through ancient volcanic rock, creating deep potholes and smooth basalt walls visible from the overlooks.
</p>
<p className="text-lg text-gray-700 leading-relaxed">
  The main path loops along both sides of the river, crossing bridges with views of waterfalls, chutes, and whirlpools before continuing toward Lake Superior. </p> 
<p className="text-lg text-gray-700 leading-relaxed">
  This short but spectacular hike showcases the raw power and beauty of the North Shore landscape.
</p>
          </div>

          {/* Right Sidebar */}
          <aside className="lg:w-1/3 mt-10 lg:mt-0 bg-gray-800 text-white rounded-2xl shadow-2xl p-8 space-y-5">
            <h4 className="text-2xl font-bold text-lime-400 border-b border-gray-600 pb-3">
              Essential Details
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong>Fees Required:</strong> Minnesota State Park vehicle permit ($7/day or $35/year)
              </li>
              <li>
                <strong>Trail Surface:</strong> Dirt and rock with stairs and overlooks
              </li>
              <li>
                <strong>Restrooms:</strong> Vault toilets at trailhead; modern restrooms at campground
              </li>
              <li>
                <strong>Camping:</strong> Available within park campground (tent & RV sites)
              </li>
              <li>
                <strong>Kid Friendly?</strong> Suitable for teens/older children with supervision; there are steep drops and uneven terrain in many places.
              </li>
              <li>
                <strong>Pet Policy:</strong> Pets allowed on leash (6 ft max)
              </li>
              <li>
                <strong>Parking:</strong> Large paved lot near Highway 61 bridge
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
                    src={trailheadMap}
                    alt="Trailhead map preview (placeholder)"
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
