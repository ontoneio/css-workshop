import { defineConfig } from 'astro/config';
import WindiCSS from 'vite-plugin-windicss'

// https://astro.build/config
export default defineConfig({
    server: { port: 3100 },
    vite:{
        plugins:[
            WindiCSS()
        ]
    }
});
