import React from 'react';
import Product from '../../components/Product';

const MyStore = props => {
	const { title, products } = props;

	return (
		<div className="store_container">
			<h1 className="store_title">{title}</h1>

			<div className="store_products">
				{products.map(item => (
					<Product {...item} />
				))}
			</div>
		</div>
	);
};

export default MyStore;
