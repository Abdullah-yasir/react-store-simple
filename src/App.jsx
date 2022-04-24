import './style.css';

import React, { useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Login from './pages/auth/Login';
import Listing from './pages/store/Products';
import Signup from './pages/auth/Signup';
import CreateStore from './pages/store/CreateStore';
import MyStore from './pages/store/MyStore';
import Cart from './pages/store/Cart';
import HeaderLayout from './layouts/HeaderLayout';
import Comparison from './pages/store/Comparison';
import Stores from './pages/store/Stores';

export const actionTypes = {
	ADD_TO_CART: 'ADD_TO_CART',
	SET_PRODUCTS: 'SET_PRODUCTS',
	REMOVE_FROM_CART: 'REMOVE_FROM_CART',
	CREATE_NEW_STORE: 'CREATE_NEW_STORE',
	LOGIN: 'LOGIN',
	REGISTER: 'REGISTER',
	COMPARE: 'COMPARE',
};

const reducer = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.SET_PRODUCTS:
			return {
				...state,
				products: action.payload.map(prod => ({
					id: prod.id,
					image: prod.image,
					title: prod.title,
					description: prod.description,
					rating: prod.rating.rate,
					ratingCount: prod.rating.count,
					price: prod.price,
					category: prod.category,
				})),
			};
		case actionTypes.ADD_TO_CART:
			return {
				...state,
				products: state.products.map(prod => {
					if (prod.id === action.payload.id) {
						return { ...prod, cartAdded: true };
					}

					return prod;
				}),
			};
		case actionTypes.COMPARE:
			return {
				...state,
				products: state.products.map(prod => {
					if (prod.id === action.payload.id) {
						return { ...prod, comparing: true };
					}

					return prod;
				}),
			};
		case actionTypes.CREATE_NEW_STORE:
			return {
				...state,
				stores: [...state.stores, action.payload],
			};
		default:
			break;
	}
};

const initialState = {
	products: [],
	stores: [],
	users: [],
};

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const routes = [
		{ path: '/', Component: Login },
		{ path: '/login', Component: Login },
		{ path: '/register', Component: Signup },
	];

	const protectedRoutes = [
		{ path: '/listing', Component: Listing },
		{ path: '/stores', Component: Stores },
		{ path: '/create-store', Component: CreateStore },
		{ path: '/compare', Component: Comparison },
		{ path: '/store', Component: MyStore },
		{ path: '/cart', Component: Cart },
	];

	React.useEffect(() => {
		axios
			.get('https://fakestoreapi.com/products')
			.then(res => {
				dispatch({
					type: actionTypes.SET_PRODUCTS,
					payload: res.data,
				});
			})
			.catch(err => {
				alert(err.message);
				console.log(err);
			});
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				{routes.map(({ path, Component }) => (
					<Route
						key={path}
						path={path}
						element={
							<Component state={state} dispatch={dispatch} />
						}
					/>
				))}
				{protectedRoutes.map(({ path, Component }) => (
					<Route
						key={path}
						path={path}
						element={
							<HeaderLayout>
								<Component state={state} dispatch={dispatch} />
							</HeaderLayout>
						}
					/>
				))}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
