import React, {useState} from 'react';

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faLock, faLockOpen} from "@fortawesome/free-solid-svg-icons";

export const InputPassword = () => {
	const [passwordType, setPasswordType] = useState(true)
	const toggleShowPassword = () => {
		setPasswordType(!passwordType)
	}

	return (
		<label > Password
			<input placeholder="Enter your password"type={passwordType ? "password" : "text"}/>
			<button onMouseDown={toggleShowPassword} onMouseUp={toggleShowPassword}>
				{/*<FontAwesomeIcon icon={passwordType ? faLock : faLockOpen}/>*/}
				{passwordType?"🔑":"👀"}
			</button>
			<div>
			</div>
		</label>
	);
};


