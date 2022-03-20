import React, {HTMLAttributes} from 'react'
import './InputTest.css'

export interface Props extends HTMLAttributes<HTMLInputElement>{

	size: 'small'|'medium'|'large'
}

export const InputTest = (props: Props)=>{

	const {size = 'medium',  ...rest} = props;

	return (
		<input className={`input ${size}`} {...rest} />
	)
}
