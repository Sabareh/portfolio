const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧹 Next.js Cache Reset Tool');

function deleteFolderRecursive(dir) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach((file) => {
      const curPath = path.join(dir, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dir);
    return true;
  }
  return false;
}

// Delete the .next directory
const nextDir = path.join(process.cwd(), '.next');
console.log(`Checking for Next.js cache at: ${nextDir}`);
if (deleteFolderRecursive(nextDir)) {
  console.log('✅ Successfully deleted .next directory');
} else {
  console.log('ℹ️ No .next directory found');
}

// Clean npm cache
console.log('\nCleaning npm cache...');
try {
  execSync('npm cache clean --force', { stdio: 'inherit' });
  console.log('✅ Successfully cleaned npm cache');
} catch (error) {
  console.error('❌ Error cleaning npm cache:', error.message);
}

// Delete node_modules (optional - uncomment if needed)
/*
const nodeModulesDir = path.join(process.cwd(), 'node_modules');
console.log(`\nChecking for node_modules at: ${nodeModulesDir}`);
if (deleteFolderRecursive(nodeModulesDir)) {
  console.log('✅ Successfully deleted node_modules directory');
} else {
  console.log('ℹ️ No node_modules directory found');
}
*/

console.log('\n🚀 Next steps:');
console.log('1. Run "npm install" to reinstall dependencies');
console.log('2. Start the development server with "npm run dev"');
console.log('3. If you still encounter issues, check the troubleshooting guide in README.md');
