// App.jsx
// imports at the top

import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/index.css";
import "./styles/header.css";

// Core layout & utilities
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

// Legal pages
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";

// Top-level pages
import Hikes from "@/pages/Hikes.jsx";
import About from "@/pages/About.jsx";
import Badges from "@/pages/Badges.jsx";
import BadgeCatalog from "@/pages/BadgeCatalog.jsx";
import BadgeCollection from "@/pages/BadgeCollection.jsx";
import Central from "@/pages/Central.jsx";
import Metro from "@/pages/Metro.jsx";
import NorthShore from "@/pages/NorthShore.jsx";
import Northwest from "@/pages/Northwest.jsx";
import Southeast from "@/pages/Southeast.jsx";
import WestSouthwest from "@/pages/WestSouthwest.jsx";

// ---------- HIKES - NORTH SHORE ----------
import BearHead from "./trails/north-shore/BearHead.jsx";
import CascadeRiver from "./trails/north-shore/CascadeRiver.jsx";
import GeorgeCrosby from "./trails/north-shore/GeorgeCrosby.jsx";
import GrandPortage from "./trails/north-shore/GrandPortage.jsx";
import JayCooke from "./trails/north-shore/JayCooke.jsx";
import KettleTrail from "./trails/north-shore/KettleTrail.jsx";
import SplitRock from "./trails/north-shore/SplitRock.jsx";
import SuperiorTrail from "./trails/north-shore/SuperiorTrail.jsx";
import TemperanceRiver from "./trails/north-shore/TemperanceRiver.jsx";
import TettegoucheTrail from "./trails/north-shore/TettegoucheTrail.jsx";

// ---------- HIKES - TWIN CITIES METRO ----------
import AftonState from "./trails/twin-cities-metro/AftonState.jsx";
import LowryNature from "./trails/twin-cities-metro/LowryNature.jsx";
import FortSnelling from "./trails/twin-cities-metro/FortSnelling.jsx";
import GlacialPotholes from "./trails/twin-cities-metro/GlacialPotholes.jsx";
import LebanonHills from "./trails/twin-cities-metro/LebanonHills.jsx";
import MinnehahaCreek from "./trails/twin-cities-metro/MinnehahaCreek.jsx";
import MinnesotaValley from "./trails/twin-cities-metro/MinnesotaValley.jsx";
import MississippiNational from "./trails/twin-cities-metro/MississippiNational.jsx";
import MurphyHanrehan from "./trails/twin-cities-metro/MurphyHanrehan.jsx";
import RiversideTrail from "./trails/twin-cities-metro/RiversideTrail.jsx";

// ---------- HIKES - SOUTHEAST ----------
import MysteryCave from "./trails/southeast/MysteryCave.jsx";
import BlufftopTrail from "./trails/southeast/BlufftopTrail.jsx";
import KingsBluff from "./trails/southeast/KingsBluff.jsx";
import MountCharity from "./trails/southeast/MountCharity.jsx";
import LakeLoop from "./trails/southeast/LakeLoop.jsx";
import BigIsland from "./trails/southeast/BigIsland.jsx";
import HiddenFalls from "./trails/southeast/HiddenFalls.jsx";
import RiceLake from "./trails/southeast/RiceLake.jsx";
import SingingHills from "./trails/southeast/SingingHills.jsx";
import ChimneyRock from "./trails/southeast/ChimneyRock.jsx";

// ---------- HIKES - CENTRAL ----------
import CharlesLindbergh from "./trails/central/CharlesLindbergh.jsx";
import CrowWing from "./trails/central/CrowWing.jsx";
import KettleLake from "./trails/central/KettleLake.jsx";
import LakeMaria from "./trails/central/LakeMaria.jsx";
import InspirationPeak from "./trails/central/InspirationPeak.jsx";
import ItascaLoop from "./trails/central/ItascaLoop.jsx";
import BoardwalkTrail from "./trails/central/BoardwalkTrail.jsx";
import LakeCarlos from "./trails/central/LakeCarlos.jsx";
import MilitaryRoad from "./trails/central/MilitaryRoad.jsx";
import MountTom from "./trails/central/MountTom.jsx";

// ---------- HIKES - NORTHWEST ----------
import BuffaloRiver from "./trails/northwest/BuffaloRiver.jsx";
import LakeBronson from "./trails/northwest/LakeBronson.jsx";
import BasswoodTrail from "./trails/northwest/BasswoodTrail.jsx";
import HeadwatersTrail from "./trails/northwest/HeadwatersTrail.jsx";

// ---------- HIKES - WEST & SOUTHWEST ----------
import BigStone from "./trails/west-and-southwest/BigStone.jsx";
import BlueMounds from "./trails/west-and-southwest/BlueMounds.jsx";
import RedwoodRiver from "./trails/west-and-southwest/RedwoodRiver.jsx";
import KilenWoods from "./trails/west-and-southwest/KilenWoods.jsx";
import MinneopaBison from "./trails/west-and-southwest/MinneopaBison.jsx";
import PipestoneNational from "./trails/west-and-southwest/PipestoneNational.jsx";
import UpperSioux from "./trails/west-and-southwest/UpperSioux.jsx";

// ---------- CODE FOR GOOGLE ANALYTICS ----------
import usePageTracking from "./hooks/usePageTracking";

