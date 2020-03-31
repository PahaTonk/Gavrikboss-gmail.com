import React, { Fragment } from 'react';
import styles from './../profile.module.scss';
import {ADD_POST, UPDATE_NEW_POST_TEXT} from './../../../constants';

import Posts from './Post';
import FormText from '../../FormText';

/**
 * @description profile component, creates and shows user posts
 * @param {Array} currentPostText current text for textarea
 * @param {Array} postsData saved posts list
 * @param {Function} dispatch callback, check actions
 */
const PersonPosts = ({currentPostText, postsData, dispatch}) => {
    const postCreateRef = React.createRef();
    
    /**
     * @description send new post to state
     */
    const onSubmit = event => {
        event.preventDefault();

        dispatch({type: ADD_POST});
        dispatch({type: UPDATE_NEW_POST_TEXT, text: ''});
    };

    /**
     * @description send text new post to state
     */
    const onChange = () => {
        const text = postCreateRef.current.value;
        dispatch({type: UPDATE_NEW_POST_TEXT, text});
    };

    const posts = postsData.map(({id, ...postData}) => (
        <li key={id} className={`${styles.posts__item} list__item`}>
            <Posts {...postData}/>
        </li>
    ));

    return (
        <Fragment>
            <div className={styles.posts__top}>
                <FormText textareaRef={postCreateRef}
                            onSubmit={onSubmit}
                            onChange={onChange}
                            placeholder={'Write posts...'}
                            value={currentPostText}
                            />
            </div>
            <div className="posts__bottom">
                <ul className={`${styles.posts__list} list`}>
                    {posts}
                </ul>
            </div>
        </Fragment>
    );
};

export default PersonPosts;