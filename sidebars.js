module.exports = {
	sidebar: [
		'index',
		'usage',
		{
			type: 'category',
			label: 'Commands',
			collapsed: false,
			items: [
				'commands/pull',
				'commands/push',
				'commands/diff',
				'commands/init',
				'commands/list',
			],
		},
	],
};
