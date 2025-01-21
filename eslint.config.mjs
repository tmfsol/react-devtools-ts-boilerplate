import js from '@eslint/js';
import autofix from 'eslint-plugin-autofix';
import pluginImport from 'eslint-plugin-import';
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const eslintConfig = tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			import: pluginImport,
			'prefer-arrow-functions': preferArrowFunctions,
			autofix,
			react
		},
		rules: {
			// eslint-plugin-react-hooks
			...reactHooks.configs.recommended.rules,

			// eslint-plugin-react
			...react.configs.flat.recommended.rules,
			'react/jsx-uses-react': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/display-name': 'off',

			'react/jsx-boolean-value': 'error',
			'react/jsx-curly-brace-presence': ['error', 'never'],
			'react/self-closing-comp': 'error',

			// eslint-plugin-react-refresh
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

			// eslint-plugin-react-autofix
			'autofix/arrow-body-style': ['error', 'always'],
			'autofix/curly': 'error',
			'autofix/no-lonely-if': 'error',
			'autofix/no-else-return': 'error',
			'autofix/object-curly-newline': [
				'error',
				{
					ObjectExpression: {
						multiline: true,
						minProperties: 2,
						consistent: true
					}
				}
			],

			// typescript-eslint
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',

			// eslint-plugin-prefer-arrow-functions
			'prefer-arrow-functions/prefer-arrow-functions': 'error',

			// eslint-plugin-import
			'import/first': 'error',
			'import/newline-after-import': 'error',
			'import/no-duplicates': 'error',
			'import/no-anonymous-default-export': 'error',
			'import/no-namespace': 'error',
			'import/order': [
				'error',
				{
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: true
					},
					pathGroups: [
						{
							pattern: '~/**',
							group: 'internal',
							position: 'before'
						}
					],

					groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], ['object', 'unknown', 'type']],
					pathGroupsExcludedImportTypes: ['builtin']
				}
			],

			// Others rules
			'spaced-comment': [
				'error',
				'always',
				{
					line: {
						markers: ['/'],
						exceptions: ['-', '+']
					},
					block: {
						markers: ['!'],
						exceptions: ['*'],
						balanced: true
					}
				}
			],
			'lines-around-comment': [
				'error',
				{
					beforeBlockComment: true,
					beforeLineComment: true,
					allowBlockStart: true,
					allowObjectStart: true,
					allowArrayStart: true
				}
			],
			'padding-line-between-statements': [
				'error',
				{
					blankLine: 'any',
					prev: 'export',
					next: 'export'
				},
				{
					blankLine: 'always',
					prev: ['const', 'let', 'var'],
					next: '*'
				},
				{
					blankLine: 'any',
					prev: ['const', 'let', 'var'],
					next: ['const', 'let', 'var']
				},
				{
					blankLine: 'always',
					prev: '*',
					next: ['function', 'multiline-const', 'multiline-block-like']
				},
				{
					blankLine: 'always',
					prev: ['function', 'multiline-const', 'multiline-block-like'],
					next: '*'
				}
			],
			'newline-before-return': 'error'
		}
	}
);

export default eslintConfig;
