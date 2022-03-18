import React, {HTMLAttributes, ReactNode, useState} from 'react';

import './bulb.css'

import {GoLightBulb} from "react-icons/go";
import {Button} from "./Button";


export interface Props extends HTMLAttributes<HTMLButtonElement> {
	/** Provide a text for a button */
	children: ReactNode;

	/** Which variant would you like to use*/
	variant: 'primary' | 'secondary';
}

/** This is special bulb */
export const Bulb = ({children, variant = 'primary'}: Props) => {

	const [bulbColor, setBulbColor]=useState("gray")
	const changeColor= (button)=>{
		const color= button.target.id;
	setBulbColor(color)
	}

	return (
		<>
			<div className="container" >
				<div className="bulb-color" style={{padding:"5vw", backgroundColor:bulbColor, border:"4px solid black", borderRadius:20}}>
					<GoLightBulb style={{fontSize: "150px", backgroundColor:bulbColor}}/>
				</div>
				<div className="buttons-color" >
					<Button id="red" className="single-button" variant="danger" onClick={changeColor}>Red</Button>
					<Button id="green" className="single-button" variant="success" onClick={changeColor}>Green</Button>
					<Button id="blue" className="single-button" variant="primary" onClick={changeColor}>Blue</Button>
				</div>
			</div>
		</>
	);
};
