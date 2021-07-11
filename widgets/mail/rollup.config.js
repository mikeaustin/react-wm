import externalGlobals from "rollup-plugin-external-globals";
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/mail.js',
  },
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    // commonjs(),
    externalGlobals({
      react: "React",
    })
  ],
};
