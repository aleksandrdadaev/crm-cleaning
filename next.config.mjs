/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		SERVER_URL: process.env.REACT_SERVER_URL,
		ENV: process.env.REACT_ENV,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${process.env.REACT_SERVER_URL}/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `${process.env.REACT_SERVER_URL}/uploads/:path*`,
			},
		]
	},
}

export default nextConfig
