export default [{
	input: 'src/index.js',
	output: {
		file: './dist/commonjs/ecdh.js',
		format: 'cjs',
		sourcemap: false
	},
}, {
	input: 'src/index.js',
	output: {
		file: './dist/module/ecdh.js',
		format: 'es',
		sourcemap: false
	},
}, {
	input: 'src/index.js',
	output: {
		file: './browser.js',
		format: 'cjs',
		sourcemap: false
	},
}]