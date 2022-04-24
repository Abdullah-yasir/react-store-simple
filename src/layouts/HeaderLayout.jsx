import React from 'react';
import Header from '../components/Header';

export default function HeaderLayout({ children, onSearch }) {
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
				<Header onSearch={onSearch} />
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
					style={{
						width: '60%',
					}}>
					{children}
				</div>
			</div>
		</div>
	);
}
