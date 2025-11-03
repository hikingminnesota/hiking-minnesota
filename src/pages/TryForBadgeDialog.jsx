import React, { useState } from "react";
import { account, databases, DB_ID, COLLECTION_ID } from "@/lib/appwrite";
import { ID, Query } from "appwrite";
import { useEffect } from "react";
import MinnIcon from '../assets/icons/minn.png';
import YesIcon from '../assets/icons/yes-button.png';
import NoIcon from '../assets/icons/no-button.png';

// Two all-beef patties, special sauce, lettuce, cheese, pickes, onions, on a sesame-seed bun.
const TEST_BADGE_COORDS = { lat: 44.9709309, lng: -93.4949981 }; // Wayzata McDonald's

async function awardBadge(badgeName) {
  try {
    // Get the current logged-in user
    const user = await account.get();

    // Check if this badge already exists
    const existing = await databases.listDocuments(DB_ID, COLLECTION_ID, [
      Query.equal("userId", user.$id),
      Query.equal("badgeName", badgeName)
    ]);

    if (existing.total > 0) {
      console.log("User already has this badge.");
      return;
    }

    // Otherwise, award a new badge
    await databases.createDocument(DB_ID, COLLECTION_ID, ID.unique(), {
      userId: user.$id,
      badgeName,
      earnedDate: new Date().toISOString(),
    });

    console.log("Badge awarded successfully!");
  } catch (error) {
    console.error("Error awarding badge:", error);
  }
}

export default function TryForBadgeDialog({ onYes, onNo }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-[380px] text-center border border-gray-300">
        
        {/* Header section */}
        <div className="flex flex-col items-center mb-3">
          <div className="flex items-center space-x-2">
            <img
              src={MinnIcon} alt="Minnesota outline" className="object-contain inline-block align-middle mr-2 w-[55px] h-auto"
            />
            <h2 className="font-bold text-lg text-gray-900">hiking minnesota</h2>
          </div>
        </div>

        {/* Divider line */}
        <hr className="border-t border-gray-300 mb-3" />

        {/* Inner card box (question + buttons) */}
        <div className="bg-white rounded-xl py-5 px-4 border border-gray-200">
          {/* Question text */}
          <p className="text-gray-900 font-semibold text-base mb-4">
            Do you want to try for a badge?
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-6 mt-1">
            <button
              onClick={() => {
                setVisible(false);
                onYes?.();
                awardBadge("Test Badge"); // 🟢 test call with test badge award
              }}
              className="focus:outline-none bg-transparent border-none shadow-none p-0 m-0"
            >
              <img
                src={YesIcon} alt="Yes button" className="w-[120px] h-auto hover:brightness-110 transition"
              />
            </button>

            <button
              onClick={() => {
                setVisible(false);
                onNo?.();
              }}
              className="focus:outline-none bg-transparent border-none shadow-none p-0 m-0"
            >
              <img
                src={NoIcon} alt="No button" className="w-[120px] h-auto hover:brightness-110 transition"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}