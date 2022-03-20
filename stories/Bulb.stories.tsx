import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Bulb, Props} from '../src/components/Bulb'
import {action} from '@storybook/addon-actions'


const meta: Meta={
	title: 'Bulb',
	component: Bulb,
	argTypes:{
		onClick:{action:"clicked"},
		children: {
			defaultValue:'Default Text'
		}
	}
}

export default  meta;

const Template: Story<Props> = (args) => <Bulb {...args}/>

export const Default = Template.bind({})
export const Secondary = Template.bind({})

Default.args= {
	// variant:'primary',
	// children: "I am default Button!"
}


Secondary.args= {
	// variant:'secondary',
	children: "I am secondary Bulb!",
	onClick: action('secondary click')
}
