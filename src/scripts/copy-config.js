const fs = require('fs-extra');
const path = require('path');
const arg = process.argv[2];

if (!arg) {
  console.error('Please provide an argument for the file name part.');
  process.exit(1);
}

// Determine the directory of the script
const scriptDirectory = __dirname;

// Define the source and destination paths relative to the script directory
const configFolderPath = path.join(scriptDirectory, '../config/');
const defaultSourcePath = path.join(configFolderPath, 'config.local.json');
let sourcePath = path.join(configFolderPath, `config.${arg}.json`);

const destinationPath = path.join(scriptDirectory, '../assets/config.json');

if(arg === 'init'){
  if(fs.existsSync(destinationPath)){
    process.exit(0);
  }
  sourcePath = defaultSourcePath;
}

fs.copy(sourcePath, destinationPath)
  .then(() => {
    console.log(`Copied ${sourcePath} to ${destinationPath}`);
  })
  .catch(err => {
    console.error(`Error copying ${sourcePath} to ${destinationPath}:`, err);
    process.exit(1);
  });
