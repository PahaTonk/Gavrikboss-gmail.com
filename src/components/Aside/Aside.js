import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './aside.module.scss';

/**
 * @description navigation panel(left column)
 */
const Aside = () => {
    return (
        <aside className={`app__navigation ${styles.navigation}`}>
            <nav>
                <ul className="list navigation__list">
                    <li className={styles.navigation__item}>
                        <NavLink className={`list__item ${styles.navigation__link}`} activeClassName="list__item_active" to="/profile">Profile</NavLink>
                    </li>
                    <li className={styles.navigation__item}>
                        <NavLink className={`list__item ${styles.navigation__link}`} activeClassName="list__item_active" to="/dialogs">Dialogs</NavLink>
                    </li>
                    <li className={styles.navigation__item}>
                        <NavLink className={`list__item ${styles.navigation__link}`} activeClassName="list__item_active" exact to="/news">News</NavLink>
                    </li>
                    <li className={styles.navigation__item}>
                        <NavLink className={`list__item ${styles.navigation__link}`} activeClassName="list__item_active" exact to="/musik">Music</NavLink>
                    </li>
                    <li className={styles.navigation__item}>
                        <NavLink className={`list__item ${styles.navigation__link}`} activeClassName="list__item_active" exact to="/settings">Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;