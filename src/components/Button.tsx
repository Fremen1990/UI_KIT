import React, {HTMLAttributes, ReactNode} from 'react';

import styled from "styled-components";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	/** Provide a text for a button */
	children: ReactNode;

	/** Which variant would you like to use*/
	variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

/** This is special button */
export const Button = ({children, variant='primary', ...props}: Props) => {

	const ContainerArea = styled.div`
	  height:auto ;
	  display: flex;
	  justify-Content: center;
	  align-Items: center;	`



	return (
		<ContainerArea >


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

		</ContainerArea>

	);
};
