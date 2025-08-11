import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const pngToIco = (await import('png-to-ico')).default;

const svgPath = process.argv[2];
const outputIco = process.argv[3] || 'favicon.ico';

if (!svgPath) {
  console.error('Usage: node png-to-ico.js <input.svg> [output.ico]');
  process.exit(1);
}

const tempPng = 'logo.png';

sharp(svgPath)
  .resize(256, 256)
  .png()
  .toFile(tempPng)
  .then(() => pngToIco([tempPng]))
  .then(buf => {
    fs.writeFileSync(outputIco, buf);
    fs.unlinkSync(tempPng);
    console.log(`.ico generated: ${outputIco}`);
  })
  .catch(err => {
    console.error('Error:', err);
    if (fs.existsSync(tempPng)) fs.unlinkSync(tempPng);
  });