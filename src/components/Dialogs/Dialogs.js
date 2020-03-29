import React, { Fragment } from 'react';
import styles from './dialogs.module.scss';
import User from './User';
import Message from './Message';

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <section className="dialogs__left users">
                <ul className={`${styles.users__list} list`}>
                    <li className="users__itemWrapper">
                        <User linkId="vatson" avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQITmE6hyq7RBxa8T7OiAHftxOEph097nZf2UxDr44mjhovGKxI" name="Dog Vatson"/>
                    </li>
                    <li className="users__itemWrapper">
                        <User linkId="harry" avatar="https://cs8.pikabu.ru/post_img/big/2017/02/10/8/1486732859195522448.jpg" name="Cat Harry"/>
                    </li>
                    
                    <li className="users__itemWrapper">
                        <User linkId="jocker" avatar="https://i.forfun.com/j9k4l5lc.jpeg" name="Dog Jocker"/>
                    </li>
                    
                    <li className="users__itemWrapper">
                        <User linkId="zord" avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUsXCljibokfNvJV6UKn6xBUdqLLvGy50eA2pd0saYGVfD1A2r" name="Dog Zord"/>
                    </li>
                </ul>
            </section>
            <section className={`${styles.dialogs__right} ${styles.messages}`}>
                <ul className={`${styles.messages__list} list`}>
                    <li className={`${styles.messages__itemWrapper} ${styles.messages__itemWrapper_left}`}>
                        <Message message="Hi bro, how are you?" />
                    </li>
                    <li className={styles.messages__itemWrapper}>
                        <Message message="Hi, i'm fine!" />
                    </li>
                    <li className={styles.messages__itemWrapper}>
                        <Message message="Let's go bark cats?" />
                    </li>
                    <li className={`${styles.messages__itemWrapper} ${styles.messages__itemWrapper_left}`}>
                        <Message message="Good idea let's go!!!" />
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Dialogs;