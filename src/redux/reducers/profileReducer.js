import {
    ADD_POST,
    UPDATE_NEW_POST_TEXT
} from '../../constants';

const profileReducer = (state, action) => {
    /**
     * @description save new post to state
     */
    const addPost = () => {
        const posts = state.postsData;
        const post = {
            id: Math.floor(Math.random()*1000000),
            text: state.currentPostText,
            likes: {
                count: 0
            },
            avatar: 'https://telegraf.com.ua/files/2019/01/milye-i-ocharovatelnye-shhekastye-pyosiki-5.jpg'
        };
    
        posts.unshift(post);
    }
    
    /**
     * @description save new text of the post to state
     * @param {String} text text of the message 
     */
    const changePostText = text => state.currentPostText = text;


    switch(action.type) {
        case ADD_POST:
            addPost();
            break;
        
        case UPDATE_NEW_POST_TEXT:
            changePostText(action.text);
            break;
        

        default: break;
    }
    
    return state;
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, text});

export default profileReducer;