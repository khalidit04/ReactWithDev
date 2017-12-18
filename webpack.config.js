var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {

    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR +"/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                exclude: /(node_modules|bower_components)/,
                include:SRC_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','stage-2', 'react']
                }
            } 
            
        ]
    }

}

module.exports = config;