var webpack = require("webpack");
var path = require("path");

var PUBLIC_DIR = path.resolve(__dirname,"public");
var SRC_DIR = path.resolve(__dirname,"src");

var config = {
  entry: SRC_DIR + "/index.js",
  output: {
    path: PUBLIC_DIR,
    filename: "bundle.js"
  },
  module:{
    loaders:[
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader", 
        query:{
          presets:['react','es2015','stage-2'],
        }
      }
    ]
  },
   devServer: {
      historyApiFallback: true
  }
}

module.exports = config;