const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const deps = require('./package.json').dependencies;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    publicPath: "http://localhost:3001/",
    filename: 'js/[name].[contenthash:4].bundle.js',
    chunkFilename: '[id].[chunkhash].js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3001,
    historyApiFallback: true
  },
  resolve: {
    extensions: [
      ".jsx",
      ".js",
      ".json",
      ".css",
      ".scss",
      ".jpg",
      "jpeg",
      "png",
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "main_app", // 应用名称（供调用方使用）
      filename: 'remoteEntry.js', // 调用方引入的文件名称
      // 导入模块
      remotes: {
        // 导入别名：“远程应用名称@远程应用地址/远程导出文件的名称”
        "module-federation-subapp1": "subapp1@http://localhost:3002/remoteEntry.js",
        "module-federation-subapp2": "subapp2@http://localhost:3003/remoteEntry.js",
      },
      // 暴露模块
      exposes: {
        // 模块名称：模块对应的代码路径
        './Navigation': './src/Navigation',
        './routes': './src/routes',
      },
      // 共享节点模块或依赖项
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
