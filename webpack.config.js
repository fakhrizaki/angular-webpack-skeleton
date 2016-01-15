var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
	context: __dirname + '/app',
	entry: './index.js',
	output: {
		path: __dirname + '/app',
		filename: 'bundle.js',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/
		}, {
			test: /\.html$/,
			loader: 'html',
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loader: 'style!css?sourceMap',
			exclude: /node_modules/
		}, {
			test: /\.png$/,
			loader: "url-loader?limit=100000",
			exclude: /node_modules/
		}, {
			test: /\.jpg$/,
			loader: 'file?name=images/[name].[ext]',
			exclude: /node_modules/
		}, {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
			exclude: /node_modules/
		}, {
			test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?limit=10000&mimetype=application/font-woff"
		}, {
			test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?limit=10000&mimetype=application/font-woff"
		}, {
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?limit=10000&mimetype=application/octet-stream"
		}, {
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			loader: "file"
		}, {
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?limit=10000&mimetype=image/svg+xml"
		}]
	},
	devtool: 'cheap-module-eval-source-map',

	plugins: [
		new ExtractTextPlugin('styles.css')
	]
};

if (process.env.NODE_ENV === 'production') {
	config.output.path = __dirname + '/dist';
	config.module.loaders[0] = {
		test: /\.js$/,
		loader: 'ng-annotate!babel',
		exclude: /node_modules/
	};
}

module.exports = config
