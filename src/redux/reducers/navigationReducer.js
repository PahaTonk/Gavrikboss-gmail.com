const initialState = {
	friendsInfo: [
		{
			id: 'vatson',
			name: 'Dog Vatson',
			friend: true,
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQITmE6hyq7RBxa8T7OiAHftxOEph097nZf2UxDr44mjhovGKxI',
		},
		{
			id: 'jocker',
			name: 'Dog Jocker',
			friend: true,
			avatar: 'https://i.forfun.com/j9k4l5lc.jpeg',
		},
		{
			id: 'zord',
			name: 'Dog Zord',
			friend: true,
			avatar:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUsXCljibokfNvJV6UKn6xBUdqLLvGy50eA2pd0saYGVfD1A2r',
		},
	],
};

const navigationReducer = (state = initialState, action) => {
	let _state = { ...state };
	return { ..._state };
};

export default navigationReducer;
