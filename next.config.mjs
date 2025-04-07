/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Required for static export
  reactStrictMode: true, // Optional: enables React strict mode
  images: {
    unoptimized: true, // Disables Next.js image optimization
  },
  // (Optional) Add trailing slashes to URLs
  trailingSlash: true,
};

export default nextConfig;
