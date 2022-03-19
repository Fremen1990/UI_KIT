import React from 'react';
import {Meta, Story} from '@storybook/react';
import {ProgressBar, Props} from '../src/ProgressBar'
import {action} from '@storybook/addon-actions'


const meta: Meta={
	title: 'ProgressBar',
	component: ProgressBar,
	argTypes:{
		onClick:{action:"clicked"},
		children: {
			defaultValue:'Default Text'
		}
	}
}

export default  meta;

const Template: Story<Props> = (args) => <ProgressBar {...args} children={"Some percentage"}/>

export const Default = Template.bind({})
export const Secondary = Template.bind({})

Default.args= {
	variant:'primary',
	children: "I am default Button!"
}


Secondary.args= {
	variant:'secondary',
	children: "I am secondary Bulb!",
	onClick: action('secondary click')
}
