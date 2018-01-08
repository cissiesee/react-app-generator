var path = require("path");
var merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var DllReferencePlugin = require("webpack/lib/DllReferencePlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var common = require("./webpack.common");

var reactConfig = require("./react-config");
var libConfig = require("./lib-config");

var constant = require("./constant");
var srcDir = constant.srcDir;
var outDir = constant.outDir;
var publicPath = constant.publicPath;
var libPath = constant.libPath;
var tplDir = constant.tplDir;

module.exports = merge(common, {
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, outDir),
        publicPath: publicPath,
        filename: "[name]." + constant.timeStamp + ".js"
    },
    plugins: [
        new ExtractTextPlugin("[name]." + constant.timeStamp + ".css"),
        new DllReferencePlugin({
            context: __dirname,
            manifest: require(path.resolve(__dirname, libPath + "manifest-react.json"))
        }),
        new DllReferencePlugin({
            context: __dirname,
            manifest: require(path.resolve(__dirname, libPath + "manifest-lib.json"))
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, tplDir + "index.html"),
            template: path.resolve(__dirname, srcDir + "tpl/index.html"),
            _reactRel: reactConfig.reactRel.js,
            _lib: libConfig.lib.js,
            xhtml: true
        })
    ]
});