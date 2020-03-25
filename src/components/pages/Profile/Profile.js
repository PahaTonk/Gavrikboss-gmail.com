import React, { Fragment } from 'react';

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
            <section className="profile__posts posts">
                <div className="posts__create"></div>
                <div className="posts__list-wrapper">
                    <ul className="posts__list list">
                        <li className="posts__item-wrapper list__item-wrapper">
                            <article className="posts__item list__item">

                            </article>
                        </li>
                        <li className="posts__item-wrapper list__item-wrapper">
                            <article className="posts__item list__item">

                            </article>
                        </li>
                    </ul>
                </div>
            </section>
        </Fragment>
    );
};

export default Profile;