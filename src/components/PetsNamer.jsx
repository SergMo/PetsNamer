import { useState } from 'react';
import petsToName from '../pet-namer';
import ShowImage from './ShowImage'
import InputName from './InputName';


export default function PetsNamer() {
	const [petIndex, setPetIndex] = useState(0); // URLs array from 

	const handleNextPet = () => {
		const newIndex = (petIndex + 1) % petsToName.length;   // cycle through the available animal pictures
		setPetIndex(newIndex);
	}

	// const handleNaming = (e) => {
	// 	setPetName(e.target.value)
	// }
	return (
		<div className='pet-namer'>
			{/* <img src={petsToName[petIndex]} alt="Pet" /> */}
			<ShowImage image={petsToName[petIndex]} />
			<InputName onNameChange={handleNextPet} />
			{/* <h2>Name the Pet:</h2>
			<input
				type="text"
				value={petName}
				onChange={handleNaming}
				placeholder='Enter a name'
			/>
			<button onClick={handleNextPet}>NextPet</button>
			{{ petName } && <p>You named the pet: {petName}</p>} */}
		</div>
	)
}
