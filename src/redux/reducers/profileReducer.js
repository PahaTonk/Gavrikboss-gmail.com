import { ADD_POST, UPDATE_NEW_POST_TEXT } from '../../constants';

const initialState = {
    currentPostText: '',
    avatar: 'https://telegraf.com.ua/files/2019/01/milye-i-ocharovatelnye-shhekastye-pyosiki-5.jpg',
    name: 'Dog Jack',
    age: 3,
    status: 'Wow...',
    postsData: [
        {
            id: Math.floor(Math.random() * 1000000),
            text: "I'm good boy =)",
            likes: {
                count: 0,
            },
        },
        {
            id: Math.floor(Math.random() * 1000000),
            text: 'Wow wow',
            likes: {
                count: 0,
            },
        },
    ],
};

const profileReducer = (state = initialState, action) => {
    /**
     * @description save new post to state
     */
    const addPost = () => {
        const postsData = [...state.postsData];
        const currentPostText = '';
        const post = {
            id: Math.floor(Math.random() * 1000000),
            text: state.currentPostText,
            likes: {
                count: 0,
            },
            avatar: 'https://telegraf.com.ua/files/2019/01/milye-i-ocharovatelnye-shhekastye-pyosiki-5.jpg',
        };

        postsData.unshift(post);

        return { ...state, postsData, currentPostText };
    };

    /**
     * @description save new text of the post to state
     * @param {String} text text of the message
     */
    const changePostText = text => ({ ...state, currentPostText: text });

    switch (action.type) {
        case ADD_POST:
            return addPost();

        case UPDATE_NEW_POST_TEXT:
            return changePostText(action.text);

        default:
            return { ...state };
    }
};

export const addPostAC = () => ({ type: ADD_POST });
export const updateNewPostTextAC = text => ({
    type: UPDATE_NEW_POST_TEXT,
    text,
});

export default profileReducer;
