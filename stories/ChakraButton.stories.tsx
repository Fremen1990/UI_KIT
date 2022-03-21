import React from 'react';
import {Button} from '@chakra-ui/core'
import {Story} from "@storybook/react";

export default {
	title: 'Chakra/Button',
	component:Button,
	argTypes:{
		onClick:{action:'clicked'},
		onMouseOver:{action:'mouse over'},
		}
}

const Template:Story<any> = args => <Button {...args} />

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

export const log = () =>(
	<Button variantColor="blue" onClick={()=>console.log('Button clicked log')}>
		Log
	</Button>)

