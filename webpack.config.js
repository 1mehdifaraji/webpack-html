const path = require("path");

// Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production", // 'development' mode disables warnings and minifications
  entry: "./index.ts",
  output: {
    clean: true, // Clean dist folder on each build
  },
  //   devtool: "source-map", // Generate .map files
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Custom title",
      template: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
    new CopyPlugin({
      patterns: [{ from: "assets", to: "assets" }],
    }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
    open: true, // Open the browser automatically
  },
};
