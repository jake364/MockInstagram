import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'index.html',
  output: {
    dir: 'dist',
    format: 'es'
  },
  plugins: [
    nodeResolve()
  ]
};
