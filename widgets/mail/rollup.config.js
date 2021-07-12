const { exec } = require('child_process');
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import externalGlobals from "rollup-plugin-external-globals";

const execHandler = (err, stdout, stderr) => {
  if (stdout) process.stdout.write(stdout);
  if (stderr) process.stderr.write(stderr);
};

const customPlugin = ({ name, command }) => {
  return {
    name: name,
    generateBundle() {
      exec(command, execHandler);
    }
  };
};

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/mail.js',
  },
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled'
    }),
    externalGlobals({
      react: "React",
    }),
    customPlugin({
      name: 'RollupExec',
      command: 'npm run copy'
    }),
  ],
};
