//
const isProduction = process.env.NODE_ENV === 'production'
//
module.exports = {
  publicPath: isProduction
    ? 'https://api.greenpeace.org.hk/2019/supermarket/'
    : '',
  configureWebpack: config => {
    config.output.filename = 'js/[name].js'
    config.output.chunkFilename = 'js/[name].js'
  },
  chainWebpack: config => {
    if (config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css')
      extractCSSPlugin &&
        extractCSSPlugin.tap(() => [
          {
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css',
          },
        ])
    }
    //
    const svgRule = config.module.rule('svg')

    // clear all existing loaders.
    // if you don't do this, the loader below will be appended to
    // existing loaders of the rule.
    svgRule.uses.clear()

    // add replacement loader(s)
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  },
  css: {
    sourceMap: process.env.NODE_ENV !== 'production' ? true : false,
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/scss/global.scss";
        `,
      },
    },
  },
}
