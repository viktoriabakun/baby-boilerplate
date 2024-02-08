import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@app': `${path.resolve(__dirname, './src/app/')}`,
      '@entities': `${path.resolve(__dirname, './src/entities/')}`,
      '@features': path.resolve(__dirname, './src/features'),
      '@pages': `${path.resolve(__dirname, './src/pages')}`,
      '@shared': `${path.resolve(__dirname, './src/shared')}`,
      '@widgets': `${path.resolve(__dirname, './src/widgets')}`,
    },
  },
});
