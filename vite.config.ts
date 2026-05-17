import { defineConfig, HttpProxy, HttpServer, PluginOption, ProxyOptions } from 'vite';
import preact from '@preact/preset-vite';

const ponylab = "http://192.168.0.17"

const proxy: Record<string, string | ProxyOptions> = {}
proxy['/api'] = {
    target: 'http://localhost:1919',
    changeOrigin: true,
}
proxy['/cmd'] = {
    target: ponylab
}
for (let url of ['/ponylab', "/cfg", "/state"]) {
    proxy[url] = {
        target: 'http://localhost:1919',
        changeOrigin: true,
    }
}

export default defineConfig({
    plugins: [preact()],
    server: {
        //    port: 3000,
        proxy: proxy
    },
});
