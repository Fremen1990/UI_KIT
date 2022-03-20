import React from 'react';
import {ButtonTest} from './ButtonTest'

export default {
	title:'Form/Buttons/ButtonTest',
	component:ButtonTest
}


export const Primary = ()=> <ButtonTest variant='primary'>Primary</ButtonTest>
export const Secondary = ()=> <ButtonTest variant='secondary'>Secondary</ButtonTest>
export const Success = ()=> <ButtonTest variant='success'>Success</ButtonTest>
export const Danger = ()=> <ButtonTest variant='danger'>Danger</ButtonTest>

