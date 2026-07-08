import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const logoPath = path.join(root, "public/images/Upvox.png");
const appDir = path.join(root, "src/app");
const publicDir = path.join(root, "public");

const background = { r: 21, g: 21, b: 21, alpha: 1 };

async function createSquareIcon(size, outputPath, paddingRatio = 0.12) {
  const padding = Math.round(size * paddingRatio);
  const maxWidth = size - padding * 2;
  const maxHeight = size - padding * 2;

  const resizedLogo = await sharp(logoPath)
    .resize({
      width: maxWidth,
      height: maxHeight,
      fit: "inside",
    })
    .toBuffer();

  const { width = maxWidth, height = maxHeight } =
    await sharp(resizedLogo).metadata();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background,
    },
  })
    .composite([
      {
        input: resizedLogo,
        left: Math.round((size - width) / 2),
        top: Math.round((size - height) / 2),
      },
    ])
    .png()
    .toFile(outputPath);
}

async function createOgImage(outputPath) {
  const width = 1200;
  const height = 630;
  const logoWidth = 560;

  const resizedLogo = await sharp(logoPath)
    .resize({ width: logoWidth, fit: "inside" })
    .toBuffer();

  const { width: logoW = logoWidth, height: logoH = 200 } =
    await sharp(resizedLogo).metadata();

  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background,
    },
  })
    .composite([
      {
        input: resizedLogo,
        left: Math.round((width - logoW) / 2),
        top: Math.round((height - logoH) / 2 - 40),
      },
    ])
    .png()
    .toFile(outputPath);
}

await mkdir(appDir, { recursive: true });

await Promise.all([
  createSquareIcon(32, path.join(publicDir, "favicon-32x32.png"), 0.08),
  createSquareIcon(180, path.join(publicDir, "apple-touch-icon.png")),
  createSquareIcon(512, path.join(publicDir, "icon-512.png")),
  createSquareIcon(512, path.join(appDir, "icon.png")),
  createSquareIcon(180, path.join(appDir, "apple-icon.png")),
  createOgImage(path.join(publicDir, "og-image.png")),
]);

console.log("Generated favicon, apple-touch-icon, and og-image assets.");
