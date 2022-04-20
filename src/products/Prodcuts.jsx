import React from 'react';

const Product = props => {
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
			<div className="product-info">
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
				<button className="add-cart" onClick={onClick}>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default Product;
