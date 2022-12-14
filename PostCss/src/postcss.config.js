// const autoprefixer = require('autoprefixer')
// const cssnano = require('cssnano')

// 自动合并@import 模块里面的代码到一个css文件当中
// const atImport = require('postcss-import')

// const cssnext = require('postcss-cssnext')
const precss = require('precss')


module.exports = {
  plugins: [
    // atImport,
    // cssnext,
    precss,

    // 自动加前缀的插件
    // autoprefixer({
    // 指定需要支持哪些浏览器, 指定最近的两个版本
    // overrideBrowserslist: ['last 2 versions']
    // 指定支持份额大于10%的浏览器
    // overrideBrowserslist: ['>10%']
    // 支持所有浏览器
    // overrideBrowserslist: ['>0%']
    // 指定Firefox > 30 的版本
    // overrideBrowserslist: ['Firefox > 30']
    // }),
    // 压缩代码，压缩代码一般放到最后，这样压缩出来的就是生产代码了
    // cssnano
  ]
}