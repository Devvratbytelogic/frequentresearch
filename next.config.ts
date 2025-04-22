// const path = require('path');
import path from "path";

const __dirname = path.resolve();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      
    },
    experimental: {
        serverActions: {},
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
}

// module.exports = nextConfig
export default nextConfig;
