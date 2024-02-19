/** @type {import('next').NextConfig} */

const nextConfig = {
    /* config options here */
    output: "export",
    distDir: "./dist",
    basePath: "/portfolio",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;