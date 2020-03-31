import {ADD_POST, UPDATE_NEW_POST_TEXT} from '../constants';

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, text});