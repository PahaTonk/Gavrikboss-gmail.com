import React from 'react';
import {
	addMessageActionCreator,
	updateMessageTextActionCreator,
} from '../../redux/reducers/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = ({ store, ...rest }) => {
	const {
		dialogsState: { usersInfo, currentMessageText, messagesInfo },
	} = store.getState();

	const onSubmit = () => {
		const actionNewMessage = addMessageActionCreator();

		store.dispatch(actionNewMessage);
	};

	const onChange = text => {
		const action = updateMessageTextActionCreator(text);

		store.dispatch(action);
	};

	return (
		<Dialogs
			usersInfo={usersInfo}
			currentMessageText={currentMessageText}
			messagesInfo={messagesInfo}
			addMessage={onSubmit}
			updateMessageText={onChange}
			{...rest}
		/>
	);
};

export default DialogsContainer;
