var path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /(node_modules|build)/,
                use: [
                    'babel-loader',
                    'ts-loader'
                ]
            },

            {
                test: /\.js$/,
                exclude: /(node_modules|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },

            {
                test: /\.css$/,
                exclude: /(node_modules|build)/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },

            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=image/svg+xml"},
            {test: /\.(png|jpg|jpeg|gif)$/,  use: 'url-loader?limit=100000'}
        ]
    },
    externals: {
        'react': 'commonjs react'
    }
};