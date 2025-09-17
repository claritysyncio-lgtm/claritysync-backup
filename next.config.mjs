/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure Next uses the project folder as the root for tracing
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
};

export default nextConfig;
