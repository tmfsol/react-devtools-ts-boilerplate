const commitlintConfig = {
	extends: ['@commitlint/config-conventional'],

	rules: {
		'type-enum': [
			2,
			'always',
			[
				'init',
				'feat',
				'fix',
				'chore',
				'docs',
				'style',
				'refactor',
				'perf',
				'test',
				'build',
				'ci',
				'revert',
				'merge',
				'wip',
				'release',
				'upgrade',
				'downgrade',
				'bump',
				'security',
				'hotfix'
			]
		],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],

		'subject-case': [2, 'never'],
		'subject-empty': [2, 'never'],
		'subject-min-length': [2, 'always', 10],
		'subject-max-length': [2, 'always', 120]
	}
};

export default commitlintConfig;
