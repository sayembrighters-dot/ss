// Version Update Script for Cache Busting
// Run this script before publishing to GitHub to automatically update version numbers

const fs = require('fs');
const path = require('path');

// Generate new version based on timestamp
const newVersion = Date.now().toString();

// Read index.html
const indexPath = path.join(__dirname, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Replace all version parameters with new version
indexContent = indexContent.replace(/\?v=[^"')]+/g, `?v=${newVersion}`);

// Write updated content back
fs.writeFileSync(indexPath, indexContent, 'utf8');

console.log(`✓ Updated all asset versions to: ${newVersion}`);
console.log('✓ Your website will now bypass browser cache when published!');