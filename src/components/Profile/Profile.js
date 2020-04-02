import React, { Fragment } from 'react';
import PersonPostsContainer from './PersonPosts/PersonPostsContainer';
import styles from './profile.module.scss';
import ProfileInfo from './ProfileInfo';

/**
 * @description profile page
 */
const Profile = (props) => {
    return (
        <Fragment>
            <section className={`profile__top ${styles.person}`}>
                <ProfileInfo />
            </section>
            <section className={`profile__bottom ${styles.posts}`}>
                <PersonPostsContainer {...props}/>
            </section>
        </Fragment>
    );
};

export default Profile;