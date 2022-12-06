module.exports = (webpackConfig) => {
  return {
    ...webpackConfig,
    experiments: {
      topLevelAwait: true,
    },
    devServer: {
      proxy: {
        '/api/v1/exchangerates': {
          target: 'https://dataservice.catalog.dev.rshbdev.ru',
          secure: false,
        },
      },
    },
  };
};
