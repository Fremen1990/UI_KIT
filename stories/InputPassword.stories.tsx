import React from 'react';
import {Meta, Story} from '@storybook/react';
import {InputPassword, Props} from '../src/InputPassword'
import {action} from '@storybook/addon-actions'


const meta: Meta={
	title: 'InputPassword',
	component: InputPassword,
	argTypes:{
		onClick:{action:"clicked"},
		children: {
			defaultValue:'Default Text'
		}
	}
}

export default  meta;

const Template: Story<Props> = (args) => <InputPassword {...args}/>

export const Default = Template.bind({})
export const Secondary = Template.bind({})

Default.args= {
	// variant:'primary',
	// children: "I am default Button!"
}


Secondary.args= {
	variant:'secondary',
	children: "I am secondary Input!",
	onClick: action('secondary click')
}
