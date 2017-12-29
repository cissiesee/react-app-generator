var webpack = require("webpack");
var path = require("path");
var merge = require("webpack-merge");
var prodDev = require("./webpack.prod-dev");
var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");

var constant = require("./constant");

module.exports = merge(prodDev, {
    output: {
        path: path.resolve(__dirname, constant.distDir + constant.distAppPath),
        filename: "[name]." + constant.timeStamp + ".min.js"
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new UglifyJsPlugin()
    ]
});