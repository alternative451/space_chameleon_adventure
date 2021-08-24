const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//const ClosurePlugin = require('closure-webpack-plugin');


const env = process.env.ENV || "development"

module.exports = {
    mode: env,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    devtool: env === "development" ? 'inline-source-map' : 'nosources-source-map',
    plugins: [new HtmlWebpackPlugin({
        template: "src/index.html"
    })],
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-url-loader'
            }
        ]
    }
}