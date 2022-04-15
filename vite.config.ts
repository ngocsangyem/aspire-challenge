import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@/': resolve(__dirname, './src'),
			'@/components': resolve(__dirname, './src/components'),
			'@/@types': resolve(__dirname, './src/@types'),
			'@/views': resolve(__dirname, './src/views'),
			'@/assets': resolve(__dirname, './src/assets'),
			'@/stores': resolve(__dirname, './src/stores'),
			'@/helpers': resolve(__dirname, './src/helpers'),
			'@/common': resolve(__dirname, './src/common'),
		},
	},
});
