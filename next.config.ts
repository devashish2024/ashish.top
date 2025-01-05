const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.youtube.com", "skillicons.dev"],
    dangerouslyAllowSVG: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
