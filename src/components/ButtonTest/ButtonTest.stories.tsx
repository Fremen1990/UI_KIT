import React from 'react';
import {
	ComponentStory,
	ComponentMeta } from '@storybook/react';

import {ButtonTest} from './ButtonTest'
// import {Center} from '../Center/Center'


export default {
	title:'Form/Buttons/ButtonTest',
	component:ButtonTest,
	// decorators:[story=> <Center>{story()}</Center>],
	args: {
		children: 'ButtonTest'
	}
} as ComponentMeta<typeof ButtonTest>;

// export const Primary = ()=> <ButtonTest variant='primary'>Primary</ButtonTest>
// export const Secondary = ()=> <ButtonTest variant='secondary'>Secondary</ButtonTest>
// export const Success = ()=> <ButtonTest variant='success'>Success</ButtonTest>
// export const Danger = ()=> <ButtonTest variant='danger'>Danger</ButtonTest>


const Template: ComponentStory<typeof ButtonTest> = (args:any) => <ButtonTest {...args}/>

export const PrimaryArgs = Template.bind({})
PrimaryArgs.args = {
	variant:'primary',
	children:'Primary Args'
}
export const SecondaryArgs = Template.bind({})
SecondaryArgs.args={
	variant:'secondary',
	// children:'Secondary Args'
}
export const SuccessArgs = Template.bind({})
SuccessArgs.args = {
	variant:'success',
	// children:'Success Args'
}
export const DangerArgs = Template.bind({})
DangerArgs.args={
	variant:'danger',
	// children:'Danger Args'
}
