import React from "react";
import "../styles/badges.css";

// Import all 50 badges
import badgeBasswoodTrail from "@/assets/images/badge-basswoodtrail.webp";
import badgeBearHeadLake from "@/assets/images/badge-bearheadlake.webp";
import badgeBigIsland from "@/assets/images/badge-bigisland.webp";
import badgeBigStoneLake from "@/assets/images/badge-bigstonelake.webp";
import badgeBlueMounds from "@/assets/images/badge-bluemounds.webp";
import badgeBluffTop from "@/assets/images/badge-blufftop.webp";
import badgeBoardwalkTrail from "@/assets/images/badge-boardwalktrail.webp";
import badgeBuffaloRiver from "@/assets/images/badge-buffaloriver.webp";
import badgeChimneyRock from "@/assets/images/badge-chimneyrock.webp";
import badgeCrowWing from "@/assets/images/badge-crowwing.webp";
import badgeDamTrail from "@/assets/images/badge-damtrail.webp";
import badgeDKettle from "@/assets/images/badge-dkettle.webp";
import badgeFortSnelling from "@/assets/images/badge-fortsnelling.webp";
import badgeGlacialLakes from "@/assets/images/badge-glaciallakes.webp";
import badgeGlacialPotholes from "@/assets/images/badge-glacialpotholes.webp";
import badgeGooseberry from "@/assets/images/badge-gooseberry.webp";
import badgeHeadwatersTrail from "@/assets/images/badge-headwaterstrail.webp";
import badgeHiddenFalls from "@/assets/images/badge-hiddenfalls.webp";
import badgeHighFalls from "@/assets/images/badge-highfalls.webp";
import badgeInspirationPeak from "@/assets/images/badge-inspirationpeak.webp";
import badgeJayCooke from "@/assets/images/badge-jaycooke.webp";
import badgeKilenWoods from "@/assets/images/badge-kilenwoods.webp";
import badgeKingsBluff from "@/assets/images/badge-kingsbluff.webp";
import badgeLakeCarlos from "@/assets/images/badge-lakecarlos.webp";
import badgeLakeItascaLoop from "@/assets/images/badge-lakeitascaloop.webp";
import badgeLakeLoop from "@/assets/images/badge-lakeloop.webp";
import badgeLakeMaria from "@/assets/images/badge-lakemaria.webp";
import badgeLebanonHills from "@/assets/images/badge-lebanonhills.webp";
import badgeLindberghPark from "@/assets/images/badge-lindberghpark.webp";
import badgeLookoutMountain from "@/assets/images/badge-lookoutmountain.webp";
import badgeLowryNature from "@/assets/images/badge-lowrynature.webp";
import badgeManitouPark from "@/assets/images/badge-manitoupark.webp";
import badgeMinnehahaPark from "@/assets/images/badge-minnehahapark.webp";
import badgeMinneopaFalls from "@/assets/images/badge-minneopafalls.webp";
import badgeMississippiNational from "@/assets/images/badge-mississippinational.webp";
import badgeMountCharity from "@/assets/images/badge-mountcharity.webp";
import badgeMurphyHanrehan from "@/assets/images/badge-murphyhanrehan.webp";
import badgeMysteryCave from "@/assets/images/badge-mysterycave.webp";
import badgeOBrienStatePark from "@/assets/images/badge-obrienstatepark.webp";
import badgeOldMilitaryRoad from "@/assets/images/badge-oldmilitaryroad.webp";
import badgePigeonRiver from "@/assets/images/badge-pigeonriver.webp";
import badgePipestoneNational from "@/assets/images/badge-pipestonenationals.webp";
import badgeRedwoodRiver from "@/assets/images/badge-redwoodriver.webp";
import badgeRiceLake from "@/assets/images/badge-ricelake.webp";
import badgeRiverValleyHike from "@/assets/images/badge-rivervalleyhike.webp";
import badgeSaintCroixBluffs from "@/assets/images/badge-saintcroixbluffs.webp";
import badgeSibleyStatePark from "@/assets/images/badge-sibleystatepark.webp";
import badgeSingingHills from "@/assets/images/badge-singinghills.webp";
import badgeTemperanceRiver from "@/assets/images/badge-temperanceriver.webp";
import badgeTwoHarbors from "@/assets/images/badge-twoharbors.webp";

