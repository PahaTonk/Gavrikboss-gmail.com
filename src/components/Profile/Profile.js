import React, { Fragment } from 'react';
import styles from './profile.module.scss';

import PersonPosts from './PersonPosts';
import ProfileInfo from './ProfileInfo';

/**
 * @description profile page
 * @param {Array} postsData posts information
 */
const Profile = (props) => {
    return (
        <Fragment>
            <section className={`profile__top ${styles.person}`}>
                <ProfileInfo />
            </section>
            <section className={`profile__bottom ${styles.posts}`}>
                <PersonPosts {...props}/>
            </section>
        </Fragment>
    );
};

export default Profile;