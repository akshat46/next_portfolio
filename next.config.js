const withFonts = require('next-fonts');
module.exports = withFonts({
  webpack(config, options) {
    return config;
  }
});

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    };
  }
};
