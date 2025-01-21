import { resolve } from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
const viteConfig = defineConfig({
	resolve: {
		alias: [
			{
				find: '~/App',
				replacement: resolve(__dirname, 'src/App')
			},

			{
				find: '~/components',
				replacement: resolve(__dirname, 'src/components')
			}
		]
	},

	plugins: [react()]
});

export default viteConfig;
