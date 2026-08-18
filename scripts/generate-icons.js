const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="80" fill="#C45D3E"/>
  <g fill="#FFFFFF">
    <path d="M232 148c0-33 24-52 56-52 48 0 72 32 72 80 0 64-48 128-128 176-80-48-128-112-128-176 0-48 24-80 72-80 32 0 56 19 56 52z"/>
    <ellipse cx="256" cy="368" rx="120" ry="38"/>
    <ellipse cx="216" cy="333" rx="60" ry="15"/>
    <ellipse cx="296" cy="348" rx="50" ry="12"/>
  </g>
</svg>`;

async function generate() {
  const publicDir = path.join(__dirname, '..', 'public');
  const sizes = [
    { size: 192, name: 'icon-192.png' },
    { size: 512, name: 'icon-512.png' },
    { size: 180, name: 'apple-touch-icon.png' },
  ];

  for (const { size, name } of sizes) {
    await sharp(Buffer.from(svgIcon))
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, name));
    console.log(`Generated ${name}`);
  }

  // Build a proper multi-size ICO (16x16 + 32x32)
  const png16 = await sharp(Buffer.from(svgIcon)).resize(16, 16).png().toBuffer();
  const png32 = await sharp(Buffer.from(svgIcon)).resize(32, 32).png().toBuffer();

  const numImages = 2;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(numImages, 4);

  const dirSize = 16 * numImages;
  const offset = 6 + dirSize;
  const entries = [];
  let currentOffset = offset;

  for (const [size, data] of [[16, png16], [32, png32]]) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size, 0);
    entry.writeUInt8(size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(currentOffset, 12);
    entries.push(entry);
    currentOffset += data.length;
  }

  const ico = Buffer.concat([header, ...entries, png16, png32]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico);
  console.log('Generated favicon.ico');
}

generate().catch(console.error);
