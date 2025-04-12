/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // For organisation GitHub Pages, we don't need a basePath
  basePath: '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig; 