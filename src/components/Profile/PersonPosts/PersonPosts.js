import React, { Fragment } from 'react';
import styles from './person-posts.module.scss';

import Posts from './Post';

const PersonPosts = () => {
    return (
        <Fragment>
            <section className={`profile__bottom ${styles.posts}`}>
                <div className={styles.posts__top}>
                    <form className={styles.posts__form}>
                        <textarea className={styles.posts__create} placeholder="Write posts..."></textarea>
                        <input className={styles.posts__send} type="submit" value="Send"/>
                    </form>
                </div>
                <div className="posts__bottom">
                    <ul className={`${styles.posts__list} list`}>
                        <Posts message="I'm good boy =)"/>
                        <Posts message="Wow wow"/>
                    </ul>
                </div>
            </section>
        </Fragment>
    );
};

export default PersonPosts;