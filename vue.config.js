const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //baseUrl: '/', // 根域上下文目录
  outputDir: 'dist', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  runtimeCompiler: true, // 运行时版本是否需要编译
  publicPath:'/',
  devServer:{
    host:'127.0.0.1',
    port:8080,
    open:true,
    https: false,
    /*proxy:{
      'api':{
        target:'http://123.56.79.204:5000/api/',
        ws: true,
        changOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
      }
    },*/
  }
})
