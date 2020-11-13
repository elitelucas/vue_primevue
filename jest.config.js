module.exports = {
	preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
	collectCoverage: true,
	collectCoverageFrom: [
		'**/*.{ts,js,vue}',
		'!**/node_modules/**',
		'!**/vendor/**',
		'!**/dist/**',
		'!src/main.js',
		'!src/router/index.js'
	],
	reporters: ['default', 'jest-junit']
};
