var webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
    entry: {
        main: ["./main"]
    },
    output: {
        path: __dirname + "/dist",
        publicPath: "/assets/",
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node-modules/,
                queury: {
                    presets: ['es2015']
                }
            }
        ]
    }
}