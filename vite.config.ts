import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync } from 'fs';

// Dynamically find all example HTML files
function getExampleInputs(): Record<string, string> {
  const examplesDir = resolve(__dirname, 'src/examples');
  const inputs: Record<string, string> = {
    main: resolve(__dirname, 'index.html'),
  };
  
  try {
    const files = readdirSync(examplesDir);
    files.forEach(file => {
      if (file.endsWith('.html')) {
        const name = file.replace('.html', '');
        inputs[name] = resolve(examplesDir, file);
      }
    });
  } catch (_e) {
    // Directory might not exist yet during initial setup
  }
  
  return inputs;
}

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: getExampleInputs(),
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    outDir: 'dist',
  },
  resolve: {
    alias: {
      'maplibre-gl': 'maplibre-gl',
    },
  },
  server: {
    open: true,
  },
});
