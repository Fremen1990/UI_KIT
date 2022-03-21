import React from 'react';
import "./ProgressBar.css"



export const ProgressBar = ({
						 containerBackground = "#111",
						 barLabel = "HTML",
						 labelColor = "#f1f1f1",
						 percentage = 75,
						 barColor = "#d13639",
						 barHeight = "2vh",
						 barRadius = "5px"
					 }) => {


	return (
		<>
			<div className="wrapper" style={{background: containerBackground}}>
				<div className="bars">
					<div className="bar-name"
						 style={{color:labelColor}}
					>{barLabel}</div>
					<div className="bar"
						 style={{
							 height: barHeight,
							 borderRadius: barRadius
						 }}
					>
						<div className="bar-per"
							 // per={`${percentage}%`}
							 style={{
								 maxWidth: `${percentage}%`,
								 background: barColor,
								 height: barHeight,
								 borderRadius: barRadius
							 }}
						>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

