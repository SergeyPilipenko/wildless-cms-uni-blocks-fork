/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * @type {import('rollup').RollupOptions}
 */
const rollupTypescript = require('@rollup/plugin-typescript');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'bundle/bundle.umd.js',
        format: 'umd',
        name: 'UniMobileBlocks',
      },
      {
        file: 'bundle/bundle.umd.min.js',
        format: 'umd',
        name: 'UniMobileBlocks',
        plugins: [terser()],
      },
    ],
    plugins: [rollupTypescript({ outDir: 'bundle/lib' }), nodeResolve()],
  },
];

export default config;
