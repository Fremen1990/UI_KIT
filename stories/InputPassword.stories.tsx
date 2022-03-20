import React from 'react';
import {Meta, Story} from '@storybook/react';
import {InputPassword, Props} from '../src/components/InputPassword'


const meta: Meta={
	title: 'Form/Inputs/InputPassword',
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
