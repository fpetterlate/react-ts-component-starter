const externals = require("webpack-node-externals");
const config = require("./webpack.config.js");

config.target = "node";             //Ignore built-in modules like path, fs, etc
config.externals = [externals()];   //Exclude folder node_modules

module.exports = config;