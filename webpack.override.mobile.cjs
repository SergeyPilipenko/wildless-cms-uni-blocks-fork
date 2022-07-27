module.exports = (webpackConfig) => {
  const extensions = webpackConfig?.resolve?.extensions;

  return {
    ...webpackConfig,
    resolve: {
      extensions: ['.mobile.ts', '.mobile.tsx', ...extensions],
    },
  };
};
