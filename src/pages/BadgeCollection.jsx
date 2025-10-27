import React, { useState, useEffect, useMemo } from "react";
import "@/styles/trophycase.css";
import "@/styles/badges.css";
import { account, databases, DB_ID, COLLECTION_ID } from "@/lib/appwrite";
import TryForBadgeDialog from "./TryForBadgeDialog";
import { ID, Query } from "appwrite";
import placeholderBadge from "@/assets/images/placeholder-badge.webp";
import testBadge from "@/assets/images/test-badge.webp";

// Fix issues with badge identification
const slug = (name) =>
  name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Turn a badge name into a real, bundled URL
const imageForBadge = (name) => {
  try {
    return new URL(
      `../../assets/images/badge-${slug(name)}.webp`,
      import.meta.url
    ).href;
  } catch {
    return placeholderBadge;
  }
};

// TEST BADGE --- testing coordinates
const TEST_BADGE_COORDS = { lat: 44.9709309, lng: -93.4949981 };

// === TRAIL DATA: SINGLE SOURCE OF TRUTH ===
// Each entry has the badge display name, region, lat/lng, and the name of the badge
// We did not include the names of the hikes, just the names of the badges

// IMPORTANT NOTE -->  THE NAMES BELOW ARE THE NAMES OF THE *BADGES*, NOT THE HIKES ===
// All of the names you see below are the badge names, the hike name may be slightly different or very different

