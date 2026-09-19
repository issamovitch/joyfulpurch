/**
 * compress.js
 *
 * Batch-compress every .glb in this folder with Draco.
 * For each file "Name.glb":
 *   1. rename original  ->  "000_Name_old.glb"
 *   2. write compressed ->  "Name.glb"
 *
 * Requirements:
 *   npm i -g @gltf-transform/cli
 *
 * Run from inside the folder:
 *   node compress.js
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const dir = __dirname;

const files = fs
  .readdirSync(dir)
  .filter((f) => f.toLowerCase().endsWith(".glb") && !f.endsWith("_old.glb"));

if (files.length === 0) {
  console.log("No .glb files to compress here.");
  process.exit(0);
}

console.log(`Found ${files.length} GLB file(s). Starting...\n`);

let done = 0;
let failed = 0;

for (const file of files) {
  const base = file.slice(0, -4);
  const oldName = `000_${base}_old.glb`;
  const originalPath = path.join(dir, file);
  const oldPath = path.join(dir, oldName);

  if (fs.existsSync(oldPath)) {
    console.log(`Skipping "${file}" (already has ${oldName})`);
    continue;
  }

  try {
    fs.renameSync(originalPath, oldPath);

    const cmd = `gltf-transform draco "${oldPath}" "${originalPath}"`;
    console.log(`Compressing "${file}" ...`);
    execSync(cmd, { stdio: "inherit" });

    const oldSize = (fs.statSync(oldPath).size / 1024 / 1024).toFixed(2);
    const newSize = (fs.statSync(originalPath).size / 1024 / 1024).toFixed(2);
    const saved = (100 - (newSize / oldSize) * 100).toFixed(0);
    console.log(`OK ${file}: ${oldSize}MB -> ${newSize}MB  (-${saved}%)\n`);
    done++;
  } catch (err) {
    if (fs.existsSync(oldPath) && !fs.existsSync(originalPath)) {
      fs.renameSync(oldPath, originalPath);
    }
    console.error(`FAILED on "${file}": ${err.message}\n`);
    failed++;
  }
}

console.log(`\nDone. ${done} compressed, ${failed} failed.`);
console.log(`Originals kept as 000_*_old.glb. Delete them once you've verified the compressed versions look right.`);
