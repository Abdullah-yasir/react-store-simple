import React from 'react';
import Button from './Button';

const CartItem = props => {
	const { image, title, price, category, description, onClick } = props;

	return (
		<div
			style={{
				width: 250,
				marginBottom: 20,
				marginTop: 20,
			}}>
			<div
				style={{
					width: 250,
					height: 300,
					borderRadius: 5,
					overflow: 'hidden',
					backgrounColor: '#eee',
					position: 'relative',
					display: 'flex',
					marginRight: 20,
				}}>
				<img src={image} alt="" style={{ width: '100%' }} />
				<span
					style={{
						position: 'absolute',
						backgroundColor: 'grey',
						width: '100%',
						bottom: 0,
						padding: 5,
						display: 'flex',
						justifyContent: 'center',
					}}>
					{category}
				</span>
			</div>
			<div className="CartItem-info">
				<h3>{title}</h3>
				<span>${price}</span>
				<p
					style={{
						fontSize: 14,
						color: 'white',
						opacity: 0.6,
					}}>
					{description}
				</p>
				<Button onClick={onClick} label="Remove" />
			</div>
		</div>
	);
};

export default CartItem;
