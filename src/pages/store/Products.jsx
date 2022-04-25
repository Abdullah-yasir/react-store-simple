import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { actionTypes } from '../../App';
import BgContainer from '../../components/BgContainer';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Product from '../../components/Product';
import { api } from '../../config/api';
import { liveSearch } from '../../util';

export default function Listing({ state, dispatch }) {
	const products = state.products;
	const [searched, setSearched] = useState([]);

	const [website, setWebsite] = useState('');
	const [query, setQuery] = useState('');
	const [category, setCategory] = useState('');

	const [categories, setCategores] = useState([]);

	useEffect(() => {
		setSearched(products);
	}, [products]);

	useEffect(() => {
		axios
			.get(api.categories)
			.then(res => {
				setCategores(res.data);
			})
			.catch(err => {
				console.log(err);
				alert(err.message);
			});
	}, []);

	const onLiveSerach = e => {
		liveSearch(e.target.value, products, results => {
			setSearched(results);
		});
	};

	const onServerSearch = () => {
		axios
			.post(api.search, { website, query, category })
			.then(res => {
				setSearched(res.data);
			})
			.catch(err => {
				console.log(err);
				alert(err.message);
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
					onChange={onLiveSerach}
				/>
			</div>
			<div>
				<Input
					placeholder="Keyword"
					value={query}
					onChange={e => setQuery(e.target.value)}
					type="text"
				/>
				<Input
					placeholder="Website"
					value={website}
					onChange={e => setWebsite(e.target.value)}
					type="text"
				/>

				<select
					name="Category"
					value={category}
					onChange={e => setCategory(e.target.value)}>
					{categories.map(category => (
						<option value={category}>{category}</option>
					))}
				</select>
				<Button label="Search" onClick={onServerSearch} />
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
