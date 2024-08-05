/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/browserconfig.xml", // The URL path you want to serve the XML file from
        destination: "/public/browserconfig.xml", // The actual path to the file in your project
      },
      // Add more rewrites if needed
    ];
  },
};

module.exports = nextConfig;
