import React, {HTMLAttributes, ReactNode} from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant: 'primary' | 'secondary';
}


export const Button = ({children, variant='primary', ...props}: Props) => {
	return (
		<div style={{height:'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>


			<button {...props} style={{backgroundColor: variant ==="primary"? 'blue' : "gray",
				color:'white',
				border:'none',
				borderRadius:100,
				padding:10,
				cursor:'pointer'
			}}>
				{children}
			</button>

		</div>

	);
};

export default Button;
