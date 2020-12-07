const path = require("path");
const webpack = require("webpack");

const PRODUCTION = "production";

const config = function (webpackMode) {
    return {
        // Webpack 5.0 caching
        cache: {
            type: "filesystem",
            cacheDirectory: path.resolve(__dirname, ".cache"),
        },

        entry: {
            app: "./src/app.js", // entry point. The key will be the name of the output bundle
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
        resolve: {
          alias: {
            Core: path.resolve(__dirname, "../../dist") // alias for wherever the builder/core libs end up installed
          }
        }
    };
};

module.exports = config;
