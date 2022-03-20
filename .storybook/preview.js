import { themes } from '@storybook/theming';

// import React from 'react'
// import {addDecorator } from '@storybook/react'
//
//
// addDecorator(story => <Center>{story()}</Center>)

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
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



