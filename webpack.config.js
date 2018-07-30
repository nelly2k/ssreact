const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const StartServerPlugin = require('start-server-webpack-plugin')

const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['react', 'es2015'],
      plugins: ['transform-class-properties']
    }
  }
}

const sourceMap  = {    enforce: "pre", test: /\.js$/, loader: "source-map-loader" };
const ts ={ test: /\.tsx?$/, exclude: /node_modules/, loader: "awesome-typescript-loader" };


const serverConfig = {
  mode: 'development',
  target: 'node',
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  entry: {
    'index': path.resolve(__dirname, 'src/index.tsx')
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
},
  module: {
    rules: [ts,js, sourceMap]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}

const clientConfig = {
    mode: 'development',
    target: 'web',
    entry: {
      'home': path.resolve(__dirname, 'src/public/home.tsx')
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
      rules: [ts,js,sourceMap]
    },
    output: {
      path: path.resolve(__dirname, 'dist/public'),
      filename: '[name].js'
    }
  }

module.exports = [serverConfig, clientConfig]