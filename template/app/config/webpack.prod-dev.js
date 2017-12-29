var path = require("path");
var merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var DllReferencePlugin = require("webpack/lib/DllReferencePlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var common = require("./webpack.common");

var reactConfig = require("./react_min-config");
var libConfig = require("./lib_min-config");

var constant = require("./constant");
var srcDir = constant.srcDir;
var distDir = constant.distDir;
var distLibPath = constant.distLibPath;
var publicPath = constant.publicPath;
var distAppPath = constant.distAppPath;

module.exports = merge(common, {
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, distDir + distAppPath),
        publicPath: publicPath,
        filename: "[name]." + constant.timeStamp + ".js"
    },
    plugins: [
        new ExtractTextPlugin("[name]." + constant.timeStamp + ".css"),
        new DllReferencePlugin({
            context: __dirname,
            manifest: require(path.resolve(__dirname, distLibPath + "manifest-react.json")),
        }),
        new DllReferencePlugin({
            context: __dirname,
            manifest: require(path.resolve(__dirname, distLibPath + "manifest-lib.json")),
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, distDir + "index.html"),
            template: path.resolve(__dirname, srcDir + "tpl/main.html"),
            _reactRel: reactConfig.reactRel_min.js,
            _lib: libConfig.lib_min.js,
            xhtml: true
        })
    ]
});