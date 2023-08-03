/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public'
})

export default withPWA({
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true, asyncWebAssembly: true, layers: true };
    return config;
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
});
