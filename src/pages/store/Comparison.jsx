import React from 'react';
import Table from 'react-bootstrap/Table';

const Comparison = props => {
	const { state } = props;
	const products = state.products.filter(prod => prod.comparing);

	if (products.length < 2) {
		return 'Select two products to compare!';
	}

	const labels = Object.keys(products[0]);

	return (
		<div className="comparison_container">
			<Table>
				<thead>
					<th>Labels</th>
					<th>{products[0].title}</th>
					<th>{products[1].title}</th>
				</thead>
				<tbody>
					<tr>
						<td>Image</td>
						<td>
							<img
								style={{
									width: '100px',
									height: '100%',
								}}
								src={products[0]['image']}
								alt="product 1 img"
							/>
						</td>
						<td>
							<img
								style={{
									width: '100px',
									height: '100%',
								}}
								src={products[1]['image']}
								alt="product 2 img"
							/>
						</td>
					</tr>
					{labels.map(label => (
						<tr>
							<td>{label}</td>
							<td>{products[0][label]}</td>
							<td>{products[1][label]}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default Comparison;
