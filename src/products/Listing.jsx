import axios from 'axios';
import React from 'react';
import Product from './Prodcuts';

const liveSearch = (needle, products, onMatch) => {
	const search = needle.toLowerCase();
	const searchResult = products.filter(item => {
		return item.title.toLowerCase().includes(search);
	});
	onMatch(searchResult);
};

export default function Listing() {
	const [products, setProducts] = React.useState({
		products: [],
		searchedProducts: [],
	});

	React.useEffect(() => {
		// get dummy products from json placeholder using axios
		axios
			.get('https://fakestoreapi.com/products')
			.then(res => {
				setProducts({
					products: res.data,
					searchedProducts: res.data,
				});
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<div
			style={{
				height: '100vh',
				overflowY: 'scroll',
				overflowX: 'hidden',
				position: 'relative',
				paddingTop: 100,
			}}>
			<div
				className="bg-container"
				style={{
					position: 'fixed',
					zIndex: 999,
					top: 0,
					width: '100%',
				}}>
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
						style={{ width: '100%' }}
						onChange={e => {
							liveSearch(
								e.target.value,
								products.products,
								data =>
									setProducts({
										...products,
										searchedProducts: data,
									})
							);
						}}
					/>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<div
					className="bg-container"
					style={{
						width: '50%',
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-evenly',
					}}>
					{products.searchedProducts.map(product => (
						<Product {...product} />
					))}
				</div>
			</div>
		</div>
	);
}
