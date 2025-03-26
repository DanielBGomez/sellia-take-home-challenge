// Modules
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';

// Plugins
import { preserveUseClient } from './plugins/vite-preserve-use-client';

/**
 * Vite Configuration
 */
export default defineConfig({
  plugins: [
    tailwindcss(),
    svgr(),
    react(),
    dts({
      insertTypesEntry: true,
      entryRoot: 'src',
    }),
    preserveUseClient(),
  ],
  optimizeDeps: {
    include: [
      '@mui/material',
      '@mui/system',
      '@emotion/react',
      '@emotion/styled',
    ],
  },
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        'mui-material': path.resolve(__dirname, 'src/mui-material/index.ts'),
      },
      formats: ['esm', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Evita incluir React en el bundle final
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
