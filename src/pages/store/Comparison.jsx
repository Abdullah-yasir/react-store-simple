import React from 'react';

const Comparison = props => {
	const { state } = props;
	const products = state.products.filter(prod => prod.comparing);

	if (products.length < 2) {
		return 'Select two products to compare!';
	}

	const labels = Object.keys(products[0]);

	return (
		<div className="comparison_container">
			<table>
				<thead>
					<th>Labels</th>
					<th>{products[0].title}</th>
					<th>{products[1].title}</th>
				</thead>
				<tbody>
					{labels.map(label => (
						<tr>
							<td>{label}</td>
							<td>{products[0][label]}</td>
							<td>{products[1][label]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Comparison;