export default function App() {
  usePageTracking();

  // Prevent scroll jump behavior
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const html = document.documentElement;
    const body = document.body;
    html.style.overflowAnchor = "none";
    body.style.overflowAnchor = "none";
    return () => {
      html.style.overflowAnchor = "";
      body.style.overflowAnchor = "";
    };
  }, []);

  return (
    <>
      <Header />

      <main className="min-h-screen">
        <Routes>
          {/* Root → Hikes */}
          <Route path="/" element={<Navigate to="/hikes" replace />} />

          {/* Top-level pages, Legal pages, and Badge pages */}
          <Route path="/hikes" element={<Hikes />} />
          <Route path="/about" element={<About />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/badge-catalog" element ={<BadgeCatalog />} />
          <Route path="/badge-collection" element ={<BadgeCollection />} />
          <Route path="/badges/me" element={<BadgeCollection />} />

          {/* Regional pages */}
          <Route path="/central" element={<Central />} />
          <Route path="/metro" element={<Metro />} />
          <Route path="/northshore" element={<NorthShore />} />
          <Route path="/northwest" element={<Northwest />} />
          <Route path="/southeast" element={<Southeast />} />
          <Route path="/westsouthwest" element={<WestSouthwest />} />

          {/* HIKES - NORTH SHORE */}
          <Route path="/trails/north-shore/bear-head" element={<BearHead />} />
          <Route path="/trails/north-shore/cascade-river" element={<CascadeRiver />} />
          <Route path="/trails/north-shore/george-crosby" element={<GeorgeCrosby />} />
          <Route path="/trails/north-shore/grand-portage" element={<GrandPortage />} />
          <Route path="/trails/north-shore/jay-cooke" element={<JayCooke />} />
          <Route path="/trails/north-shore/kettle-trail" element={<KettleTrail />} />
          <Route path="/trails/north-shore/split-rock" element={<SplitRock />} />
          <Route path="/trails/north-shore/superior-trail" element={<SuperiorTrail />} />
          <Route path="/trails/north-shore/temperance-river" element={<TemperanceRiver />} />
          <Route path="/trails/north-shore/tettegouche-trail" element={<TettegoucheTrail />} />

          {/* HIKES - TWIN CITIES METRO */}
          <Route path="/trails/twin-cities-metro/afton-state" element={<AftonState />} />
          <Route path="/trails/twin-cities-metro/lowry-nature" element={<LowryNature />} />
          <Route path="/trails/twin-cities-metro/fort-snelling" element={<FortSnelling />} />
          <Route path="/trails/twin-cities-metro/glacial-potholes" element={<GlacialPotholes />} />
          <Route path="/trails/twin-cities-metro/lebanon-hills" element={<LebanonHills />} />
          <Route path="/trails/twin-cities-metro/minnehaha-creek" element={<MinnehahaCreek />} />
          <Route path="/trails/twin-cities-metro/minnesota-valley" element={<MinnesotaValley />} />
          <Route path="/trails/twin-cities-metro/mississippi-national" element={<MississippiNational />} />
          <Route path="/trails/twin-cities-metro/murphy-hanrehan" element={<MurphyHanrehan />} />
          <Route path="/trails/twin-cities-metro/riverside-trail" element={<RiversideTrail />} />

          {/* HIKES - SOUTHEAST */}
          <Route path="/trails/southeast/mystery-cave" element={<MysteryCave />} />
          <Route path="/trails/southeast/blufftop-trail" element={<BlufftopTrail />} />
          <Route path="/trails/southeast/kings-bluff" element={<KingsBluff />} />
          <Route path="/trails/southeast/mount-charity" element={<MountCharity />} />
          <Route path="/trails/southeast/lake-loop" element={<LakeLoop />} />
          <Route path="/trails/southeast/big-island" element={<BigIsland />} />
          <Route path="/trails/southeast/hidden-falls" element={<HiddenFalls />} />
          <Route path="/trails/southeast/rice-lake" element={<RiceLake />} />
          <Route path="/trails/southeast/singing-hills" element={<SingingHills />} />
          <Route path="/trails/southeast/chimney-rock" element={<ChimneyRock />} />

          {/* HIKES - CENTRAL */}
          <Route path="/trails/central/charles-lindbergh" element={<CharlesLindbergh />} />
          <Route path="/trails/central/crow-wing" element={<CrowWing />} />
          <Route path="/trails/central/kettle-lake" element={<KettleLake />} />
          <Route path="/trails/central/inspiration-peak" element={<InspirationPeak />} />
          <Route path="/trails/central/itasca-loop" element={<ItascaLoop />} />
          <Route path="/trails/central/boardwalk-trail" element={<BoardwalkTrail />} />
          <Route path="/trails/central/lake-carlos" element={<LakeCarlos />} />
          <Route path="/trails/central/lake-maria" element={<LakeMaria />} />
          <Route path="/trails/central/military-road" element={<MilitaryRoad />} />
          <Route path="/trails/central/mount-tom" element={<MountTom />} />

          {/* HIKES - NORTHWEST */}
          <Route path="/trails/northwest/buffalo-river" element={<BuffaloRiver />} />
          <Route path="/trails/northwest/lake-bronson" element={<LakeBronson />} />
          <Route path="/trails/northwest/basswood-trail" element={<BasswoodTrail />} />
          <Route path="/trails/northwest/headwaters-trail" element={<HeadwatersTrail />} />

          {/* HIKES - WEST & SOUTHWEST */}
          <Route path="/trails/west-and-southwest/big-stone" element={<BigStone />} />
          <Route path="/trails/west-and-southwest/blue-mounds" element={<BlueMounds />} />
          <Route path="/trails/west-and-southwest/redwood-river" element={<RedwoodRiver />} />
          <Route path="/trails/west-and-southwest/kilen-woods" element={<KilenWoods />} />
          <Route path="/trails/west-and-southwest/minneopa-bison" element={<MinneopaBison />} />
          <Route path="/trails/west-and-southwest/pipestone-national" element={<PipestoneNational />} />
          <Route path="/trails/west-and-southwest/upper-sioux" element={<UpperSioux />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/hikes" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}