// Array of badge data
const badges = [
  { name: "Basswood Trail", img: badgeBasswoodTrail },
  { name: "Bear Head Lake", img: badgeBearHeadLake },
  { name: "Big Island", img: badgeBigIsland },
  { name: "Big Stone Lake", img: badgeBigStoneLake },
  { name: "Blue Mounds", img: badgeBlueMounds },
  { name: "Bluff Top", img: badgeBluffTop },
  { name: "Boardwalk Trail", img: badgeBoardwalkTrail },
  { name: "Buffalo River", img: badgeBuffaloRiver },
  { name: "Chimney Rock", img: badgeChimneyRock },
  { name: "Crow Wing", img: badgeCrowWing },
  { name: "Dam Trail", img: badgeDamTrail },
  { name: "Devil's Kettle", img: badgeDKettle },
  { name: "Fort Snelling", img: badgeFortSnelling },
  { name: "Glacial Lakes", img: badgeGlacialLakes },
  { name: "Glacial Potholes Trail", img: badgeGlacialPotholes },
  { name: "Gooseberry Falls", img: badgeGooseberry },
  { name: "Headwaters Trail", img: badgeHeadwatersTrail },
  { name: "Hidden Falls", img: badgeHiddenFalls },
  { name: "High Falls", img: badgeHighFalls },
  { name: "Inspiration Peak", img: badgeInspirationPeak },
  { name: "Jay Cooke", img: badgeJayCooke },
  { name: "Kilen Woods", img: badgeKilenWoods },
  { name: "Kings Bluff", img: badgeKingsBluff },
  { name: "Lake Carlos", img: badgeLakeCarlos },
  { name: "Lake Itasca Loop", img: badgeLakeItascaLoop },
  { name: "Lake Loop", img: badgeLakeLoop },
  { name: "Lake Maria", img: badgeLakeMaria },
  { name: "Lebanon Hills", img: badgeLebanonHills },
  { name: "Lindbergh Park", img: badgeLindberghPark },
  { name: "Lookout Mountain", img: badgeLookoutMountain },
  { name: "Lowry Nature", img: badgeLowryNature },
  { name: "Manitou Park", img: badgeManitouPark },
  { name: "Minnehaha Park", img: badgeMinnehahaPark },
  { name: "Minneopa Falls", img: badgeMinneopaFalls },
  { name: "Mississippi National", img: badgeMississippiNational },
  { name: "Mount Charity", img: badgeMountCharity },
  { name: "Murphy-Hanrehan", img: badgeMurphyHanrehan },
  { name: "Mystery Cave", img: badgeMysteryCave },
  { name: "O’Brien State Park", img: badgeOBrienStatePark },
  { name: "Old Military Road", img: badgeOldMilitaryRoad },
  { name: "Pigeon River", img: badgePigeonRiver },
  { name: "Pipestone National", img: badgePipestoneNational },
  { name: "Redwood River", img: badgeRedwoodRiver },
  { name: "Rice Lake", img: badgeRiceLake },
  { name: "River Valley Hike", img: badgeRiverValleyHike },
  { name: "Saint Croix Bluffs", img: badgeSaintCroixBluffs },
  { name: "Sibley State Park", img: badgeSibleyStatePark },
  { name: "Singing Hills", img: badgeSingingHills },
  { name: "Temperance River", img: badgeTemperanceRiver },
  { name: "Two Harbors", img: badgeTwoHarbors },
];

// Sort alphabetically by display name
badges.sort((a, b) => a.name.localeCompare(b.name));

export default function BadgeCatalog() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-24">
        <h1 className="mt-8 text-center text-4xl md:text-5xl font-extrabold text-gray-900">
          Hiking Minnesota Badge Catalog
        </h1>

        <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto text-lg">
          Explore all 50 Hiking Minnesota badges — each one represents a trail
          across the Land of 10,000 Lakes.
        </p>

        {/* Grid */}
        <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center">
          {badges.map((badge) => (
            <li
              key={badge.name}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200"

            >
              <img
                src={badge.img}
                alt={badge.name}
                className="w-80 h-80 object-contain rounded-lg"
                loading="lazy"
              />
              <span className="mt-6 font-semibold text-gray-800 text-2xl">
                {badge.name}
              </span>
            </li>
          ))}
        </ul>

        {/* Back Button */}
        <div className="mt-16 text-center">
          <button
            className="about-back-btn text-lg text-blue-600 hover:text-blue-800 transition"
            onClick={() => window.history.back()}
          >
            ← Back
          </button>
        </div>
      </section>
    </main>
  );
}