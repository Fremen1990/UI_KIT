import React, {HTMLAttributes, ReactNode} from 'react'
import './Center.css'


export interface Props extends HTMLAttributes<HTMLDivElement> {
	/** Provide a text for a button */
	children: ReactNode;}

export function Center(props:Props) {
	return <div className='center'>
		{props.children}
	</div>
}
