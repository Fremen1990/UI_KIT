import React from 'react'
import '@storybook/addon-console'
import {
	create
	// themes
} from '@storybook/theming';


// config.js for addons-console
import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

// ------------------------------------------------------
// Global decorator "Center"  to center all elements in all stories
// import {addDecorator} from '@storybook/react'
// import {Center} from '../src/components/Center/Center'
// addDecorator(story => <Center>{story()}</Center>)
// -----------------------------------------------------

// Theme provider decorator
// import {addDecorator} from '@storybook/react'
// import {ThemeProvider, theme, CSSReset, Box} from '@chakra-ui/core'
// addDecorator(story => (
// 	<ThemeProvider theme={theme}>
// 		<CSSReset/>
// 		<Box display='flex' alignItems='center' justifyContent="center">
// 			{story()}
// 		</Box>
// 	</ThemeProvider>))
//-----------------------------------------------------------

import {ThemeProvider, theme, CSSReset, Box} from '@chakra-ui/core'

export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<CSSReset/>
			<Box display='flex' alignItems='center' justifyContent="center">
				<Story/>
			</Box>
		</ThemeProvider>
	)
]


const lightTheme = create({
	base: 'light',
	appBg: 'white',
	colorPrimary: '#FF8C69',
	colorSecondary: '#FF8C69',
	brandImage: 'https://raw.githubusercontent.com/Fremen1990/UI_KIT/8d061e86ea2da04d602b6e6053be6838a1e661d6/src/components/LogoDevthomas/LogoDevthomasOrange.webp'
})

const darkTheme = create({
	base: 'dark',
	appBg: '#333940',
	// appBg:"#707780",
	colorPrimary: '#DBF785',
	colorSecondary: '#637d0c',
	appContentBg: 'rgb(51,57,64)',
	// appContentBg:"#707780",
	barBg: '#29292a',
	brandImage: 'https://raw.githubusercontent.com/Fremen1990/UI_KIT/8d061e86ea2da04d602b6e6053be6838a1e661d6/src/components/LogoDevthomas/LogoDevthomas-light.webp'
})


// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
	// https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
	actions: {argTypesRegex: '^on.*'},
	options: {
		//Option do sort stories alphabetically
		storySort: (a, b) =>
			a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, {numeric: true}),
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	// Dark mode addon configuration
	darkMode: {
		dark: darkTheme,
		light: lightTheme,
		stylePreview: true,
		// classTarget: 'html',
		// darkClass: 'lights-out',
		// lightClass: 'lights-on',
		// current:'dark',
		// Override the default dark theme
		// dark: { ...themes.dark, appBg: 'black' },
		// Override the default light theme
		// light: { ...themes.normal, appBg: 'red' },

	}


};



