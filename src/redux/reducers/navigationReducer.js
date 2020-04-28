const initialState = {
	friendsInfo: [
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
};

const navigationReducer = (state = initialState, action) => {
	let _state = { ...state };
	return { ..._state };
};

export default navigationReducer;
