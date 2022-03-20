// import {themes} from '@storybook/theming';

import React from 'react'

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


// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
	// https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
	actions: {argTypesRegex: '^on.*'},
	options: {
		//Option do sort stories alphabetically
		storySort: (a, b) =>
			a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, {numeric: true}),
	},
	// Dark mode addon configuration
	// darkMode: {
	//   stylePreview: true,
	//   classTarget: 'html',
	//   darkClass: 'lights-out',
	//   lightClass: 'lights-on',
	//   current:'dark',
	//   // Override the default dark theme
	//   dark: { ...themes.dark, appBg: 'black' },
	//   // Override the default light theme
	//   light: { ...themes.normal, appBg: 'red' },
	//
	// }


};



