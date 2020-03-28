import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './dialogs.module.scss';

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <section className={`${styles.dialogs__left} ${styles.users}`}>
                <ul className={`${styles.users__list} list`}>
                    <li className={styles.users__listWrapper}>
                        <NavLink className={`${styles.users__item} list__item`} activeClassName="list__item_active" to="/dialogs/vatson">
                            <div className={styles.users__ava}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQITmE6hyq7RBxa8T7OiAHftxOEph097nZf2UxDr44mjhovGKxI" className="image" alt="Avatar"/>
                            </div>
                            <div className={styles.users__info}>
                                <h3 className="users__name">Dog Vatson</h3>
                            </div>
                        </NavLink>
                    </li>
                    
                    <li className={styles.users__listWrapper}>
                        <NavLink className={`${styles.users__item} list__item`} activeClassName="list__item_active" to="/dialogs/harry">
                            <div className={styles.users__ava}>
                                <img src="https://cs8.pikabu.ru/post_img/big/2017/02/10/8/1486732859195522448.jpg" className="image" alt="Avatar"/>
                            </div>
                            <div className={styles.users__info}>
                                <h3 className="users__name">Cat Harry</h3>
                            </div>
                        </NavLink>
                    </li>
                    
                    <li className={styles.users__listWrapper}>
                        <NavLink className={`${styles.users__item} list__item`} activeClassName="list__item_active" to="/dialogs/jocker">
                            <div className={styles.users__ava}>
                                <img src="https://lh3.googleusercontent.com/proxy/D4JQxdXoAeyD1MBVkKGWcRsvyt1SDjoYJm0Q6LBkeiFhVM3lL5JFXHHodvu_n_lt0LeQiFropyGZryF0q4lcpgHf_1iqSlK2Cz2FjP07uz7KYBJiqtxeKdmdPlEXpjTfnRXC8zqfm2564kp8DMKnNoyTzf4os39adRW-mVAEXeNZpzrXBOUQKc5tH-WlBEoIJmfpM2kz34Qb0sFvtHC_al4pXUoIYEb8Pcu4ECp0zui3WR9qUZCZiGiWa5Mcea1cSZlKx9BO2qjpKiSv7mtXAQ6pHZuJvL4GnTDXhOOMLg-lgdMT9wk0k-MDClaW0rxY3kU5mdPJcEfGlQ" className="image" alt="Avatar"/>
                            </div>
                            <div className={styles.users__info}>
                                <h3 className="users__name">Dog Jocker</h3>
                            </div>
                        </NavLink>
                    </li>
                    
                    <li className={styles.users__listWrapper}>
                        <NavLink className={`${styles.users__item} list__item`} activeClassName="list__item_active" to="/dialogs/zord">
                            <div className={styles.users__ava}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUsXCljibokfNvJV6UKn6xBUdqLLvGy50eA2pd0saYGVfD1A2r" className="image" alt="Avatar"/>
                            </div>
                            <div className={styles.users__info}>
                                <h3 className="users__name">Dog Zord</h3>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </section>
            <section className={`${styles.dialogs__right} messages`}>
                <ul className="messages__list list">
                    <li className="messages__item messages__item_left list__item">Hi bro, how are you?</li>
                    <li className="messages__item list__item">Hi, i'm fine!</li>
                    <li className="messages__item  list__item">Let's go bark cats?</li>
                    <li className="messages__item messages__item_left list__item">Good idea let's go!!!</li>
                </ul>
            </section>
        </div>
    );
};

export default Dialogs;