module.exports = (webpackConfig) => {
  const extensions = webpackConfig?.resolve?.extensions;

  return {
    ...webpackConfig,
    resolve: {
      extensions: ['.mobile.ts', '.mobile.tsx', ...extensions],
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
