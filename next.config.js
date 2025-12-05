/** @type {import('next').NextConfig} */
const nextConfig = {
  // Sets the base path for deployment to a subdirectory (e.g., GitHub Pages)
  basePath: '/github-pages',
  
  // Required for static exports (e.g., for GitHub Pages deployment)
  output: 'export', 
  
  // For handling image imports and paths correctly in static exports
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;