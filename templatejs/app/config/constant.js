var timeStamp = (new Date()).getTime() + "";

module.exports = {
    timeStamp: "fzny" + timeStamp,
    cdnHost: "https://a-static.fzzqxf.com",
    //cdnHost: "https://static.fzzqcdn.com",
    publicPath: "",//"./dist/",
    releaseDir: "../release/",
    srcDir: "../src/",
    libPath: "../public/lib",
    libConfig: "./lib/",
    reactVendor: [
        "react",
        "react-immutable-render-mixin",
        "react-dom",
        "react-transition-group",
        "react-router",
        "react-router-dom",
        "redux",
        "redux-thunk",
        "react-redux"
    ],
    libVendor: [
        "babel-polyfill",
        "immutable",
        "react-fastclick"
        // "echarts/lib/echarts",
        // "echarts/lib/chart/line",
        // "echarts/lib/chart/lines",
        // "echarts/lib/chart/pie"
    ],
    lessAutoPrefixConfig: [
        "last 2 Chrome versions",
        "ie >= 8",
        "Firefox >= 20",
        "iOS 7",
        "> 5%"
    ]
}