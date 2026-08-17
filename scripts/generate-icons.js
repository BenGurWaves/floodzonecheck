const sharp = require('sharp');
const path = require('path');

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
  const sizes = [
    { size: 192, name: 'icon-192.png' },
    { size: 512, name: 'icon-512.png' },
    { size: 180, name: 'apple-touch-icon.png' },
  ];

  for (const { size, name } of sizes) {
    await sharp(Buffer.from(svgIcon))
      .resize(size, size)
      .png()
      .toFile(path.join(__dirname, '..', 'public', name));
    console.log(`Generated ${name}`);
  }

  // Generate favicon.ico (32x32)
  await sharp(Buffer.from(svgIcon))
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, '..', 'public', 'favicon.ico'));
  console.log('Generated favicon.ico');
}

generate().catch(console.error);
