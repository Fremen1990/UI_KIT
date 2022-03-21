module.exports = {
	stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)',
		"../src/**/*.stories.@(js|jsx|ts|tsx)"],

	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-a11y',
		'storybook-dark-mode'


		// '@storybook/addon-actions',
		// '@storybook/addon-docs',
		// '@storybook/preset-create-react-app'
		// '@storybook/preset-scss',

		// these addons not working
		// '@storybook/addon-info',
		// '@storybook/addons'
	],
	// https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
	typescript: {
		check: true, // type-check stories during Storybook build
	}
};
