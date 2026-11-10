
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
    resolve: {
      dedupe: ['react', 'react-dom', 'react-router', 'react-router-dom', 'motion', 'framer-motion']
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      hmr: {
        overlay: false,
      },
    },
    preview: {
      host: '0.0.0.0',
      port: 3000,
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        '@dnd-kit/core',
        '@dnd-kit/sortable',
        '@dnd-kit/utilities',
        '@dnd-kit/accessibility',
        'lucide-react',
        'framer-motion',
        'motion/react',
        'katex',
        'react-router-dom',
        'firebase/app',
        'firebase/auth',
        'firebase/firestore'
      ]
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    }
  };
});
