import React from 'react'
import {PrimaryArgs} from '../ButtonTest/ButtonTest.stories'
import {Large} from '../InputsTest/InputTest.stories'

export default {
	title: 'Form/Subscription'
}

export const PrimarySubscription = () => (
	<>
		<Large size="large"/>
		<PrimaryArgs variant='primary'>Subscribe</PrimaryArgs>
	</>
)
