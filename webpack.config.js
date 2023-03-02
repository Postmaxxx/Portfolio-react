//const webpack = require('webpack');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
import Dotenv from "dotenv-webpack";
//const port = process.env.PORT || 3000;
const {InjectManifest} = require("workbox-webpack-plugin");

module.exports = {
	entry: "./src/public/index.js",
	output: {
		filename: "bundle.js"
	},
	devtool: "inline-source-map",
	module: {
		rules: 
            {
            	test: /\.s[ac]ss$/,
            	use: [
            		// Creates `style` nodes from JS strings
                	"style-loader",
            		// Translates CSS into CommonJS
            		"css-loader",
            		// Compiles Sass to CSS
            		"sass-loader",
            	],
            },
	}, 

	plugins: [
		new Dotenv(),
		new InjectManifest({
			swSrc: "./service-worker.js",
			swDest: "service-worker.js",
		})
	]
};