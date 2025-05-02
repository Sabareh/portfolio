/**
 * Get the base URL for the current environment
 * @returns {string} The base URL
 */
export function getBaseUrl() {
  const isProd = process.env.NODE_ENV === 'production';
  return isProd ? 'https://www.sabare.tech' : 'http://localhost:3000';
}

/**
 * Format an image URL correctly with the base URL
 * @param {string} imagePath - The image path or URL
 * @param {string} baseUrl - The base URL of the website
 * @returns {string} Properly formatted image URL
 */
export function formatImageUrl(imagePath, baseUrl) {
  if (!imagePath) return `${baseUrl}/static/images/home-opt.jpg`;
  return imagePath.startsWith('http') ? imagePath : `${baseUrl}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;
}
