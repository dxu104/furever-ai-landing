const withNextIntl = require('next-intl/plugin')(
  './i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = withNextIntl(nextConfig);
