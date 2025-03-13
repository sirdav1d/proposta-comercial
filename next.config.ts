/** @format */

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'logopng.com.br',
			},
			{
				protocol: 'https',
				hostname: 'w7.pngwing.com',
			},
			{
				protocol: 'https',
				hostname: 'encrypted-tbn0.gstatic.com',
			},
		],
	},
};

export default nextConfig;
