/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.cnbcfm.com', 'ichef.bbci.co.uk', 'cloudfront-us-east-2.images.arcpublishing.com', 'www.coindesk.com','cryptoslate.com', 's3.cointelegraph.com', 'images.cointelegraph.com'],
  },
  async redirects() {
    return [
      {
        source: '/500',
        destination: '/',
        permanent: true,
      },
      {
        source: '/404',
        destination: '/',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
