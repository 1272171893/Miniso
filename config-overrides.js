const {
  override,
  addWebpackAlias,
  fixBabelImports,
  // addLessLoader,
  addDecoratorsLegacy,
} = require("customize-cra");

module.exports = override(
  addWebpackAlias({
    "@": require("path").resolve(__dirname, "src"),
  }),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  }),
  // addLessLoader({
  //   strictMath: true,
  //   noIeCompat: true,
  //   javascriptEnabled: true,
  //   loader: "css-loader",
  //   options: {
  //     modules: {
  //       localIdentName: "[name]__[local]___[hash:base64:5]",
  //     },
  //     sourceMap: true,
  //   },
  // }),
  addDecoratorsLegacy()
);
