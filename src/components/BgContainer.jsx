import React from 'react';

const BgContainer = ({ children }) => {
	return (
		<div
			className="bg-container"
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-evenly',
			}}>
			{children}
		</div>
	);
};

export default BgContainer;
