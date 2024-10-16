// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'production', // Set the mode to 'production' for optimizations
  entry: './src/index.ts', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output filename
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Apply ts-loader for .ts and .tsx files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Apply css-loader and style-loader for .css files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Resolve these extensions
  },
  optimization: {
    usedExports: true, // Enable tree shaking
  },
};