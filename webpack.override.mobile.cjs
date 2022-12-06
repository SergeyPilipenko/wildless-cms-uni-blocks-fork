/* eslint-disable @typescript-eslint/no-var-requires */
const base = require('./webpack.override.cjs');

module.exports = (_) => {
  const webpackConfig = base(_);
  const extensions = webpackConfig?.resolve?.extensions;

  return {
    ...webpackConfig,
    resolve: {
      extensions: ['.mobile.ts', '.mobile.tsx', ...extensions],
    },
  };
};
