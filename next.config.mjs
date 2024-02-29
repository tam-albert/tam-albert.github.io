/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/your-github-repo-name/" : "",
  images: {
    unoptimized: true,
  },
};

const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
