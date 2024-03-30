const webpack = require("webpack");
const nextTranslate = require("next-translate");

require("dotenv").config({ path: `${process.env.ENVIRONMENT}` });
module.exports = nextTranslate({
  images: {
    domains: ["file.tourmedico.com", "localhost"],
  },
  reactStrictMode: false,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack(config, options) {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    return config;
  },
});
