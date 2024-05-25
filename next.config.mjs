/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  //To enable a static export, change the output mode inside next.config.js
  output: "export",
  experimental: {
    serverComponentsExternalPackages: ["@rspress/mdx-rs"],
  },
  // images: { unoptimized: true },
};

export default nextConfig;
