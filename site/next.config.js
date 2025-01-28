/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    name: "Makaveli96bg's Kasm Registry",
    description: "A custom registry for Kasm workspaces.",
    icon: "https://github.com/kasm-registry2/Makaveli96bg.png",  // You can change this to a custom logo URL
    listUrl: "https://makaveli96bg.github.io/kasm-registry2/",  // This is your GitHub Pages link
    contactUrl: "https://github.com/Makaveli96bg/kasm-registry2/issues",
  },
  basePath: "/kasm-registry2/1.0",
};

module.exports = nextConfig;
