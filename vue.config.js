module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    devtool: "source-map"
  },

  // https://cli.vuejs.org/config/#publicpath
  publicPath: process.env.NODE_ENV === 'production'
      ? '' // prod
      : '/', // dev
}