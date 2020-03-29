import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './user.module.scss';

const User = ({linkId, avatar, name}) => {
    return (
        <NavLink className={`${styles.users__item} list__item`} activeClassName="list__item_active" to={`/dialogs/${linkId}`}>
            <div className={styles.users__ava}>
                <img src={avatar} className="image" alt={name}/>
            </div>
            <div className={styles.users__info}>
                <h3 className="users__name">{name}</h3>
            </div>
        </NavLink>
    );
};

export default User;