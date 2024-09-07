const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe1",

  exposes: {
    "./Component/UserName":
      "./projects/mfe1/src/app/user-name/user-name.component.ts",
    "./Component/Test": ".//projects/mfe1/src/app/test/test.component.ts",
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
