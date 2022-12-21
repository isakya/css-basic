var styles = require('./webpack-component.css').default

exports.init = function ($dom) {
  $dom.innerHTML = '<p class="' + styles.p + '">我是一个自给自足的组件</p>' +
    '<p class="' + styles.p + ' ' + styles.red + '">我有时候是红的</p>' +
    '<p class="' + styles.p + ' ' + styles.green + '">有时候是绿的</p>'
}