import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [{ protocol: 'http', hostname: 'localhost', port: '1337', pathname: '/uploads/**' }],
  },
};
