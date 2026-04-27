const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public', 'screen');

async function processImages() {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.endsWith('.png')) {
        const inputPath = path.join(dir, file);
        // Rename slightly to make names cleaner
        const cleanName = file.replace(/_C__Users_mist3_Downloads_/g, '').replace(/_index\.html\.png$/, '').replace(/[^a-zA-Z0-9-]/g, '_');
        const outputPath = path.join(dir, `${cleanName}.webp`);
        
        console.log(`Converting ${file} to ${cleanName}.webp...`);
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        fs.unlinkSync(inputPath);
      }
    }
    console.log('Done converting to webp and deleting pngs.');
  } catch (err) {
    console.error('Error processing images:', err);
  }
}

processImages();
