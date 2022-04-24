import React from 'react';

const Button = props => {
	const { label, onClick, disabled } = props;
	return (
		<button disabled={disabled} className="add-cart" onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
