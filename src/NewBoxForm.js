import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({ addBox }) => {
	const INITAL_FORM_STATE = {
		id: uuid(),
		height: '',
		width: '',
		color: ''
	};

	const [ formData, setFormData ] = useState(INITAL_FORM_STATE);
	//* this function is working fine
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addBox({ ...formData });
		setFormData(INITAL_FORM_STATE);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="color">Enter a color: </label>
			<input
				id="color"
				type="text"
				name="color"
				placeholder="Color"
				value={formData.color}
				onChange={handleChange}
			/>
			<label htmlFor="height">Enter height: </label>
			<input
				id="height"
				type="text"
				name="height"
				placeholder="Height in px"
				onChange={handleChange}
				value={formData.height}
			/>
			<label htmlFor="width">Enter width: </label>
			<input
				id="width"
				type="text"
				name="width"
				placeholder="Width in px"
				onChange={handleChange}
				value={formData.width}
			/>
			<button>Make box</button>
		</form>
	);
};

export default NewBoxForm;
