import React, { useState } from 'react';
import { actionTypes } from '../../App';
import BgContainer from '../../components/BgContainer';
import Button from '../../components/Button';
import Input from '../../components/Input';

const CreateStore = ({ state, dispatch }) => {
	const [storeName, setStoreName] = useState('');
	const [description, setDescription] = useState('');

	const onClickCreate = () => {
		dispatch({
			type: actionTypes.CREATE_NEW_STORE,
			payload: {
				title: storeName,
				description,
			},
		});
	};

	return (
		<BgContainer>
			<span>Store name</span>
			<Input
				value={storeName}
				onChange={e => setStoreName(e.target.value)}
			/>
			<span>Description</span>
			<textarea
				style={{
					width: '100%',
				}}
				rows={10}
				value={description}
				onChange={e => setDescription(e.target.value)}></textarea>
			<Button label="Create" onClick={onClickCreate} />
		</BgContainer>
	);
};

export default CreateStore;
