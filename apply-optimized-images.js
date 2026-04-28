const fs = require('fs');
const path = require('path');

function copyRecursiveSync(src, dest) {
  var exists = fs.existsSync(src);
  var stats = exists && fs.statSync(src);
  var isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName),
                        path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

const publicDir = path.join(__dirname, 'public');
const optDir = path.join(publicDir, 'opt');
const screenOptDir = path.join(publicDir, 'Screen', 'opt');

console.log('Applying optimized root images...');
copyRecursiveSync(optDir, publicDir);

console.log('Applying optimized Screen images...');
copyRecursiveSync(screenOptDir, path.join(publicDir, 'Screen'));

console.log('Cleaning up...');
// Optionnel: supprimer les dossiers opt
// fs.rmSync(optDir, { recursive: true, force: true });
// fs.rmSync(screenOptDir, { recursive: true, force: true });

console.log('Done.');
