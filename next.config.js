/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/:path*',
      },
    ]
  },
  redirects() {
    return [
      {
        source: '/',
        destination: '/panel',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      // Local url
      {
        protocol: 'http',
        hostname: '192.168.0.245',
      },
      {
        protocol: 'https',
        hostname: 'worktruck.ru',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
