const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'login_bundle.js'
    },
    devtool: 'source-map',
    module:{
        rules: [
            {test: /\.js$/, loader: 'babel-loader'},
            {test: /\.jsx$/, loader: 'babel-loader'},
            {test: /\.(css|sass|scss)$/i, loader: 'style-loader!css-loader!sass-loader'}
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}