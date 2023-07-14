/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.IMG_HOST,
        pathname: process.env.IMG_PATH + "/**",
      },
    ],
  },
};

module.exports = nextConfig;
