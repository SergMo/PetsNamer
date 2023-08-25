import { useState } from 'react';
import petsToName from '../pet-namer';



export default function PetsNamer() {
	const [petIndex, setPetIndex] = useState(0); // URLs array from 
	const [petName, setPetName] = useState('');

	const handleNextPet = () => {
		const newIndex = (petIndex + 1) % petsToName.length;   // cycle through the available animal pictures
		setPetIndex(newIndex);
		setPetName('');
	}

	const handleNaming = (e) => {
		setPetName(e.target.value)
	}
	return (
		<div className='pet-namer'>
			<img src={petsToName[petIndex]} alt="Pet" />

			<h2>Name the Pet:</h2>
			<input
				type="text"
				value={petName}
				onChange={handleNaming}
				placeholder='Enter a name'
			/>
			<button onClick={handleNextPet}>NextPet</button>
			{{ petName } && <p>You named the pet: {petName}</p>}
		</div>
	)
}
