import React from "react";
import { useNavigate } from "react-router-dom";
import mapSvg from "../assets/images/outline4.svg";
import regionColors from "../regionColors"; // ✅ import centralized colors
import "../styles/index.css";

const MinnesotaMap = () => {
  const navigate = useNavigate();

  // Use centralized color palette instead of Tailwind classes
  const regions = [
    { name: "Northwest",        top: "19%", left: "24%", link: "/northwest" },
    { name: "North Shore",      top: "30%", left: "68%", link: "/northshore" },
    { name: "Central",          top: "46%", left: "42%", link: "/central" },
    { name: "West & Southwest", top: "78%", left: "29%", link: "/westsouthwest" },
    { name: "Twin Cities Metro", top: "63%", left: "49%", link: "/metro" },
    { name: "Southeast",        top: "87%", left: "60%", link: "/southeast" },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <img
        src={mapSvg}
        alt="Map of Minnesota"
        className="block w-full h-auto select-none pointer-events-none"
      />

      {regions.map((r) => (
        <div
          key={r.name}
          className="absolute text-white font-bold px-5 py-3 rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 ease-out hover:scale-130 hover:brightness-150 hover:shadow-2xl hover:ring-4 hover:ring-white/90 hover:animate-pulse-glow hover:z-20"
          style={{
            top: r.top,
            left: r.left,
            transform: "translate(-50%, -50%)",
            backgroundColor: regionColors[r.name] || "#999", // ✅ unified color source
          }}
          onClick={() => navigate(r.link)}
        >
          {r.name}
        </div>
      ))}
    </div>
  );
};

export default MinnesotaMap;