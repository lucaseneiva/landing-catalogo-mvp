// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Mantenha o antigo se quiser, ou remova-o.
      // {
      //   protocol: 'https',
      //   hostname: 'images.ctfassets.net',
      // },
      // Adicione a nova configuração para o DatoCMS
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;