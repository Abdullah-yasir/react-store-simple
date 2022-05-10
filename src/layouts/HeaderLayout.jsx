import React from 'react';
import Header from '../components/Header';

export default function HeaderLayout({ children, onSearch, dispatch }) {
	return (
		<div>
			<Header onSearch={onSearch} dispatch={dispatch} />
			<div
				style={{
					height: '100vh',
					width: '80%',
					margin: '0 auto',
					overflow: 'auto',
					paddingBotton: '100px',
				}}>
				{children}
			</div>
		</div>
	);
}
