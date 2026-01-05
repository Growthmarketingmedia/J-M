import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/mold-damage-restoration-1',
        destination: '/mold-damage-restoration',
        permanent: true,
      },
      {
        source: '/albuquerque-%7C-santa-fe',
        destination: '/albuquerque-santafe',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
