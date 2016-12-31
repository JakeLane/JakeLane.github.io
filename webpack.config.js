const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/index',
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/',
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: 'source-map',

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
			{
				test: /\.tsx?$/,
				use: [
					'react-hot-loader/webpack',
					'awesome-typescript-loader'
				],
				exclude: path.resolve(__dirname, 'node_modules'),
				include: path.resolve(__dirname, 'src'),
			},
			{
				test: /\.css$/,
				use: [
					'react-hot-loader/webpack',
					'style-loader',
					'css-loader?importLoaders=1',
					'postcss-loader',
				],
			},
			{
				test: /\.json$/,
				use: [
					'react-hot-loader/webpack',
					'json-loader',
				],
			},
			{
				test: /\.md$/,
				use: [
					'html-loader',
					'markdown-loader',
				],
			},
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader'
			},
		],
	},

	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.
	externals: {
	},

	performance: {
		hints: process.env.NODE_ENV === 'production' ? 'warning' : false
	},
};
