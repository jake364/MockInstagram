import { createDefaultConfig } from '@open-wc/building-rollup';
import deepmerge from 'deepmerge';

const config = createDefaultConfig({
  input: './index.html',
});

export default deepmerge(config, {
  output: {
    dir: 'dist',
  },
});
