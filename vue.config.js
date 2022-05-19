const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // lintOnSave: false,
  transpileDependencies: true,
  productionSourceMap: false,
  outputDir: "./dist",
  //  静态目录
  assetsDir: "static",
});
