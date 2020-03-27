import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './aside.module.scss';

const Aside = () => {
    return (
        <aside className={`app__navigation ${styles.navigation}`}>
            <nav>
                <ul className={`list ${styles.navigation__list}`}>
                    <li className={styles.navigation__item}>
                        <NavLink className={`list__item ${styles.navigation__link}`} activeClassName={styles.navigation__link_active} to="/profile">Profile</NavLink>
                    </li>
                    <li className={styles.navigation__item}>
                        <NavLink className={`list__item ${styles.navigation__link}`} activeClassName={styles.navigation__link_active} to="/dialogs">Dialogs</NavLink>
                    </li>
                    <li className={styles.navigation__item}>
                        <NavLink className={`list__item ${styles.navigation__link}`} activeClassName={styles.navigation__link_active} exact to="/">News</NavLink>
                    </li>
                    <li className={styles.navigation__item}>
                        <NavLink className={`list__item ${styles.navigation__link}`} activeClassName={styles.navigation__link_active} exact to="/">Music</NavLink>
                    </li>
                    <li className={styles.navigation__item}>
                        <NavLink className={`list__item ${styles.navigation__link}`} activeClassName={styles.navigation__link_active} exact to="/">Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;