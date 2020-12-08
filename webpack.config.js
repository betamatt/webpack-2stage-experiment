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
        resolve: {
          // Polyfills for node libraries that are no longer provided by default in Webpack 5
          fallback: {
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "buffer": require.resolve("buffer/")
          }
        }
    };
};

module.exports = config;
