import React, {HTMLAttributes, ReactNode, useState} from 'react';

import {GoLightBulb} from "react-icons/go";
import {Button} from "./Button";


export interface Props extends HTMLAttributes<HTMLButtonElement> {
	/** Provide a text for a button */
	children: ReactNode;
}

/** This is special bulb */
export const Bulb = ({children}: Props) => {

	const [bulbColor, setBulbColor]=useState("gray")
	const changeColor= (button: any)=>{
		const color= button.target.id;
	setBulbColor(color)
	}

	return (
		<>

				<div className="bulb-color" style={{padding:"2vw", backgroundColor:bulbColor, border:"4px solid" +
						" black", borderRadius:20}}>
					<GoLightBulb style={{fontSize: "150px", backgroundColor:bulbColor}}/>
					{children }
				</div>
				<div className="buttons-color"
				style={{
					margin:25,
					display:"flex",
					flexDirection: "row"
				}}

				>
					<Button id="red" style={{
						margin:10,
						fontSize:20
					}} variant="danger" onClick={changeColor}>Red</Button>
					<Button id="green" style={{
						margin:10,
						fontSize:20
					}} variant="success" onClick={changeColor}>Green</Button>
					<Button id="blue" style={{
						margin:10,
						fontSize:20
					}} variant="primary" onClick={changeColor}>Blue</Button>
				</div>
		</>
	);
};

