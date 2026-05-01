import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname, dirname, basename } from 'path';

const folders = [
  'public/services',
  'public/programs',
  'public/Insights',
];

const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

async function compressImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!EXTENSIONS.includes(ext)) return;

  const dir = dirname(filePath);
  const name = basename(filePath, ext);
  const outputPath = join(dir, `${name}.webp`);

  const before = statSync(filePath).size;

  await sharp(filePath)
    .webp({ quality: 78 })
    .toFile(outputPath);

  const after = statSync(outputPath).size;
  const saved = (((before - after) / before) * 100).toFixed(0);
  console.log(`✓ ${basename(filePath)} → ${basename(outputPath)} | ${(before/1024/1024).toFixed(1)}MB → ${(after/1024).toFixed(0)}KB (${saved}% smaller)`);
}

async function run() {
  for (const folder of folders) {
    const files = readdirSync(folder).map(f => join(folder, f));
    for (const file of files) {
      await compressImage(file);
    }
  }
}

run().catch(console.error);
