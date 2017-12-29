var path = require("path");
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
//const { CheckerPlugin } = require('awesome-typescript-loader')
//var cssValues = require('postcss-modules-values');

var constant = require("./constant");

var libPath = constant.libPath;
var srcDir = constant.srcDir;
var outDir = constant.outDir;

var plugins = [
    //new CommonsChunkPlugin('scripts/common' + afterfix, ['index', 'vender'])
];

module.exports = {
    entry: {
        index: path.resolve(__dirname, srcDir + "index.tsx")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "awesome-typescript-loader",
                exclude: /(node_modules|bower_components)/,
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader" // translates CSS into CommonJS 
                    }]
                })
            }, {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader", // translates CSS into CommonJS 
                        options: {
                            sourceMap: true,
                            minimize: true
                        }
                    }, {
                        loader: "less-loader", // compiles Less to CSS
                        options: {
                            sourceMap: true,
                            plugins: [
                                new LessPluginAutoPrefix({
                                    browsers: constant.lessAutoPrefixConfig
                                })
                            ]
                        }
                    }]
                })
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        publicPath: "",
                        name: 'images/[name].[hash].[ext]'
                    }
                }]
            }]
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: plugins
};