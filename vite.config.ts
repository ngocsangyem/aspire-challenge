import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: { transformAssetUrls },
		}),
		quasar({
			sassVariables: 'src/styles/quasar-variables.scss',
		}),
	],
	resolve: {
		alias: {
			'@/': resolve(__dirname, './src'),
			'@/components': resolve(__dirname, './src/components'),
			'@/@types': resolve(__dirname, './src/@types'),
			'@/styles': resolve(__dirname, './src/styles'),
			'@/views': resolve(__dirname, './src/views'),
			'@/assets': resolve(__dirname, './src/assets'),
			'@/stores': resolve(__dirname, './src/stores'),
			'@/helpers': resolve(__dirname, './src/helpers'),
			'@/common': resolve(__dirname, './src/common'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use './src/styles/base/breakpoints' as *;` 
			}
		}
	}
});