const trails = [
  // 🟢 NORTH SHORE REGION
  { name: "Bear Head Lake", lat: 47.7629, lng: -91.7317, region: "North Shore", badge: "badge-bearheadlake.webp" },
  { name: "Lookout Mountain", lat: 47.7193, lng: -90.5182, region: "North Shore", badge: "badge-lookoutmountain.webp" },
  { name: "Manitou Park", lat: 47.4743, lng: -91.0689, region: "North Shore", badge: "badge-manitoupark.webp" },
  { name: "Pigeon River", lat: 47.9977, lng: -89.5983, region: "North Shore", badge: "badge-pigeonriver.webp" },
  { name: "Jay Cooke", lat: 46.6648, lng: -92.3714, region: "North Shore", badge: "badge-jaycooke.webp" },
  { name: "Devil's Kettle", lat: 47.8148, lng: -90.0166, region: "North Shore", badge: "badge-dkettle.webp" },
  { name: "Two Harbors", lat: 47.1888, lng: -91.3662, region: "North Shore", badge: "badge-twoharbors.webp" },
  { name: "Gooseberry Falls", lat: 47.1328, lng: -91.4733, region: "North Shore", badge: "badge-gooseberry.webp" },
  { name: "Temperance River", lat: 47.5564, lng: -90.8758, region: "North Shore", badge: "badge-temperanceriver.webp" },
  { name: "High Falls", lat: 47.3338, lng: -91.2763, region: "North Shore", badge: "badge-highfalls.webp" },

  // 🟣 CENTRAL REGION
  { name: "Lindbergh Park", lat: 45.9557, lng: -94.3811, region: "Central", badge: "badge-lindberghpark.webp" },
  { name: "Boardwalk Trail", lat: 47.5414, lng: -94.8101, region: "Central", badge: "badge-boardwalktrail.webp" },
  { name: "Crow Wing", lat: 46.2805, lng: -94.3531, region: "Central", badge: "badge-crowwing.webp" },
  { name: "Glacial Lakes", lat: 45.5881, lng: -95.5660, region: "Central", badge: "badge-glaciallakes.webp" },
  { name: "Inspiration Peak", lat: 46.1161, lng: -95.5607, region: "Central", badge: "badge-inspirationpeak.webp" },
  { name: "Lake Carlos", lat: 45.9919, lng: -95.3774, region: "Central", badge: "badge-lakecarlos.webp" },
  { name: "Lake Itasca Loop", lat: 47.2479, lng: -95.2042, region: "Central", badge: "badge-lakeitascaloop.webp" },
  { name: "Lake Maria", lat: 45.3178, lng: -93.9846, region: "Central", badge: "badge-lakemaria.webp" },
  { name: "Old Military Road", lat: 46.7827, lng: -93.2131, region: "Central", badge: "badge-oldmilitaryroad.webp" },
  { name: "Sibley State Park", lat: 45.3125, lng: -95.0155, region: "Central", badge: "badge-sibleystatepark.webp" },

  // 🔵 NORTHWEST REGION
  { name: "Buffalo River", lat: 46.8714, lng: -96.4744, region: "Northwest", badge: "badge-buffaloriver.webp" },
  { name: "Headwaters Trail", lat: 47.2471, lng: -95.2040, region: "Northwest", badge: "badge-headwaterstrail.webp" },
  { name: "Basswood Trail", lat: 46.5206, lng: -96.0685, region: "Northwest", badge: "badge-basswoodtrail.webp" },
  { name: "Dam Trail", lat: 48.7307, lng: -96.6641, region: "Northwest", badge: "badge-damtrail.webp" },

  // 🟠 TWIN CITIES METRO REGION
  { name: "Saint Croix Bluffs", lat: 44.8496, lng: -92.7809, region: "Metro", badge: "badge-saintcroixbluffs.webp" },
  { name: "Fort Snelling", lat: 44.8891, lng: -93.1827, region: "Metro", badge: "badge-fortsnelling.webp" },
  { name: "Glacial Potholes", lat: 45.3961, lng: -92.6619, region: "Metro", badge: "badge-glacialpotholes.webp" },
  { name: "Lebanon Hills", lat: 44.7852, lng: -93.1815, region: "Metro", badge: "badge-lebanonhills.webp" },
  { name: "Lowry Nature", lat: 44.8594, lng: -93.6927, region: "Metro", badge: "badge-lowrynature.webp" },
  { name: "Minnehaha Park", lat: 44.9135, lng: -93.2115, region: "Metro", badge: "badge-minnehahapark.webp" },
  { name: "River Valley Hike", lat: 44.8264, lng: -93.2412, region: "Metro", badge: "badge-rivervalleyhike.webp" },
  { name: "Mississippi National", lat: 44.9709, lng: -93.2221, region: "Metro", badge: "badge-mississippinational.webp" },
  { name: "Murphy-Hanrehan", lat: 44.7143, lng: -93.3807, region: "Metro", badge: "badge-murphyhanrehan.webp" },
  { name: "O’Brien State Park", lat: 45.2294, lng: -92.7651, region: "Metro", badge: "badge-obrienstatepark.webp" },

  // 🟡 SOUTHEAST REGION
  { name: "Big Island", lat: 43.6283, lng: -93.3339, region: "Southeast", badge: "badge-bigisland.webp" },
  { name: "Bluff Top", lat: 44.5062, lng: -92.3387, region: "Southeast", badge: "badge-blufftop.webp" },
  { name: "Chimney Rock", lat: 44.0984, lng: -92.0473, region: "Southeast", badge: "badge-chimneyrock.webp" },
  { name: "Hidden Falls", lat: 44.3342, lng: -93.0882, region: "Southeast", badge: "badge-hiddenfalls.webp" },
  { name: "Kings Bluff", lat: 43.9894, lng: -91.4371, region: "Southeast", badge: "badge-kingsbluff.webp" },
  { name: "Lake Loop", lat: 43.5206, lng: -92.5092, region: "Southeast", badge: "badge-lakeloop.webp" },
  { name: "Mount Charity", lat: 44.1558, lng: -91.7708, region: "Southeast", badge: "badge-mountcharity.webp" },
  { name: "Mystery Cave", lat: 43.6237, lng: -92.1372, region: "Southeast", badge: "badge-mysterycave.webp" },
  { name: "Rice Lake", lat: 44.1978, lng: -93.1717, region: "Southeast", badge: "badge-ricelake.webp" },
  { name: "Singing Hills", lat: 44.2149, lng: -93.6014, region: "Southeast", badge: "badge-singinghills.webp" },

  // 🔴 WEST & SOUTHWEST REGION
  { name: "Big Stone Lake", lat: 45.3556, lng: -96.4406, region: "West & Southwest", badge: "badge-bigstonelake.webp" },
  { name: "Blue Mounds", lat: 43.7043, lng: -96.2012, region: "West & Southwest", badge: "badge-bluemounds.webp" },
  { name: "Redwood River", lat: 44.3879, lng: -95.9286, region: "West & Southwest", badge: "badge-redwoodriver.webp" },
  { name: "Kilen Woods", lat: 43.6889, lng: -95.1879, region: "West & Southwest", badge: "badge-kilenwoods.webp" },
  { name: "Pipestone National", lat: 44.0105, lng: -96.3178, region: "West & Southwest", badge: "badge-pipestonenationals.webp" },
  { name: "Minneopa Falls", lat: 44.1402, lng: -94.0949, region: "West & Southwest", badge: "badge-minneopafalls.webp" },

  // TEST BADGE (BECAUSE WE NEED A BADGE FOR TESTING PURPOSES)
  { name: "Test Badge", lat: 44.9709309, lng: -93.4949981, region: "Testing", badge: "test-badge.webp" },
];

