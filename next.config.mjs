import mdx from "@next/mdx";

const withMDX = mdx();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
