const path = require('path');

const DIST_DIR   = path.join(__dirname, "dist"),
    CLIENT_DIR = path.join(__dirname, "src");

//__dirname = __dirname.charAt(0).toUpperCase() + __dirname.slice(1);

const config = {
    entry: path.resolve(CLIENT_DIR, "./main.js"),

    output: {
        path: path.resolve(DIST_DIR, 'dist'),
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};

module.exports = config;
