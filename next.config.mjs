await import('./env.mjs');

/** @type {import("next").NextConfig} */
const config = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: false,
  output: 'export',
};
export default config;
