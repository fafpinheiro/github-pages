/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  
  // *** REQUIRED for GitHub Pages (Repository Pages) ***
  // 1. Sets the base path for all assets and links.
  basePath: '/github-pages', 
  
  // 2. Tells Next.js to export as static HTML instead of running a server.
  output: 'export',
};

module.exports = nextConfig;