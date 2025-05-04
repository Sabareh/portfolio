const http = require('http');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Next.js Server Connection Troubleshooter');

// Check if port 3000 is in use
function checkPort() {
  return new Promise((resolve) => {
    const req = http.request({
      host: 'localhost',
      port: 3000,
      path: '/',
      method: 'GET',
      timeout: 3000
    }, (res) => {
      console.log('✅ Port 3000 is accessible, server appears to be running');
      console.log(`   Status: ${res.statusCode}`);
      resolve(true);
    });
    
    req.on('error', () => {
      console.log('❌ Cannot connect to localhost:3000');
      console.log('   The Next.js development server may not be running');
      resolve(false);
    });
    
    req.on('timeout', () => {
      console.log('⏱️ Request timed out trying to connect to localhost:3000');
      req.destroy();
      resolve(false);
    });
    
    req.end();
  });
}

// Check for .next directory and if it exists
function checkNextCache() {
  const nextDir = path.join(process.cwd(), '.next');
  if (fs.existsSync(nextDir)) {
    console.log('✅ .next directory exists');
    // Check if it's potentially corrupted (very simple check)
    try {
      const files = fs.readdirSync(nextDir);
      if (files.length === 0) {
        console.log('⚠️ .next directory is empty, might be corrupted');
      }
    } catch (err) {
      console.log('⚠️ Error reading .next directory:', err.message);
    }
  } else {
    console.log('❌ .next directory not found');
  }
}

// Check network interfaces
function checkNetworkInterfaces() {
  try {
    const os = require('os');
    const interfaces = os.networkInterfaces();
    let hasLoopback = false;
    
    for (const ifaceName in interfaces) {
      interfaces[ifaceName].forEach(iface => {
        if (iface.address === '127.0.0.1' || iface.address === '::1') {
          hasLoopback = true;
        }
      });
    }
    
    if (hasLoopback) {
      console.log('✅ Loopback network interface is available');
    } else {
      console.log('⚠️ No loopback interface found, might cause localhost connection issues');
    }
  } catch (err) {
    console.log('⚠️ Error checking network interfaces:', err.message);
  }
}

async function runTests() {
  console.log('\n=== Environment Info ===');
  try {
    const nodeVersion = execSync('node --version').toString().trim();
    console.log(`Node.js Version: ${nodeVersion}`);
    
    try {
      const npmVersion = execSync('npm --version').toString().trim();
      console.log(`npm Version: ${npmVersion}`);
    } catch {
      console.log('npm version: Not found');
    }
  } catch (err) {
    console.log('Error getting environment info:', err.message);
  }
  
  console.log('\n=== Server Connection ===');
  await checkPort();
  
  console.log('\n=== Next.js Cache ===');
  checkNextCache();
  
  console.log('\n=== Network ===');
  checkNetworkInterfaces();
  
  console.log('\n=== Recommendations ===');
  console.log('If you see connection issues:');
  console.log('1. Try stopping any running Next.js servers with Ctrl+C');
  console.log('2. Run "node scripts/reset-cache.js" to clear the Next.js cache');
  console.log('3. Try starting the development server again with "npm run dev"');
  console.log('4. Check if your firewall is blocking localhost connections');
}

runTests();
