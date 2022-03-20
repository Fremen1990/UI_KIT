import React, {HTMLAttributes, ReactNode} from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	/** Provide a text for a button */
	children: ReactNode;

	/** Which variant would you like to use*/
	variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

/** This is special button */
export const ProgressBar = ({children, variant='primary', ...props}: Props) => {
	return (
		<div style={{height:'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>


			<div >
				<span {...props}>
									Progress bar

				</span>

			</div>

		</div>

	);
};
