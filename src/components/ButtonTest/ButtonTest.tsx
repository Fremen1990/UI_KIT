import React, {HTMLAttributes, ReactNode} from 'react';
import './ButtonTest.css'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	/** Provide a text for a button */
	children: ReactNode;

	/** Which variant would you like to use*/
	variant: 'primary' | 'secondary' | 'success'  | 'danger';
}

/** This is special button */
export const ButtonTest = (props: Props) => {

	const {variant = 'primary', children, ...rest} = props;

	return (
			<button  className={`button ${variant}`} {...rest}>
				{children}
			</button>

	);
};