// ---------- component ----------
const BadgeCollection = () => {
  const [user, setUser] = useState(null);
  const [badges, setBadges] = useState([]);
  const [showDialog, setShowDialog] = useState(true);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // sanity check
  useEffect(() => {
    databases
      .listDocuments(DB_ID, COLLECTION_ID)
      .then(() => console.log("✅ Collection ID OK"))
      .catch((err) => console.error("❌ Collection ID problem:", err));
  }, []);

  // load user + badges
  useEffect(() => {
    const run = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
        const res = await databases.listDocuments(
          DB_ID,
          COLLECTION_ID,
          [Query.equal("userId", currentUser.$id), Query.limit(200)]
        );
        setBadges(res.documents);
      } catch (e) {
        console.error(e);
        setMessage("Could not load badge data.");
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  // brief refresh
  useEffect(() => {
    if (!user) return;
    const t = setTimeout(async () => {
      try {
        const res = await databases.listDocuments(
          DB_ID,
          COLLECTION_ID,
          [Query.equal("userId", user.$id), Query.limit(200)]
        );
        setBadges(res.documents);
      } catch (e) {
        console.error("Second fetch failed:", e);
      }
    }, 2000);
    return () => clearTimeout(t);
  }, [user]);

  // map badge display name -> exact filename from trails
  const fileByName = useMemo(
    () => new Map(trails.map((t) => [t.name.toLowerCase(), t.badge])),
    []
  );

  // de-dupe by name
  const uniqueBadges = useMemo(() => {
    const m = new Map();
    for (const b of badges) {
      const name = (b.badgeName || b.name || "").trim();
      if (!name) continue;
      const k = name.toLowerCase();
      if (!m.has(k)) m.set(k, { ...b, __displayName: name });
    }
    return Array.from(m.values());
  }, [badges]);

  // test badge geolocate/award (6.5 km)
  const handleTryForBadge = async () => {
    if (!user) {
      alert("Please sign in with Google first.");
      return;
    }
    setMessage("Checking location...");
    if (!navigator.geolocation) {
      setMessage("Geolocation not supported.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const userLat = pos.coords.latitude;
        const userLon = pos.coords.longitude;
        const distKm = (lat1, lon1, lat2, lon2) => {
          const R = 6371;
          const dLat = ((lat2 - lat1) * Math.PI) / 180;
          const dLon = ((lon2 - lon1) * Math.PI) / 180;
          const a =
            Math.sin(dLat / 2) ** 2 +
            Math.cos((lat1 * Math.PI) / 180) *
              Math.cos((lat2 * Math.PI) / 180) *
              Math.sin(dLon / 2) ** 2;
          return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        };
        const d = distKm(userLat, userLon, TEST_BADGE_COORDS.lat, TEST_BADGE_COORDS.lng);
        if (d < 6.5) {
          try {
            const today = new Date().toISOString().split("T")[0];
            await databases.createDocument(DB_ID, COLLECTION_ID, ID.unique(), {
              userId: user.$id,
              badgeName: "Test Badge",
              earnedDate: today,
              badgeFile: "test-badge.webp",
            });
            setBadges((prev) => [...prev, { badgeName: "Test Badge", earnedDate: today, badgeFile: "test-badge.webp" }]);
            setMessage("🏆 You earned the Test Badge!");
          } catch (err) {
            console.error("Error awarding badge:", err);
            setMessage("Error saving your badge.");
          }
        } else {
          setMessage("");
        }
      },
      (err) => {
        console.error("Geolocation error:", err);
        setMessage("Could not get your location.");
      }
    );
  };

  if (loading) return <p className="text-center mt-10">Loading badges...</p>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {showDialog && (
        <TryForBadgeDialog
          visible={showDialog}
          setVisible={setShowDialog}
          onYes={handleTryForBadge}
        />
      )}

      <div className="border border-gray-300 rounded-3xl p-10 bg-gradient-to-b from-gray-50 to-white shadow-xl">
        <h2 className="text-4xl font-bold mb-12 text-center">🏅 Your Collected Badges</h2>

        {uniqueBadges.length === 0 ? (
          <div className="text-center">
            <img
              src={placeholderBadge}
              alt="Placeholder badge"
              className="mx-auto my-4 select-none"
              style={{ maxWidth: "100%", height: "auto", width: 420 }}
            />
            <p>When you earn your first badge, the Placeholder Badge will disappear and your earned badge will appear here!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 justify-items-center">
            {uniqueBadges.map((badge) => {
              const displayName = badge.__displayName || badge.badgeName || badge.name || "";
              const explicitFile = badge.badgeFile;
              const mappedFile = fileByName.get(displayName.toLowerCase());

              const imgSrc = explicitFile
                ? new URL(`../assets/images/${explicitFile}`, import.meta.url).href
                : mappedFile
                ? new URL(`../assets/images/${mappedFile}`, import.meta.url).href
                : imageForBadge(displayName);

              return (
                <div
                  key={badge.$id || displayName}
                  className="flex flex-col items-center border rounded-2xl p-6 bg-white hover:shadow-2xl transition-all transform hover:scale-105"
                  style={{ width: "390px", height: "460px" }}
                >
                  <img src={imgSrc} alt={displayName} className="w-[360px] h-[360px] object-contain drop-shadow-lg" />
                  <p className="mt-4 font-semibold text-center text-xl">{displayName}</p>
                  <p className="text-base text-gray-500">{badge.earnedDate}</p>
                </div>
              );
            })}
          </div>
        )}

        {message && (
          <p className="mt-8 text-center text-xl font-medium text-blue-700">{message}</p>
        )}
      </div>
    </div>
  );
};

export default BadgeCollection;