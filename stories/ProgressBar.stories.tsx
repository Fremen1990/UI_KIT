import React from 'react';
import {Meta, Story} from '@storybook/react';
import {ProgressBar} from '../src/components/ProgressBar/ProgressBar'
// import {action} from '@storybook/addon-actions'


const meta: Meta={
	title: 'ProgressBar',
	component: ProgressBar,

}

export default  meta;

const Template: Story<any> = (args) => <ProgressBar {...args}
													// children={"Some percentage"}

/>

export const Default = Template.bind({})

Default.args= {
	containerBackground : "#111",
	barLabel : "HTML",
	labelColor : "#f1f1f1",
	percentage : 75,
	barColor : "#d13639",
	barHeight : "2vh",
	barRadius : "5px"
}

