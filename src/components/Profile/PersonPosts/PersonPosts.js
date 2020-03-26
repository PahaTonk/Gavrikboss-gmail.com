import React, { Fragment } from 'react';
import styles from './person-posts.module.scss';

const PersonPosts = () => {
    return (
        <Fragment>
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

export default PersonPosts;