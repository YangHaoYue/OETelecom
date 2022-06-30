import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), visualizer()],
    base: './',
    build: {
        assetsDir: 'static/img/',
        rollupOptions: {
            output: {
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/css/[name]-[hash].[ext]',
            },
        }
    }
})