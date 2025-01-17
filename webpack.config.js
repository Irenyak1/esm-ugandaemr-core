const path = require("path");
const config = (module.exports = require("openmrs/default-webpack-config"));
config.scriptRuleConfig.exclude =
  path.sep == "/"
    ? /(node_modules[^\/@openmrs\/esm\-patient\-common\-lib, ^\/@ohri\/openmrs\-esm\-ohri\-commons\-lib])/
    : /(node_modules[^\\@openmrs\/esm\-patient\-common\-lib, ^\\@ohri\/openmrs\-esm\-ohri\-commons\-lib])/;
config.overrides.resolve = {
  extensions: [".tsx", ".ts", ".jsx", ".js", ".scss"],
  alias: {
    "@openmrs/esm-framework": "@openmrs/esm-framework/src/internal",
    "@ohri/openmrs-ohri-form-engine-lib":
      "@ohri/openmrs-ohri-form-engine-lib/src/index",
    "@ohri/openmrs-esm-ohri-commons-lib":
      "@ohri/openmrs-esm-ohri-commons-lib/src/index",
  },
};
config.module = {
  rules: [
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    },
  ],
};

module.exports = config;
