module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "",
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          '^/api': '',
        }
      }
    },
    overlay: {
      warning: false,
      errors: false,
    }
  },
  lintOnSave: false,
}