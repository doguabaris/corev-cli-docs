const config = {
	title: 'Corev CLI Docs',
	tagline: 'Versioned configuration made simple',
	url: 'https://corev.dev',
	baseUrl: '/corev-cli-docs/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'doguabaris',
	projectName: 'corev-cli-docs',
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},
	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					path: 'docs',
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/doguabaris/corev-cli-docs/edit/main/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig: {
		navbar: {
			title: 'Corev CLI Docs',
			logo: {
				alt: 'Corev CLI Logo',
				src: 'img/corev-logo.svg',
			},
			items: [
				{
					href: 'https://github.com/doguabaris/corev-cli',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			copyright: `© ${new Date().getFullYear()} Doğu Abaris. Corev is MIT licensed.`,
		},
	},
};

module.exports = config;
