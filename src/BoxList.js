import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';
import { v4 as uuid } from 'uuid';

const BoxList = (props) => {
	const [ boxes, setBox ] = useState([]);
	const addBox = (newBox) => {
		setBox((boxes) => [ ...boxes, { ...newBox } ]);
	};
	const removeBox = (id) => {
		setBox((boxes) => boxes.filter((box) => box.id !== id));
	};
	console.log(boxes);
	const theBoxes = boxes.map(({ height, width, color }) => (
		<Box key={uuid()} height={height} width={width} color={color} removeBox={removeBox} />
	));

	return (
		<div className="Boxlist">
			<NewBoxForm addBox={addBox} />
			<div className="BoxList-allBoxes">{theBoxes}</div>
		</div>
	);
};

export default BoxList;
