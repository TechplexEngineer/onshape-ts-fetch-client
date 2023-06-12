import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/onshapeClient.ts'),
      name: 'onshape',
      fileName: (format) => `onshape.${format}.js`
    }
  }
});