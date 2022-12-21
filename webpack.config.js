const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
  module: {
    rules: [{
      test: /\.css$/,
      /*
      use: ['style-loader', {
        loader: 'css-loader',
        // css modules打开，这样类名就可以模块化，避免冲突
        options: {
          modules: true
        }
      }]
      */

      use: [MiniCssExtractPlugin.loader, {
        loader: 'css-loader',
        // css modules打开，这样类名就可以模块化，避免冲突
        options: {
          modules: true
        }
      }]
    }]
  },
  // 拆分后的css代码输出的文件
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css.css'
    })
  ]

}