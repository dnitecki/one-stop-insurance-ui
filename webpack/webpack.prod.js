const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const glob = require("glob-all");
const path = require("path");

const PATHS = {
  src: path.join(__dirname, "../src"),
};

module.exports = {
  mode: "production",
  plugins: [
    // Define new env variables
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("production"),
    }),
    new CompressionPlugin(),
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, {
        nodir: true,
      }),
      safelist: {
        standard: [/^leaflet-/],
      },
    }),
  ],
};
