import { useState } from 'react'


export default function InputName({ onNameChange }) {
	const [petName, setPetName] = useState('');

	const handleNaming = (e) => {
		setPetName(e.target.value);
	}

	const handleOnClick = () => {
		onNameChange();
		setPetName('');
	}

	return (
		<div className="name-input">
			<h2>Name the Pet:</h2>
			<input
				type="text"
				value={petName}
				onChange={handleNaming}
				placeholder='Enter a name'
			/>
			<button onClick={handleOnClick}>NextPet</button>
			{{ petName } && <p>You named the pet: {petName}</p>}
		</div>
	)
}
