/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Vesko Kasm regustry',
    description: 'The custom store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/Makaveli96bg/kasm-registry',
    contactUrl: 'https://github.com/Makaveli96bg/kasm-registry',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
