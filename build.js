const { build } = require('esbuild');
const { dependencies, peerDependencies } = require('./package.json');
const { Generator } = require('npm-dts');

const sharedConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
};

console.log('Build script started 🚀');
new Generator({
  entry: 'src/index.ts',
  output: 'dist/index.d.ts',
}).generate();
console.log('Types generated 🤤');
console.log('Running esbuild 🛠');
build({
  ...sharedConfig,
  outfile: 'dist/index.js',
  platform: 'browser',
  format: 'esm',
});
console.log('Build complete 🤓');