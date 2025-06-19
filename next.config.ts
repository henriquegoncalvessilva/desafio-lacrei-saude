import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn1.iconfinder.com",
            },
        ],
    },
};

export default nextConfig;
