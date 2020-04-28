import { FOLLOW, UNFOLLOW } from '../../constants';

const initialState = {
	users: [
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
};

const usersReducer = (state = initialState, action) => {
	let _state = { ...state };

	const followingManagement = (id, toggle) => {
		const users = [..._state.users];
		const user = users.find(item => item.id === id);

		user.friend = toggle;

		_state = { ...state, users };
	};

	switch (action.type) {
		case FOLLOW:
			followingManagement(action.userId, true);
			break;

		case UNFOLLOW:
			followingManagement(action.userId, false);
			break;

		default:
			break;
	}

	return _state;
};

export const followAC = id => ({ type: FOLLOW, userId: id });
export const unfollowAC = id => ({ type: UNFOLLOW, userId: id });

export default usersReducer;
