import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
	Container,
	Form,
	FormControl,
	Nav,
	Navbar,
	NavDropdown,
	Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { actionTypes } from '../App';
import { api } from '../config/api';

const links = [
	{ label: 'Home', path: '/listing' },
	{ label: 'Cart', path: '/cart' },
	{ label: 'Compare', path: '/compare' },
	{ label: 'Stores', path: '/stores' },
];

const Header = props => {
	const { onClickSearch, dispatch } = props;
	const [categories, setCategores] = useState([]);
	const [searchStr, setSearchStr] = useState('');
	const [website, setWebsite] = useState('');
	const [category, setCategory] = useState('');

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

	const onClickCat = cat => {
		setCategory(cat);
		dispatch({
			type: actionTypes.SET_CATEGORY,
			payload: cat,
		});
	};

	return (
		<header>
			<Navbar bg="light" expand="lg">
				<Container fluid>
					<Navbar.Brand href="#">BuyNLarge</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: '100px' }}
							navbarScroll>
							{links.map(link => (
								<Nav.Link>
									<Link
										style={{
											textDecoration: 'inherit',
											color: 'inherit',
										}}
										key={link.path}
										to={link.path}>
										{link.label}
									</Link>
								</Nav.Link>
							))}
						</Nav>
						<Form className="d-flex">
							<NavDropdown
								title="Categories"
								id="navbarScrollingDropdown">
								{categories.map(cat => (
									<NavDropdown.Item
										onClick={() => onClickCat(cat)}>
										{cat}
									</NavDropdown.Item>
								))}
							</NavDropdown>
							<FormControl
								type="search"
								value={searchStr}
								onChange={e => setWebsite(e.target.value)}
								placeholder="Website"
								className="me-2"
								aria-label="Search"
							/>
							<FormControl
								type="search"
								value={website}
								onChange={e => setSearchStr(e.target.value)}
								placeholder="Keyword"
								className="me-2"
								aria-label="Keyword"
							/>
							<Button
								variant="outline-success"
								onClick={() =>
									onClickSearch(searchStr, website, category)
								}>
								Search
							</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
