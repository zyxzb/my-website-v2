import createNextIntlPlugin from 'next-intl/plugin';
import withPlaiceholder from '@plaiceholder/next';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    globalNotFound: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io**',
      },
    ],
  },
};

export default withPlaiceholder(withNextIntl(nextConfig));
