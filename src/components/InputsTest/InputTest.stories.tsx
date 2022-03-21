import React from 'react'
import {InputTest} from './InputTest'
import {ComponentStory} from "@storybook/react";

export default {
	title: 'Form/Inputs/InputTest',
	component: InputTest,
}

// export const Small = () => <InputTest size="small" placeholder="Small size"/>
// export const Medium = () => <InputTest size="medium" placeholder="Medium size"/>
// export const Large = () => <InputTest size="large" placeholder="Large size"/>

const Template: ComponentStory<typeof InputTest> = (args:any) => <InputTest {...args}/>

export const Small = Template.bind({})
Small.args={
	size:'small',
	placeholder:"Small size"
}

export const Medium = Template.bind({})
Medium.args={
	size:'medium',
	placeholder:"Medium size"
}

export const Large = Template.bind({})
Large.args={
	size:'large',
	placeholder:"Large size"
}
