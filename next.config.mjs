/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  assetPrefix: isProd ? "/your-github-repo-name/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
