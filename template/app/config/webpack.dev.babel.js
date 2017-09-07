import path from "path";
import merge from "webpack-merge";
import common from "./webpack.common.babel";
import BrowserSyncPlugin from "browser-sync-webpack-plugin";

import { outDir } from "./constant";

export default merge(common, {
    output: {
        path: path.resolve(__dirname, outDir),
        filename: "[name].js",
        sourceMapFilename: "[name].map"
    },
    plugins: [
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development
            host: '0.0.0.0',
            port: 3456, //代理后访问的端口
            server: { baseDir: [path.resolve(__dirname, outDir)] }
            //proxy: 'localhost:8080',//要代理的端口
        }, {
                // prevent BrowserSync from reloading the page
                // and let Webpack Dev Server take care of this
                reload: true
            })
    ]
});