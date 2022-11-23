/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * @type {import('rollup').RollupOptions}
 */
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import rollupTypescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import publicPackage from './.public.package.json';

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
    plugins: [
      rollupTypescript({ outDir: 'bundle/lib' }),
      nodeResolve(),
      replace({
        'process.env.UNI_BLOCKS_VERSION': JSON.stringify(publicPackage.version),
      }),
    ],
  },
];

export default config('UniBlocks');
