import {
    ADD_POST,
    UPDATE_NEW_POST_TEXT,
    ADD_MESSAGE,
    UPDATE_MESSAGE_TEXT
} from '../constants';

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, text});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageTextActionCreator = text => ({type: UPDATE_MESSAGE_TEXT, text});