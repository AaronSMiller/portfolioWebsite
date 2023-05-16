var path = require("path");
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource"
      },
      {
        test: /\.pdf$/i,
        use: {
          loader: "raw-loader",
        },
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
};
