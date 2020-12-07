const path = require("path");
const webpack = require("webpack");

const PRODUCTION = "production";

const config = function (webpackMode) {
    return {
        entry: {
            builder: "./src/builder.js", // entry point. The key will be the name of the output bundle
        },
        plugins: [
            new webpack.DefinePlugin({
                production: JSON.stringify(webpackMode === PRODUCTION),
            }),
        ],
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, "dist"),
        },
    };
};

module.exports = config;
