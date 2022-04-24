import React, { useEffect, useState } from 'react';

import { actionTypes } from '../../App';
import BgContainer from '../../components/BgContainer';
import Product from '../../components/Product';
import { liveSearch } from '../../util';

export default function Listing({ state, dispatch }) {
	const products = state.products;
	const [searched, setSearched] = useState([]);

	useEffect(() => {
		setSearched(products);
	}, [products]);

	const onSearch = e => {
		liveSearch(e.target.value, products, results => {
			setSearched(results);
		});
	};

	return (
		<>
			<div className="input-icon-container">
				<div className="icon">
					<img
						alt="some img"
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/search_icon.png"
					/>
				</div>
				<input
					className="input"
					placeholder="Search"
					type="text"
					onChange={onSearch}
				/>
			</div>
			<BgContainer>
				{searched.map(product => (
					<Product
						key={product.id}
						{...product}
						onClick={() =>
							dispatch({
								type: actionTypes.ADD_TO_CART,
								payload: product,
							})
						}
						onClickCompare={() =>
							dispatch({
								type: actionTypes.COMPARE,
								payload: product,
							})
						}
					/>
				))}
			</BgContainer>
		</>
	);
}
