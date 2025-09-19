/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // These settings are crucial for GitHub Pages:
  basePath: process.env.NODE_ENV === "production" ? "/liga-ttnb.github.io" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/liga-ttnb.github.io/" : "",
  // This ensures links work when users navigate directly to inner pages
  trailingSlash: true,
};

module.exports = nextConfig;