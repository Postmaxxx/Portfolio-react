const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const port = process.env.PORT || 3000;

module.exports = {
    entry: './src/public/index.js',
    output: {
      filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
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
        new Dotenv()
    ]
  };