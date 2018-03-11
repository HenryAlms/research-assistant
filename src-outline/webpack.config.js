const webpack = require('webpack');

//where to output build files
//const OUT_DIRECTORY = 

module.exports = {
  //file to start with
  entry: [
    './src/index.ts', 
  ],

  //where compiled code should go
  output: {
    filename: "bundle.js", //combine it into this file
    path: __dirname + '/build', //in this folder (`__dirname`)
    publicPath: '/build' //where server will look for output
  },

  //which files should be considered (add in `.ts`)
  //https://webpack.github.io/docs/configuration.html#resolve-extensions
  resolve: {
    // Add '.ts' as resolvable extensions.
    extensions: ["*", ".webpack.js", ".web.js", ".js", ".ts"]
  },

  // Enable sourcemaps for debugging webpack's output
  devtool: "source-map",

  module: {
    rules: [
        {
            test: /\.ts$/,
            loader: "awesome-typescript-loader"
        },
        {
            test: /\.js$/,
            loader: "source-map-loader",
            enforce: "pre"
        }
    ]
  }
}