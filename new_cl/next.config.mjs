/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
      'res.cloudinary.com',
      'firebasestorage.googleapis.com',
      '*',
    ],
  },
};

export default nextConfig;
