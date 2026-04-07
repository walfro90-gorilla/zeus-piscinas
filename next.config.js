/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wnujoyzdpdyxblgdtxjw.supabase.co',
      },
    ],
  },
};

module.exports = nextConfig;
