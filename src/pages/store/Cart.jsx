import React from 'react';
import CartItem from '../../components/CartItem';

const Cart = props => {
	const { state } = props;
	const cartItems = state.products.filter(prod => prod.cartAdded);
	return (
		<div className="cart">
			<h3>Cart: </h3>
			{cartItems.map(item => (
				<CartItem key={item.id} {...item} />
			))}
		</div>
	);
};

export default Cart;
