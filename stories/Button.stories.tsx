import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Button, Props} from '../src/components/Button'
import {action} from '@storybook/addon-actions'

const meta: Meta={
	title: 'Form/Buttons/Button',
	component: Button,
	argTypes:{
		onClick:{action:"clicked"},
		children: {
			defaultValue:'Default Text'
		}
	}
}

export default  meta;

const Template: Story<Props> = (args) => <Button {...args}/>

export const Default = Template.bind({})
export const Secondary = Template.bind({})

Default.args= {
	variant:'primary',
	children: "I am default Button!"
}


Secondary.args= {
	variant:'secondary',
	children: "I am secondary Button!",
	onClick: action('secondary click')
}
