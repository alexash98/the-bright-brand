import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const carouselDir = path.join(process.cwd(), "public", "carousel");

async function optimizeImages() {
  const files = await fs.readdir(carouselDir);

  for (const file of files) {
    if (!file.endsWith(".png")) {
      continue;
    }

    const inputPath = path.join(carouselDir, file);
    const outputPath = path.join(
      carouselDir,
      file.replace(/\.png$/i, ".webp"),
    );

    await sharp(inputPath)
      .resize({ width: 960, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(outputPath);

    const inputStats = await fs.stat(inputPath);
    const outputStats = await fs.stat(outputPath);

    console.log(
      `${file}: ${Math.round(inputStats.size / 1024)}KB -> ${Math.round(outputStats.size / 1024)}KB webp`,
    );
  }
}

optimizeImages().catch((error) => {
  console.error(error);
  process.exit(1);
});
