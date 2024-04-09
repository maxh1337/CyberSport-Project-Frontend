/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '5200',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: 'sun9-18.userapi.com',
				port: '',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: 'mir-cdn.behance.net',
				port: '',
				pathname: '/**'
			}
		]
	}
}

module.exports = nextConfig
