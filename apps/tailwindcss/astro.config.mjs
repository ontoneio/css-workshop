import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: { port: 3200 },
    vite:{
        build: {
            rollupOptions: {
              external: /^@microsoft\/fast-(element|components)/
            }
          }
    }
});
