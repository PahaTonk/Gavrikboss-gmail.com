import React, { Fragment } from 'react';
import styles from './../profile.module.scss';

import Posts from './Post';

const PersonPosts = () => {
    const postsData = [
        {
            id: 'imgb',
            text: 'I\'m good boy =)',
            likes: {
                count: 0
            },
            avatar: 'https://i.pinimg.com/736x/17/df/43/17df43c76a1155a2efc74581e404f494.jpg'
        },
        {
            id: 'ww',
            text: 'Wow wow',
            likes: {
                count: 0
            },
            avatar: 'https://i.pinimg.com/736x/17/df/43/17df43c76a1155a2efc74581e404f494.jpg'
        }
    ];
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