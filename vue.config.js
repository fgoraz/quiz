const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false,
  //publicPath: "./",
  publicPath: process.env.NODE_ENV === 'production'
    ? '/quiz/'
    : '/',

  outputDir: 'build',
  chainWebpack: config => {
    //config.plugins.delete('html');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true,
	  //https: true,
      //disableHostCheck: true,
	  headers: {
        "Access-Control-Allow-Origin": "*",
        //"Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET, POST",
        }
    },
  },
  productionSourceMap: false,
  css: {
    extract: true,
  },
})
