import sharp from "sharp";
import pngToIco from "png-to-ico";
import fs from "fs";

async function convert() {
  // Step 1: generate PNGs
  await sharp("favicon.svg").resize(64, 64).png().toFile("icon-64.png");
  await sharp("favicon.svg").resize(32, 32).png().toFile("icon-32.png");
  await sharp("favicon.svg").resize(16, 16).png().toFile("icon-16.png");

  // Step 2: generate ICO (await the promise)
  const buf = await pngToIco(["icon-16.png", "icon-32.png", "icon-64.png"]);

  // Step 3: write ICO file
  fs.writeFileSync("favicon.ico", buf);

  console.log("✅ favicon.ico created!");
}

convert();