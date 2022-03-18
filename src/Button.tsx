import React, {HTMLAttributes, ReactNode} from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	/** Provide a text for a button */
	children: ReactNode;

	/** Which variant would you like to use*/
	variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

/** This is special button */
export const Button = ({children, variant='primary', ...props}: Props) => {
	return (
		<div style={{height:'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>


			<button {...props} style={{backgroundColor:


					variant ==="primary"? 'blue' : variant ==="success"? "green": "red"


				,
				color:'white',
				border:'none',
				fontWeight:'bold',
				borderRadius:100,
				padding:10,
				cursor:'pointer'
			}}>
				{children}
			</button>

		</div>

	);
};
