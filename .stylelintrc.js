module.exports = {
	extends: ['stylelint-config-standard'],
	rules: {
		'no-empty-source': null,
		'at-rule-no-unknown': [true, {
			ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen']
		}]
	}
};
