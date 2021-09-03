const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        styleLoaderOptions: {
          injectType: 'lazyStyleTag',
        },
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
          sourceMap: true,
        },
      },
    },
  ],
};
