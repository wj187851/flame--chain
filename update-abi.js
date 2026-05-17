
const fs = require('fs');
const path = require('path');

// Read the new ABI
const artifactPath = path.join(__dirname, 'artifacts', 'contracts', 'FlameToken.sol', 'FlameToken.json');
const artifact = JSON.parse(fs.readFileSync(artifactPath, 'utf8'));
const newAbi = artifact.abi;

// Read the current app.js
const appJsPath = path.join(__dirname, 'frontend', 'js', 'app.js');
let appJsContent = fs.readFileSync(appJsPath, 'utf8');

// Replace the CONTRACT_ABI array
const abiStart = appJsContent.indexOf('const CONTRACT_ABI = [');
const abiEnd = appJsContent.indexOf('];', abiStart) + 2;

const newAbiString = `const CONTRACT_ABI = ${JSON.stringify(newAbi, null, 2)};`;

appJsContent = appJsContent.slice(0, abiStart) + newAbiString + appJsContent.slice(abiEnd);

// Write back
fs.writeFileSync(appJsPath, appJsContent, 'utf8');

console.log('✅ ABI updated successfully!');
