import React from 'react';
import PersonPosts from './PersonPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/reducers/profileReducer';

const PersonPostsContainer = ({store, ...rest}) => {
    const {profileState: {postsData, currentPostText}} = store.getState();

    const onChange = (text) => {
        const updateTextPostAction = updateNewPostTextActionCreator(text);

        store.dispatch(updateTextPostAction);
    }

    const onSubmit = () => {
        const addPostAction = addPostActionCreator();

        store.dispatch(addPostAction);
    }

    return (
        <PersonPosts
            addPost={onSubmit}
            updateNewPostText={onChange}
            postsData={postsData}
            currentPostText={currentPostText}
            {...rest}/>
    );
};

export default PersonPostsContainer;