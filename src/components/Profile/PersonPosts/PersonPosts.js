import React, { Fragment } from 'react';
import styles from './../profile.module.scss';

import Posts from './Post';
import FormText from '../../FormText';

/**
 * @description profile component, creates and shows user posts
 * @param {Array} postsData posts information
 */
const PersonPosts = ({postsData}) => {
    const posts = postsData.map(({id, ...postData}) => (
        <li key={id} className={`${styles.posts__item} list__item`}>
            <Posts {...postData}/>
        </li>
    ));
    const postCreateRef = React.createRef();
    const sendPost = event => {
        event.preventDefault();
        const text = postCreateRef.current.value;
        console.log(text);
    }
    const changePost = event => {
        const text = postCreateRef.current.value;
        console.log(postCreateRef, text);
    }

    return (
        <Fragment>
            <div className={styles.posts__top}>
                <FormText textareaRef={postCreateRef}
                            onSubmit={sendPost}
                            onChange={changePost}
                            placeholder={'Write posts...'}
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