/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withLess = require('@zeit/next-less');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([
  withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
    },
  }),
  [
    'import',
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    },
    'antd',
  ],
  withBundleAnalyzer,
], nextConfig);

module.exports = nextConfig
