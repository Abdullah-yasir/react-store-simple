import React from 'react';

const Button = props => {
	const { label, onClick, disabled, style } = props;
	return (
		<button
			disabled={disabled}
			style={style}
			className="add-cart"
			onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
