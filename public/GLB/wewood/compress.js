/**
 * compress.js
 *
 * Batch-compress every .glb in this folder.
 * For each file "Name.glb":
 *   1. rename original  ->  "Name_old.glb"
 *   2. write compressed ->  "Name.glb"  (Draco geometry + WebP textures)
 *
 * Requirements:
 *   npm i -g @gltf-transform/cli
 *   (the CLI must be on your PATH — test with: gltf-transform --version)
 *
 * Run from inside the wewood folder:
 *   node compress.js
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const dir = __dirname;

// Grab all .glb files, skip any already tagged _old and skip this script
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
  const base = file.slice(0, -4); // strip ".glb"
  const oldName = `000_${base}_old.glb`;
  const originalPath = path.join(dir, file);
  const oldPath = path.join(dir, oldName);

  // If an _old already exists, this file was likely done before — skip
  if (fs.existsSync(oldPath)) {
    console.log(`⏭  Skipping "${file}" (already has ${oldName})`);
    continue;
  }

  try {
    // 1. rename original -> _old
    fs.renameSync(originalPath, oldPath);

    // 2. compress _old -> original name
    // Quotes handle spaces in filenames.
    const cmd = `gltf-transform draco "${oldPath}" "${originalPath}"`;
    console.log(`⚙  Compressing "${file}" ...`);
    execSync(cmd, { stdio: "inherit" });

    // size report
    const oldSize = (fs.statSync(oldPath).size / 1024 / 1024).toFixed(2);
    const newSize = (fs.statSync(originalPath).size / 1024 / 1024).toFixed(2);
    const saved = (100 - (newSize / oldSize) * 100).toFixed(0);
    console.log(`✅ ${file}: ${oldSize}MB → ${newSize}MB  (-${saved}%)\n`);
    done++;
  } catch (err) {
    // roll back the rename so nothing is lost on failure
    if (fs.existsSync(oldPath) && !fs.existsSync(originalPath)) {
      fs.renameSync(oldPath, originalPath);
    }
    console.error(`❌ Failed on "${file}": ${err.message}\n`);
    failed++;
  }
}

console.log(`\nDone. ${done} compressed, ${failed} failed.`);
console.log(`Originals kept as *_old.glb. Delete them once you've verified the compressed versions look right.`);
