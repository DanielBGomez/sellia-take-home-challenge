import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';

import { preserveUseClient } from './plugins/vite-preserve-use-client';

export default defineConfig({
  plugins: [
    tailwindcss(),
    svgr(),
    react(),
    dts({
      insertTypesEntry: true, // Genera archivos `.d.ts` para tipado de TypeScript
    }),
    preserveUseClient(),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'UI Kit',
      fileName: 'index',
      formats: ['es', 'cjs'],
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
