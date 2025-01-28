/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    name: "Makaveli96bg's Kasm Registry",
    description: "A custom registry for Kasm workspaces.",
    icon: "https://makaveli96bg.github.io/kasm-registry/Makaveli96bg.png",  // Corrected icon path
    listUrl: "https://makaveli96bg.github.io/kasm-registry/1.0/",  // Updated to match repo
    contactUrl: "https://github.com/Makaveli96bg/kasm-registry/issues",
  },
  basePath: "/kasm-registry/1.0",
};

module.exports = nextConfig;
