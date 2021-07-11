const exec = require('child_process').exec;
const path = require('path');

class CustomPlugin {
  constructor(name, command, stage = 'afterEmit') {
    this.name = name;
    this.command = command;
    this.stage = stage;
  }

  static execHandler(err, stdout, stderr) {
    if (stdout) process.stdout.write(stdout);
    if (stderr) process.stderr.write(stderr);
  }

  apply(compiler) {
    compiler.hooks[this.stage].tap(this.name, () => {
      exec(this.command, CustomPlugin.execHandler);
    });
  }
}

module.exports = {
  experiments: {
    outputModule: true,
  },
  // externalsType: 'module',
  // externalsType: 'import',
  externalsType: 'var',
  externals: {
    'react': 'React',
  },
  mode: 'development',
  watch: true,
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react']
          }
        }
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    library: {
      // name: 'calculator',
      // type: 'umd',
      type: 'module'
    },
    path: path.resolve(__dirname, './dist'),
    filename: 'calculator.js',
    // environment: {
    //   module: true,
    // },
  },
  plugins: [
    new CustomPlugin('WebpackExec', 'npm run copy'),
  ]
};
