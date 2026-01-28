import fs from "node:fs/promises";
import path from "node:path";

const query = process.env.PEXELS_QUERY || "modern home renovation";
const perPage = Number(process.env.PEXELS_PER_PAGE || "6");
const apiKey = process.env.PEXELS_API_KEY;

if (!apiKey) {
  console.error("PEXELS_API_KEY is required to download images.");
  process.exit(1);
}

const targetDir = path.join(process.cwd(), "public", "images");
await fs.mkdir(targetDir, { recursive: true });

const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}`;
const response = await fetch(url, {
  headers: { Authorization: apiKey },
});

if (!response.ok) {
  console.error(`Pexels request failed: ${response.status}`);
  process.exit(1);
}

const data = await response.json();
const photos = data.photos || [];

for (const photo of photos) {
  const imgUrl = photo.src.large2x || photo.src.large || photo.src.original;
  const ext = imgUrl.includes(".png") ? "png" : "jpg";
  const filename = `pexels-${photo.id}.${ext}`;
  const filepath = path.join(targetDir, filename);

  const imgRes = await fetch(imgUrl);
  if (!imgRes.ok) {
    console.warn(`Skipping image ${photo.id}.`);
    continue;
  }
  const arrayBuffer = await imgRes.arrayBuffer();
  await fs.writeFile(filepath, Buffer.from(arrayBuffer));
  console.log(`Downloaded ${filename}`);
}

console.log("Done.");
