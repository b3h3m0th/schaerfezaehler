const path = require("path");

module.exports = {
  entry: "./src/app.js",
  mode: "development",
  output: {
    filename: "./dist/bundle.js",
    path: path.join(__dirname, "public")
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] }
    ]
  },
  devServer: {
    static: path.join(__dirname, "public")
  }
};
