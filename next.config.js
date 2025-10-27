const withNextIntl = require('next-intl/plugin')(
  './i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    _next_intl_trailing_slash: 'false'
  },
  experimental: {
    // Remove appDir as it's deprecated
  }
};

module.exports = withNextIntl(nextConfig);
