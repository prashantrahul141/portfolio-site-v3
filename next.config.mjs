await import('./env.mjs');

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: false,
  output: 'export',
};
export default config;
