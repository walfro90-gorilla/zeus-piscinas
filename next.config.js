/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wnujoyzdpdyxblgdtxjw.supabase.co',
        pathname: '/storage/v1/object/public/gorilla-assets/**',
      },
    ],
  },
};

module.exports = nextConfig;
