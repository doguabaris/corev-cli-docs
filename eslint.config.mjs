import {defineConfig} from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.node,
				...globals.browser,
			},
		},
		plugins: {
			js,
		},
		ignores: ['**/node_modules/**', '**/build/**', '**/.docusaurus/**'],
		rules: {
			'no-unused-vars': 'warn',
			'no-console': 'off',
		},
	},
]);
