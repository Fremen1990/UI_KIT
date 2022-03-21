import React from 'react';
import {Button, Props} from '@chakra-ui/core'
import {Story} from "@storybook/react";

export default {
	title: 'Chakra/Button',
	component:Button,
	argTypes:{
		onClick:{action:'clicked'}
	}
}

const Template:Story<Props> = args => <Button {...args} />

export const Success = Template.bind({})
Success.args={
	variantColor:"green",
	children:"Success",
}

export const Danger = Template.bind({})
Danger.args={
	variantColor:"red",
	children:"Danger",
}
