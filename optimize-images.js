const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeFolder(dir, outDir, quality = 60, width = null) {
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.webp') || file.endsWith('.png') || file.endsWith('.jpg')) {
      const inputPath = path.join(dir, file);
      if (fs.lstatSync(inputPath).isDirectory()) continue;

      const stats = fs.statSync(inputPath);
      
      console.log(`Optimizing ${file} (${(stats.size / 1024).toFixed(2)} KB)...`);
      
      let pipeline = sharp(inputPath);
      if (width) {
        pipeline = pipeline.resize(width);
      }

      const outputName = file.replace('.png', '.webp').replace('.jpg', '.webp');
      const outputPath = path.join(outDir, outputName);
      
      await pipeline.webp({ quality, effort: 6 }).toFile(outputPath);
      
      const newStats = fs.statSync(outputPath);
      console.log(`Done: ${outputName} (${(newStats.size / 1024).toFixed(2)} KB)`);
    }
  }
}

async function run() {
  const publicDir = path.join(__dirname, 'public');
  const screenDir = path.join(publicDir, 'Screen');
  const optDir = path.join(publicDir, 'opt');
  const optScreenDir = path.join(publicDir, 'Screen', 'opt');

  console.log('Optimizing root public images to public/opt...');
  await optimizeFolder(publicDir, optDir, 60);
  
  console.log('Optimizing Screen images to public/Screen/opt (resizing to 400px width)...');
  await optimizeFolder(screenDir, optScreenDir, 50, 400);

  const thumbScreenDir = path.join(publicDir, 'Screen', 'thumb');
  console.log('Generating ultra-low res thumbnails for background (resizing to 200px width, quality 30)...');
  await optimizeFolder(screenDir, thumbScreenDir, 30, 200);
  
  console.log('All optimizations done.');
}

run();
