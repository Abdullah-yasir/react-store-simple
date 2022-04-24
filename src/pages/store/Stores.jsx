import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BgContainer from '../../components/BgContainer';
import Button from '../../components/Button';
import { liveSearch } from '../../util';

export default function Stores({ state }) {
	const navigate = useNavigate();
	const stores = state.stores;
	const [searched, setSearched] = useState([]);

	useEffect(() => {
		setSearched(stores);
	}, [stores]);

	const onSearch = e => {
		liveSearch(e.target.value, stores, results => {
			setSearched(results);
		});
	};

	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: 'row',
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
						onChange={onSearch}
					/>
				</div>
				<Button
					label="Create"
					style={{ backgroundColor: '#32364a' }}
					onClick={() => navigate('/create-store')}
				/>
			</div>
			<BgContainer>
				{searched.map(store => (
					<div
						style={{
							width: '100%',
							borderBottom: '1px solid white',
						}}>
						<h2>{store.storeName}</h2>
						<p>{store.description}</p>
					</div>
				))}
			</BgContainer>
		</>
	);
}
