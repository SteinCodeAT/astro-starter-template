export default {
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	],

	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	semi: false,
	printWidth: 100
}
