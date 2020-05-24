const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './index.js',
	// devtool: 'source-map',
	// devtool: 'cheap-module-eval-source-map',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader?limit=819200'
			},
			{
				test: /\.js$/,
				exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				// exclude:/node_modules/,
				// loader: 'style-loader!css-loader!postcss-loader?sourceMap'
				// loaders: ExtractTextPlugin.extract({
				// 	fallback: {
				// 		loader: 'style-loader'
				// 	},
				// 	use: [
				// 		'style-loader',
				// 		{
				// 		  loader: 'css-loader',
				// 		  options: {
				// 			// sourceMap: true,
				// 			// importLoaders: 1
				// 		  }
				// 		},
				// 		{
				// 		  loader: 'postcss-loader',
				// 		  options: {
				// 			ident: 'postcss',
				// 			// sourceMap: true,
				// 			exclude: path.resolve(__dirname,'/node_modules/'),
				// 			plugins: loader => [
				// 			  require('autoprefixer')({ "browserslist": [
				// 				"defaults",
				// 				"not ie < 11",
				// 				"last 2 versions",
				// 				"> 1%",
				// 				"iOS 7",
				// 				"last 3 iOS versions"
				// 			  ]}) // 添加前缀
				// 			]
				// 		  }
				// 		}
				// 	],
				// })
				loaders:ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{ loader: 'css-loader', options: { importLoaders: 1 } },
						'postcss-loader'
					]
				   })
			},
			{
				test: /\.(woff|svg|eot|ttf)\??.*$/,
				loader: 'url-loader?limit=50000&name=[path][name].[ext]'
			}
		]
	},
	devServer: {
		contentBase: "src",//本地服务器所加载的页面所在的目录
		historyApiFallback: true,//不跳转
		port: 3000,
		inline: true,//实时刷新
		// hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template:"index.html",
			filename: 'index.html',//生成文件存放路径
			title:'index',
			inject: true
		}),
		new ExtractTextPlugin('bundle.css')
	]
}


var src = path.join(__dirname, '..', '..', 'src')
var fs = require('fs')
if (fs.existsSync(src)) {
	module.exports.resolve = { alias: { 'react-router-redux': src } }
	module.exports.module.loaders.push({
		test: /\.js$/,
		loaders: ['babel'],
		include: src
	});
}
