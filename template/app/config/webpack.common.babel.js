import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import DllReferencePlugin from "webpack/lib/DllReferencePlugin";
//const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
//const { CheckerPlugin } = require('awesome-typescript-loader')
//var cssValues = require('postcss-modules-values');

import { outDir, srcDir, libPath } from "./constant";

var plugins = [
    //new CommonsChunkPlugin('scripts/common' + afterfix, ['index', 'vender']),
    new ExtractTextPlugin("styles/[name].css"),
    new DllReferencePlugin({
        context: __dirname,
        manifest: require(path.resolve(__dirname, libPath + "manifest-react.json")),
    }),
    new DllReferencePlugin({
        context: __dirname,
        manifest: require(path.resolve(__dirname, libPath + "manifest-lib.json")),
    }),
    new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, outDir + "index.html"),
        template: path.resolve(__dirname, srcDir + 'tpl/index.html')
    })
];

export default {
    entry: {
        index: path.resolve(__dirname, srcDir + "index.tsx")
    },
    // devServer: {
    //     contentBase: path.resolve(__dirname, outDir),
    //     inline: true,
    // },
    //devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "awesome-typescript-loader",
                exclude: /(node_modules|bower_components)/,
            }, {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader" // translates CSS into CommonJS 
                    }, {
                        loader: "less-loader" // compiles Less to CSS 
                    }]
                })
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: plugins
};
