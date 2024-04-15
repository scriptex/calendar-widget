import globals from 'globals';

import prettier from 'eslint-config-prettier';
import tsEsLint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
	{
		files: ['./assets/scripts/**/*.ts'],
		languageOptions: {
			globals: {
				...globals.browser
			},
			parser: tsParser,
			parserOptions: {
				project: 'tsconfig.json',
				sourceType: 'module'
			}
		},
		plugins: {
			prettier,
			tsEsLint
		},
		ignores: ['*.js', 'dist', 'demo/dist'],
		rules: {
			'no-console': 'error'
		}
	}
];
