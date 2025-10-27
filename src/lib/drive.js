// src/lib/drive.js
import { getGoogleOAuthSession } from "@/lib/appwrite";

const DRIVE_V3 = "https://www.googleapis.com/drive/v3";

async function findFolderId(accessToken, name) {
  const q = `name='${name}' and mimeType='application/vnd.google-apps.folder' and trashed=false`;
  const url = new URL(DRIVE_V3 + "/files");
  url.searchParams.set("q", q);
  url.searchParams.set("fields", "files(id,name)");

  const res = await fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } });
  if (!res.ok) throw new Error(`Drive search failed: ${res.status} ${await res.text()}`);
  const data = await res.json();
  return (data.files && data.files[0] && data.files[0].id) || null;
}

async function createFolder(accessToken, name, parentId = null) {
  const body = {
    name,
    mimeType: "application/vnd.google-apps.folder",
    ...(parentId ? { parents: [parentId] } : {}),
  };

  const res = await fetch(DRIVE_V3 + "/files?fields=id,name", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Drive create failed: ${res.status} ${await res.text()}`);
  const data = await res.json();
  return data.id;
}

export async function ensureDoc2WikiFolder() {
  const token = await getGoogleOAuthSession();
  let id = await findFolderId(token, "doc2wiki");
  if (id) return id;
  id = await createFolder(token, "doc2wiki");
  return id;
}
