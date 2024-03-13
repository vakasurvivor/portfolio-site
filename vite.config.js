import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/sample-site/',
	css: {
		devSourcemap: true,
	},
	plugins: [react()],
	resolve: {
		alias: {
			'@': '/src',
		},
	},
});
