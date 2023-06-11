// .cjs allows use of commonjs require function instead of import statement
const path = require('path');
const webpack = require("webpack");
const jQueryPlugin = new webpack.ProvidePlugin({ // plugin for jquery
  $: require.resolve('jquery'),
  jQuery: require.resolve('jquery')
});

module.exports = [{
  // mode: 'development', // mode is passed in run script as arguments
  // devtool: 'eval-source-map', // devtool must be disabled for production
  entry: ['./src/scripts/login.js'], // entry points are organized per page
  experiments: {
    outputModule: true // building ES Module module library
  },
  output: {
    libraryTarget: 'module',  // library target requires experiments.outputModule to be set true
    path: path.resolve(__dirname, 'public/build/js'),
    filename: 'login.min.bundle.js'
  },
  plugins: [ jQueryPlugin, ]
},
{
  entry: ['./src/scripts/jquery.js'], // jquery minimized script
  experiments: {
    outputModule: true
  },
  output: {
    libraryTarget: 'module',
    path: path.resolve(__dirname, 'public/build/js'),
    filename: 'jquery.min.bundle.js'
  }
},
{
  entry: ['./src/styles/bootstrap.js', './src/styles/custom.css', './src/styles/custom_login.css'],
  output: {
    path: path.resolve(__dirname, 'public/build/css'),
    filename: 'styles.min.bundle.js'
  },
  module: { // rules for imported styles
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // loaders must be installed as dev dependencies
      }
    ]
  }
}
]