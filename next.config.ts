import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source:      '/:path*',
        has: [{ type: 'host', value: 'perlogy.africa' }],
        destination: 'https://perlogy.co.ke/:path*',
        permanent:   true,
      },
      {
        source:      '/:path*',
        has: [{ type: 'host', value: 'www.perlogy.africa' }],
        destination: 'https://perlogy.co.ke/:path*',
        permanent:   true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.brandfetch.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
    ],
  },
};

export default nextConfig;
