import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@assets': `${path.resolve(__dirname, './src/assets/')}`,
      '@fonts': `${path.resolve(__dirname, './src/assets/fonts/')}`,
      '@img': path.resolve(__dirname, './src/assets/img'),
      '@styles': `${path.resolve(__dirname, './src/assets/styles')}`,
      '@common': `${path.resolve(__dirname, './src/common')}`,
      '@components': `${path.resolve(__dirname, './src/common/components')}`,
      '@constants': `${path.resolve(__dirname, './src/common/constants')}`,
      '@helpers': `${path.resolve(__dirname, './src/common/helpers')}`,
      '@interfaces': `${path.resolve(__dirname, './src/common/interfaces')}`,
      '@pages': `${path.resolve(__dirname, './src/pages')}`,
    },
  },
});
