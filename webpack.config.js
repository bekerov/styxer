var webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require('path');

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, 'app/app.js')
        ]
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build')
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets:['react']
                }
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader?sourceMap", "css-loader!less-loader?sourceMap")
            },
            { test: /\.html$/, loader: "file-loader" },
            { test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    devtool: "#eval-cheap-module-source-map",
    resolve: {
        root: path.resolve(__dirname, 'app'),
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new ExtractTextPlugin("style.css", { allChunks: true }),
    ]
};
