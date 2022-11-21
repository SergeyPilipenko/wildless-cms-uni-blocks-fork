const BLOCKS_DIR = 'src/components';
const BLOCKS_DIR_EXCLUSIONS = [
  /\.json$/,
  /Page/,
  /Control/,
  /^Base.*/,
  /^BlockContent(\.mobile)?\.ts$/,
  /^Blocks(\.mobile)?\.ts$/,
  /^utils$/,
];

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'react',
    'react-hooks',
    'local-eslint-rules',
    'sonarjs',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:react/jsx-runtime',
  ],
  env: {
    jest: true,
    node: true,
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'function' },
    ],
    'max-len': [
      'warn',
      180,
      {
        ignoreUrls: true,
        ignoreTemplateLiterals: false,
        ignoreStrings: false,
      },
    ],
    'no-nested-ternary': 'error',
    'sonarjs/no-nested-template-literals': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    camelcase: ['error', { allow: ['node_ids', 'node_id', 'user_name'] }],
    'import/no-unresolved': 'off',
    curly: 'error',
    'no-param-reassign': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'default-param-last': 'error',
    'consistent-return': 'warn',
  },
  overrides: [
    {
      files: ['src/**/*'],
      excludedFiles: [
        'src/**/*.fixture.tsx',
        'src/**/*.fixture.mobile.tsx',
        'src/cosmos*',
        'src/**/*.spec.tsx',
        'src/**/*.spec.ts',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        complexity: ['error', 7],
        'max-lines': ['error', { max: 150, skipBlankLines: true, skipComments: true }],
        'max-depth': ['error', 2],
        'max-params': ['error', 3],
        'max-statements-per-line': ['error', { max: 1 }],
        'max-nested-callbacks': ['error', 3],
        'max-lines-per-function': ['error', { max: 70, skipComments: true, skipBlankLines: true }],
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'import/no-default-export': 'error',
        'import/no-unresolved': 'off',
        '@typescript-eslint/no-unsafe-argument': 'error',
        'local-eslint-rules/consistent-blocks-registry': [
          'error',
          {
            // Desktop
            blocksRegistry: 'src/components/Blocks.ts',
            blocksDir: BLOCKS_DIR,
            exclude: [...BLOCKS_DIR_EXCLUSIONS, /LinkList/],
          },
          {
            // Mobile
            blocksRegistry: 'src/components/Blocks.mobile.ts',
            blocksDir: BLOCKS_DIR,
            suffix: '.mobile.tsx',
            exclude: BLOCKS_DIR_EXCLUSIONS,
          },
        ],
        'local-eslint-rules/block-structure': [
          'error',
          {
            blocksDir: BLOCKS_DIR,
            exclude: BLOCKS_DIR_EXCLUSIONS,
          },
        ],
        'local-eslint-rules/no-index-file': [
          'error',
          {
            exclude: [
              /([\\/])src([\\/])index(\.mobile)?\.ts$/,
              /([\\/])src([\\/])content-page-repository([\\/])index\.ts$/,
            ],
          },
        ],
        'local-eslint-rules/transform-to-ternary': [
          'warn',
          {
            blocksDir: 'src',
            exclude: BLOCKS_DIR_EXCLUSIONS,
          },
        ],
        'local-eslint-rules/complete-function-signatures': ['warn'],
      },
    },
  ],
};
