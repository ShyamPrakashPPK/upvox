import sharp from "sharp";
import toIco from "to-ico";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const logoPath = path.join(root, "public/images/Upvox.png");
const appDir = path.join(root, "src/app");
const publicDir = path.join(root, "public");

// Match Upvox.png — white logo on black
const background = { r: 0, g: 0, b: 0, alpha: 1 };

async function createSquareIconBuffer(size, paddingRatio = 0.1) {
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

  return sharp({
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
    .toBuffer();
}

async function createSquareIcon(size, outputPath, paddingRatio = 0.1) {
  const buffer = await createSquareIconBuffer(size, paddingRatio);
  await sharp(buffer).toFile(outputPath);
  return buffer;
}

async function createFaviconIco(outputPath) {
  const sizes = [16, 32, 48];
  const buffers = await Promise.all(
    sizes.map((size) => createSquareIconBuffer(size, 0.08)),
  );
  const ico = await toIco(buffers);
  await writeFile(outputPath, ico);
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
        top: Math.round((height - logoH) / 2),
      },
    ])
    .png()
    .toFile(outputPath);
}

await mkdir(appDir, { recursive: true });

await Promise.all([
  createSquareIcon(32, path.join(publicDir, "favicon-32x32.png"), 0.08),
  createSquareIcon(48, path.join(publicDir, "favicon-48x48.png"), 0.08),
  createSquareIcon(180, path.join(publicDir, "apple-touch-icon.png"), 0.1),
  createSquareIcon(512, path.join(publicDir, "icon-512.png"), 0.1),
  createSquareIcon(512, path.join(appDir, "icon.png"), 0.1),
  createSquareIcon(180, path.join(appDir, "apple-icon.png"), 0.1),
  createFaviconIco(path.join(appDir, "favicon.ico")),
  createFaviconIco(path.join(publicDir, "favicon.ico")),
  createOgImage(path.join(publicDir, "og-image.png")),
]);

console.log("Generated all icons from public/images/Upvox.png");
