import React from 'react';
import './Box.css';

const Box = (props) => {
	const remove = () => props.removeBox(props.id);
	return (
		<div>
			<div
				className="Box"
				style={{ height: `${props.height}px`, width: `${props.width}px`, backgroundColor: `${props.color}` }}
			>
				<h2>BOX</h2>
			</div>
			<button onClick={remove}>X</button>
		</div>
	);
};

export default Box;
