const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});


module.exports = {
    entry: __dirname + '/app/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node-moduels/,
                loader: 'babel-loader'
            },
            {
                test: /\.sass$/,
                loaders: [require.resolve('style-loader'), require.resolve('css-loader'), require.resolve('sass-loader')]
            }
        ]
    },
    output: {
        filename: "transformed.js",
        path: __dirname + "/build.js"
    },
    plugins: [HTMLWebpackPluginConfig, extractSass]
};
