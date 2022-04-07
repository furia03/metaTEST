const path = require("path");
const PrerenderSpaPlugin = require("prerender-spa-plugin");
const productionPlugins = new PrerenderSpaPlugin({
  staticDir: path.join(__dirname, "dist"),
  routes: ["/about/", "/about/:id"],
  renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
    renderAfterElementExists: "#app",
  }),
});
module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    entry: ["babel-polyfill", "./src/main.js"],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
      },
    },
    plugins: [productionPlugins],
  },
  devServer: {
    port: 8080,
    overlay: false,
    disableHostCheck: true,
  },
};
