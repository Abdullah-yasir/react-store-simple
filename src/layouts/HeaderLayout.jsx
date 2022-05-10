import React from 'react';
import Header from '../components/Header';

export default function HeaderLayout({ children, onSearch, dispatch }) {
	return (
		<div>
			<Header onSearch={onSearch} dispatch={dispatch} />
			<div
				style={{
					height: 'calc(100vh - 64px)',
					width: '80%',
					margin: '0 auto',
				}}>
				{children}
			</div>
		</div>
	);
}
