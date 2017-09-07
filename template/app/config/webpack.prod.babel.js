import path from "path";
import merge from "webpack-merge";
import common from "./webpack.common.babel";
import UglifyJsPlugin from "webpack/lib/optimize/UglifyJsPlugin";

import { outDir } from "./constant";

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, outDir),
        filename: "[name].min.js"
    },
    plugins: [
        new UglifyJSPlugin()
    ]
});