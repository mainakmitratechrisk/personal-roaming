import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	trailingSlash: true,
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		],
	},
	output: 'export',
	distDir: 'out',
};

export default nextConfig;
