import React from 'react';

const Input = props => {
	const { style, ...rest } = props;

	return (
		<input
			className="input"
			type="text"
			style={{ width: '100%', ...style }}
			{...rest}
		/>
	);
};

export default Input;
