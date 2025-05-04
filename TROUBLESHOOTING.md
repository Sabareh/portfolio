# Troubleshooting Guide

This document contains solutions for common issues you might encounter when developing this portfolio site.

## Webpack "Failed to fetch" Error

If you encounter this error in your browser console:

```
TypeError: Failed to fetch
    at __webpack_require__.hmrM (http://localhost:3000/_next/static/chunks/webpack.js?ts=1746354099710:1280:20)
```

This typically indicates a connection issue between your browser and the Next.js development server.

### Possible Solutions:

1. **Restart the development server**
   ```bash
   # Kill the current process
   # Press Ctrl+C in the terminal where Next.js is running
   
   # Then restart
   npm run dev
   ```

2. **Clear Next.js cache**
   ```bash
   # Run the reset script
   node scripts/reset-cache.js
   
   # Reinstall dependencies
   npm install
   
   # Restart the server
   npm run dev
   ```

3. **Check for port conflicts**
   ```bash
   # On Linux/Mac
   sudo lsof -i :3000
   
   # On Windows (in PowerShell as admin)
   netstat -ano | findstr :3000
   ```
   
   If another process is using port 3000, either close that process or configure Next.js to use a different port:
   ```bash
   # Start Next.js on a different port
   npm run dev -- -p 3001
   ```

4. **Run the troubleshooter script**
   ```bash
   node scripts/troubleshoot.js
   ```

5. **Check network issues**
   - Ensure your firewall isn't blocking localhost connections
   - Try using a different browser
   - Disable browser extensions temporarily

## Build Errors

If you encounter errors during build:

1. **Update dependencies**
   ```bash
   npm update
   ```

2. **Clean installation**
   ```bash
   rm -rf node_modules
   rm package-lock.json
   npm install
   ```

3. **Check for syntax errors**
   ```bash
   npm run lint
   ```

## Contact

If you're still experiencing issues after trying these solutions, please open an issue in the GitHub repository or contact the repository maintainer.
