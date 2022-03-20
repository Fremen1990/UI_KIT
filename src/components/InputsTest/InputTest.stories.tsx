import React from 'react'
import {InputTest} from './InputTest'

export default {
	title:'Form/Inputs/InputTest',
	component: InputTest
}

export const Small = () => <InputTest size="small" placeholder="Small size"/>
export const Medium = () => <InputTest size="medium" placeholder="Medium size"/>
export const Large = () => <InputTest size="large" placeholder="Large size"/>

