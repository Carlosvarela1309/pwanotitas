module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{ico,png,json,js}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};