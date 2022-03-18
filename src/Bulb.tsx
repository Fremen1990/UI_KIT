import React, {HTMLAttributes, ReactNode} from 'react';

import {GoLightBulb} from "react-icons/go";


export interface Props extends HTMLAttributes<HTMLButtonElement> {
	/** Provide a text for a button */
	children: ReactNode;

	/** Which variant would you like to use*/
	variant: 'primary' | 'secondary';
}

/** This is special bulb */
export const Bulb = ({children, variant = 'primary', ...props}: Props) => {


	return (
		<>
			<div style={{
				margin: 0,
				padding: 0,
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection:'column'
			}}>

				<GoLightBulb style={{fontSize: "150px"}}/>

				<div className="buttons">

					<button>Red</button>
					<button>Green</button>
					<button>Blue</button>
				</div>
			</div>
		</>
	);
};
