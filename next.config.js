/** @type {import('next').NextConfig} */
const nextConfig = {
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
