import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export", // Static HTML export
  images: {
    unoptimized: true, // Firebase hosting için gerekli
  },
  // Eğer basit bir config istiyorsanız yukarısı yeterli

  // Daha detaylı config için:
  reactStrictMode: true,
  swcMinify: true,

  // images domain whitelist (eğer external image kullanıyorsanız)
  // images: {
  //   domains: ['example.com', 'another-domain.com'],
  // },
};

export default config;
