import React, { Fragment } from 'react';
import styles from './../profile.module.scss';

import Posts from './Post';

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

    return (
        <Fragment>
            <div className={styles.posts__top}>
                <form className={styles.posts__form}>
                    <textarea className={styles.posts__create} placeholder="Write posts..."></textarea>
                    <input className={styles.posts__send} type="submit" value="Send"/>
                </form>
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