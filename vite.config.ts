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

	plugins: [react()],

	build: {
		sourcemap: false,
		rollupOptions: {
			output: {
				manualChunks: (id: string) => {
					if (id.includes('node_modules')) {
						const modulePath = id.split('node_modules/')[1];
						const topLevelFolder = modulePath.split('/')[0];

						if (topLevelFolder !== '.pnpm') {
							return topLevelFolder;
						}

						const scopedPackageName = modulePath.split('/')[1];
						const chunkName = scopedPackageName.split('@')[scopedPackageName.startsWith('@') ? 1 : 0];

						return chunkName;
					}
				}
			}
		}
	}
});

export default viteConfig;
