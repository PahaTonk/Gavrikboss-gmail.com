import React from 'react';
import styles from './aside.module.scss';

const Aside = () => {
    return (
        <aside className={`app__navigation ${styles.navigation}`}>
            <nav>
                <ul className={`list ${styles.navigation__list}`}>
                    <li className={`list__item-wrapper ${styles.navigation__item}`}>
                        <a className={`list__item ${styles.navigation__link}`}  href="">Profile</a>
                    </li>
                    <li className={`list__item-wrapper ${styles.navigation__item}`}>
                        <a className={`list__item ${styles.navigation__link}`}  href="">Messages</a>
                    </li>
                    <li className={`list__item-wrapper ${styles.navigation__item}`}>
                        <a className={`list__item ${styles.navigation__link}`}  href="">News</a>
                    </li>
                    <li className={`list__item-wrapper ${styles.navigation__item}`}>
                        <a className={`list__item ${styles.navigation__link}`}  href="">Music</a>
                    </li>
                    <li className={`list__item-wrapper ${styles.navigation__item}`}>
                        <a className={`list__item ${styles.navigation__link}`}  href="">Settings</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;