const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src/'))
      .set('assets', resolve('./src/assets/'))
      .set('utils', resolve('./src/utils'))
      .set('plugins', resolve('./src/plugins'))
      .set('store', resolve('./src/store/'))
      .set('components', resolve('./src/components/'))
      .set('views', resolve('./src/views/'))
      .set('api', resolve('./src/network/'))
  },
  css: {
    loaderOptions: {
      // 引入全局scss变量
      sass: {
        additionalData: `@import "assets/styles/_variables.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://m2.test.zyh365.com',
        ws: true,
        changOrigin: true,
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    }
  }
}