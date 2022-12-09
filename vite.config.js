import path from 'path';
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            dirs: ['src/**'],
            /**
             * same too
             *  // dirs:['src/component','src/views']
             */
            extensions: ['vue'],
            deep: true,
            resolvers: [],
            directoryAsNamespace: false,
            globalNamespaces: [],
            directives: true,
            allowOverrides: false,
            include: [/\.vue$/, /\.vue\?vue/],
            exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],

            dts: true,
            types: [{
                from: 'vue-router',
                names: ['RouterLink', 'RouterView'],
            }],

        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: [
            '.mjs',
            '.js',
            '.ts',
            '.jsx',
            '.tsx',
            '.json',
            '.vue'
        ],
    },
})
