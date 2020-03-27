import React, { Fragment } from 'react';
import styles from './posts.module.scss';

const Posts = ({ message }) => {
    return (
        <Fragment>
            <li className={`${styles.posts__item} list__item`}>
                <div className={styles.posts__ava}>
                    <img className="image" src="https://i.pinimg.com/736x/17/df/43/17df43c76a1155a2efc74581e404f494.jpg" alt="Avatar" />
                </div>
                <div className={styles.posts__text}>
                    {message}
                </div>
            </li>
        </Fragment>
    ); 
};

export default Posts;