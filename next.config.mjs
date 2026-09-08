/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Old section URLs
      { source: '/practice-areas', destination: '/services', permanent: true },
      { source: '/expertise', destination: '/services', permanent: true },
      { source: '/insights', destination: '/', permanent: true },
      { source: '/insights/:slug', destination: '/', permanent: true },
      // Old practice slugs that were renamed or merged
      { source: '/practice-areas/energy-electricity-law', destination: '/services/electricity-matters', permanent: true },
      { source: '/practice-areas/electricity-energy-law', destination: '/services/electricity-matters', permanent: true },
      { source: '/practice-areas/regulatory-litigation', destination: '/services/electricity-matters', permanent: true },
      { source: '/practice-areas/civil-litigation', destination: '/services/dispute-resolution', permanent: true },
      { source: '/practice-areas/criminal-law', destination: '/services/dispute-resolution', permanent: true },
      { source: '/practice-areas/corporate-advisory', destination: '/services/corporate-and-commercial', permanent: true },
      { source: '/practice-areas/rera', destination: '/services/real-estate', permanent: true },
      // Anything else under the old prefix keeps its slug
      { source: '/practice-areas/:slug', destination: '/services/:slug', permanent: true },
    ]
  },
}

export default nextConfig
