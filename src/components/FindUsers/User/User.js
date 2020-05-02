import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from './../../small-components/Avatar';
import Button from './../../small-components/Button';
import styles from './user.module.scss';

/**
 * @description create user item
 */
const User = props => {
    const {
        id,
        avatar,
        name,
        kind,
        friend,
        status,
        location: { city, country },
    } = props;
    const { followingManagement } = props;

    return (
        <article className={`${styles.user} list__item`}>
            <div className={`${styles.user__column_left} ${styles.user__view}`}>
                <NavLink to={`/profile/${id}`}>
                    <Avatar
                        avatar={avatar}
                        name={name}
                        classes={styles.user__avatar}
                        kind={kind}
                    />
                </NavLink>

                <form
                    onSubmit={event => {
                        event.preventDefault();

                        followingManagement(id, friend);
                    }}
                >
                    <Button
                        type='submit'
                        text={friend ? 'Unfollow' : 'Follow'}
                        classes={styles.user__following}
                    />
                </form>
            </div>
            <div
                className={`${styles.user__column_right} ${styles.user__info}`}
            >
                <h3 className={styles.user__name}>{name}</h3>
                <h3
                    className={styles.user__location}
                >{`${country}, ${city}`}</h3>
                <span className={styles.user__status}>{status}</span>
            </div>
        </article>
    );
};

export default User;
