module.exports = (webpackConfig) => {
  const extensions = webpackConfig?.resolve?.extensions;

  return {
    ...webpackConfig,
    resolve: {
      extensions: [...extensions],
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'https://dataservice.catalog.dev.rshbdev.ru/api/v1',
          secure: false,
        },
      },
    },
  };
};
