import {nodeResolve} from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

const input = ['src/index.ts'];
const basePlugins = [
  typescript({tsconfig: false}),
  nodeResolve(),
];

export default [
  {
    input,
    plugins: [
      ...basePlugins,
      babel({babelHelpers: 'bundled'}),
      terser(),
    ],
    output: {
      file: `lib/${pkg.name}.min.js`,
      format: 'umd',
      name: 'mockOn',
      esModule: false,
      exports: 'named',
      sourcemap: true,
    },
  },
  {
    input,
    plugins: basePlugins,
    output: [{
      dir: 'lib/esm',
      format: 'esm',
      exports: 'named',
      sourcemap: true,

    }, {
      dir: 'lib/cjs',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,

    },
    ],

  },
];
