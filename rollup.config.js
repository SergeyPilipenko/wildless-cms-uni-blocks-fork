/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * @type {import('rollup').RollupOptions}
 */
import { nodeResolve } from '@rollup/plugin-node-resolve';
import rollupTypescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export const config = (name) => [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'bundle/bundle.umd.js',
        format: 'umd',
        name,
      },
      {
        file: 'bundle/bundle.umd.min.js',
        format: 'umd',
        name,
        plugins: [terser()],
      },
    ],
    plugins: [rollupTypescript({ outDir: 'bundle/lib' }), nodeResolve()],
  },
];

export default config('UniBlocks');
