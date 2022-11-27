const path = require('path')
const { config } = require('process')
module.exports = {
  // 代理
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changerOrigin: true,
        pathRewrite: {
          '^/api':'/api'
        }
      }
    }
  },
  configureWebpack: (config) => {
    config.resolve = {
      extensions: ['.js','.json',',vue'],
      alias: {
        '@': path.resolve(__dirname,'./src')
      }
    }
  }
}