import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    // Permitir imágenes locales
    unoptimized: true,
    // Configurar calidades permitidas
    qualities: [25, 50, 75, 100],
  },
};

export default nextConfig;
