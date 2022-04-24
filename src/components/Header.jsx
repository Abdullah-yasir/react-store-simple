import React from 'react';
import { Link } from 'react-router-dom';

const links = [
	{ label: 'Home', path: '/listing' },
	{ label: 'Cart', path: '/cart' },
	{ label: 'Compare', path: '/compare' },
	{ label: 'Stores', path: '/stores' },
];

const Header = props => {
	const { onClickLogout } = props;

	return (
		<header className="header">
			<div className="header_logo">store</div>
			<nav>
				{links.map(link => (
					<Link key={link.path} to={link.path}>
						{link.label}
					</Link>
				))}
			</nav>
			<Link to="/login" onClick={onClickLogout}>
				Logout
			</Link>
		</header>
	);
};

export default Header;
