import React, { Fragment } from 'react';
import styles from './profile.module.scss';

import PersonPosts from './PersonPosts';

const Profile = () => {
    return (
        <Fragment>
            <section className={`profile__top ${styles.person}`}>
                <div className={styles.person__background}></div>
                <article className={styles.person__view}>
                    <div className={styles.person__ava}>
                        <img className="image" src="https://i.pinimg.com/736x/17/df/43/17df43c76a1155a2efc74581e404f494.jpg" alt="Avatar" />
                    </div>
                    <div className={styles.person__info}>
                        <h1 className="person__name">Dog Jack</h1>
                        <p className="person__age">3 old year</p>
                        <p className="person__status">Wow...</p>
                    </div>
                </article>
            </section>
            <PersonPosts />
        </Fragment>
    );
};

export default Profile;