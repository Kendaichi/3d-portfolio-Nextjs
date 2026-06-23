/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Tree-shake large icon/animation packages so only used exports ship,
    // cutting the unused-JavaScript flagged by Lighthouse.
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@react-three/drei",
    ],
  },
};

export default nextConfig;
