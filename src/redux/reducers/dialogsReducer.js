import { ADD_MESSAGE, UPDATE_MESSAGE_TEXT } from '../../constants';

const initialState = {
	usersInfo: [
		{
			id: 'vatson',
			name: 'Dog Vatson',
			status: 'I like ball',
			location: {
				city: 'Minsk',
				country: 'Belarus',
			},
			friend: true,
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQITmE6hyq7RBxa8T7OiAHftxOEph097nZf2UxDr44mjhovGKxI',
		},
		{
			id: 'harry',
			name: 'Cat Harry',
			status: 'Viskas is fantastic',
			location: {
				city: 'Kiyv',
				country: 'Ukraine',
			},
			friend: false,
			avatar:
				'https://cs8.pikabu.ru/post_img/big/2017/02/10/8/1486732859195522448.jpg',
		},
		{
			id: 'Joker',
			name: 'Dog Jocker',
			status: 'Wow wow ',
			location: {
				city: 'Minsk',
				country: 'Belarus',
			},
			friend: true,
			avatar: 'https://i.forfun.com/j9k4l5lc.jpeg',
		},
		{
			id: 'zord',
			name: 'Dog Zord',
			status: "I'm crazy boy",
			location: {
				city: 'London',
				country: 'UK',
			},
			friend: true,
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUsXCljibokfNvJV6UKn6xBUdqLLvGy50eA2pd0saYGVfD1A2r',
		},
	],
	currentMessageText: '',
	messagesInfo: [
		{
			id: Math.floor(Math.random() * 1000000),
			idUser: '',
			messageInfo: {
				text: 'Hi bro, how are you?',
			},
			avatar:
				'https://telegraf.com.ua/files/2019/01/milye-i-ocharovatelnye-shhekastye-pyosiki-5.jpg',
			isMyMessage: true,
		},
		{
			id: Math.floor(Math.random() * 1000000),
			idUser: 'vatson',
			messageInfo: {
				text: "Hi, i'm fine!",
			},
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQITmE6hyq7RBxa8T7OiAHftxOEph097nZf2UxDr44mjhovGKxI',
		},
		{
			id: Math.floor(Math.random() * 1000000),
			idUser: 'vatson',
			messageInfo: {
				text: "Let's go bark cats?",
			},
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQITmE6hyq7RBxa8T7OiAHftxOEph097nZf2UxDr44mjhovGKxI',
		},
		{
			id: Math.floor(Math.random() * 1000000),
			idUser: '',
			messageInfo: {
				text: "Good idea let's go!!!",
			},
			avatar:
				'https://telegraf.com.ua/files/2019/01/milye-i-ocharovatelnye-shhekastye-pyosiki-5.jpg',
			isMyMessage: true,
		},
	],
};

const dialogsReducer = (state = initialState, action) => {
	let _state = { ...state };

	/**
	 * @description save message to state
	 */
	const addMessage = () => {
		const currentMessageText = '';
		const messagesInfo = [..._state.messagesInfo];
		const text = _state.currentMessageText;
		const message = {
			id: Math.floor(Math.random() * 1000000),
			idUser: '',
			messageInfo: { text },
			avatar:
				'https://telegraf.com.ua/files/2019/01/milye-i-ocharovatelnye-shhekastye-pyosiki-5.jpg',
			isMyMessage: true,
		};

		messagesInfo.push(message);

		_state = { ..._state, messagesInfo, currentMessageText };
	};

	/**
	 * @description save new text of the message to state
	 */
	const changeMessageText = text => (_state.currentMessageText = text);

	switch (action.type) {
		case ADD_MESSAGE:
			addMessage();
			break;

		case UPDATE_MESSAGE_TEXT:
			changeMessageText(action.text);
			break;

		default:
			break;
	}

	return _state;
};

export const addMessageAC = () => ({ type: ADD_MESSAGE });
export const updateMessageTextAC = text => ({
	type: UPDATE_MESSAGE_TEXT,
	text,
});

export default dialogsReducer;
