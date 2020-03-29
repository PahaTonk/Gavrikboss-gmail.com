import React, { Fragment } from 'react';
import styles from './dialogs.module.scss';
import User from './User';
import Message from './Message';

const Dialogs = () => {
    const usersInfoList = [
        {
            id: 'vatson',
            name: 'Dog Vatson',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQITmE6hyq7RBxa8T7OiAHftxOEph097nZf2UxDr44mjhovGKxI'
        },
        {
            id: 'harry',
            name: 'Cat Harry',
            avatar: 'https://cs8.pikabu.ru/post_img/big/2017/02/10/8/1486732859195522448.jpg'
        },
        {
            id: 'jocker',
            name: 'Dog Jocker',
            avatar: 'https://i.forfun.com/j9k4l5lc.jpeg'
        },
        {
            id: 'zord',
            name: 'Dog Zord',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUsXCljibokfNvJV6UKn6xBUdqLLvGy50eA2pd0saYGVfD1A2r'
        }
    ];
    const messagesData = [
        {
            id: 'hbhay',
            message: 'Hi bro, how are you?',
            isMyMessage: true
        },
        {
            id: 'hif',
            message: 'Hi, i\'m fine!'
        },
        {
            id: 'lgbc',
            message: 'Let\'s go bark cats?'
        },
        {
            id: 'gilg',
            message: 'Good idea let\'s go!!!',
            isMyMessage: true
        },
    ];
    const users = usersInfoList.map(({id, name, avatar}) => (
        <li key={id} className="users__itemWrapper">
            <User linkId={id} avatar={avatar} name={name}/>
        </li>
    ));
    const messages = messagesData.map(({id, message, isMyMessage}) => (
        <li key={id} className={`${styles.messages__itemWrapper} ${!isMyMessage && styles.messages__itemWrapper_left}`}>
            <Message message={message} />
        </li>
    ));

    return (
        <div className={styles.dialogs}>
            <section className="dialogs__left users">
                <ul className={`${styles.users__list} list`}>
                    {users}
                </ul>
            </section>
            <section className={`dialogs__right ${styles.messages}`}>
                <ul className={`${styles.messages__list} list`}>
                    {messages}
                </ul>
            </section>
        </div>
    );
};

export default Dialogs;