import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Match real display widths; never advertise 1920–3840px derivatives.
    deviceSizes: [384, 640, 750, 828, 1080, 1200, 1600],
    imageSizes: [32, 48, 64, 96, 128, 192, 256],
  },
};

export default nextConfig;
