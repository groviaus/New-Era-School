/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/vi/**",
      },
    ],
  },
  // Force sitemap to be dynamic
  experimental: {
    sitemap: false, // Disable static sitemap generation
  },
};

export default nextConfig;
