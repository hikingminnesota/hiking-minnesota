// src/appwrite.js
// Hiking Minnesota – Appwrite client (auth + db) with no anonymous sessions
// Handles authentication, sessions, and database exports

// src/appwrite.js
// Hiking Minnesota – Appwrite client (auth + db) with no anonymous sessions
// Handles authentication, sessions, and database exports

import { Client, Account, Databases } from "appwrite";

// Keep your IDs as-is
export const DB_ID = "68fead99001a73e6e430";
export const COLLECTION_ID = "userbadges";

/** ---- Environment guards ---- */
const endpoint  = import.meta.env.VITE_APPWRITE_ENDPOINT;
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;

if (!endpoint) {
  throw new Error(
    "[hikingminnesota] Missing VITE_APPWRITE_ENDPOINT. Add it to .env.local"
  );
}
if (!projectId) {
  throw new Error(
    "[hikingminnesota] Missing VITE_APPWRITE_PROJECT_ID. Add it to .env.local"
  );
}

/** ---- Appwrite client ---- */
const client = new Client().setEndpoint(endpoint).setProject(projectId);
export const account = new Account(client);
export const databases = new Databases(client);

// Expose for dev tools
if (import.meta.env.DEV && typeof window !== "undefined") {
  window.__appwrite = { account, client };
}

/** ------------------------------------------------------------------
 *  Auth helpers
 *  - getCurrentUser(): returns user or null (no anonymous session)
 *  - loginWithGoogle(): OAuth2 to Google (with in-flight guard)
 *  - logout(): clear current session
 *  - getEnrichedUser(): merges Google identity fields if top-level blank
 * ------------------------------------------------------------------ */

export async function getCurrentUser() {
  try {
    return await account.get();        // real user if logged in
  } catch (e) {
    if (e?.code === 401) return null;  // not logged in
    throw e;                           // surface unexpected errors
  }
}

/** In-flight guard to avoid 429s from rapid/multiple clicks */
let __loginInFlight = false;
let __loginLastTs = 0;

export async function loginWithGoogle(redirectPath = "/badges/me") {
  // Ignore rapid repeat calls within 4s
  const now = Date.now();
  if (__loginInFlight && now - __loginLastTs < 4000) return;

  __loginInFlight = true;
  __loginLastTs = now;

  try {
    // Ensure absolute URLs (Appwrite expects full URLs)
    const success = new URL(redirectPath, window.location.origin).toString();
    const failure = new URL("/auth-failed", window.location.origin).toString();

    // Clear any lingering sessions before OAuth
    try { await account.deleteSessions(); } catch (_) {}

    await account.createOAuth2Session("google", success, failure);
    // Redirects away on success; nothing after this line runs on this page load
  } catch (err) {
    console.error("OAuth error:", err);
    // If we didn't redirect (sync error), allow retry shortly
    setTimeout(() => { __loginInFlight = false; }, 1500);
  }
}

export async function logout() {
  try {
    await account.deleteSession("current");
  } catch (e) {
    console.warn("[hikingminnesota] logout error:", e?.message);
  }
}

// Pulls Google identity fields if top-level name/email are blank
export async function getEnrichedUser() {
  const user = await getCurrentUser();
  if (!user) return null;

  const hasName = !!(user.name && user.name.trim());
  const hasEmail = !!(user.email && user.email.trim());
  if (hasName && hasEmail) return user;

  try {
    if (typeof account.listIdentities === "function") {
      const list = await account.listIdentities();
      const google = list?.identities?.find?.((i) => i.provider === "google");
      if (google) {
        return {
          ...user,
          name: hasName ? user.name : (google.providerName || ""),
          email: hasEmail ? user.email : (google.providerEmail || ""),
        };
      }
    }
  } catch (e) {
    console.warn("[hikingminnesota] identities lookup failed:", e?.message);
  }

  return user;
}