import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './../aside.module.scss';

const Friend = ({id, name, avatar}) => {
    return (
        <NavLink className={`${styles.friends__item} list__item`}
                    activeClassName="list__item_active"
                    to={`/profile/${id}`}
                    >
            <div className={styles.friends__avatar}>
                <img className="image" src={avatar} alt={name} />
            </div>
            <h3 className={styles.friends__name}>
                {name}
            </h3>
        </NavLink>
    );
};

export default Friend;