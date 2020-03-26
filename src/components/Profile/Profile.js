import React, { Fragment } from 'react';
import styles from './profile.module.scss';

import PersonPosts from './PersonPosts';

const Profile = () => {
    return (
        <Fragment>
            <section className="profile__info" >
                <div className="profile__background">
                    <img className="image" src="https://kaifolog.ru/uploads/posts/2016-11/1480227668_00_1.jpg" />
                </div>
                <div className="profile__view">
                    
                </div>
            </section>
            <PersonPosts />
        </Fragment>
    );
};

export default Profile;