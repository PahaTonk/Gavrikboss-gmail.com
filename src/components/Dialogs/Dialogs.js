import React from 'react';
import styles from './dialogs.module.scss';

import User from './User';
import Message from './Message';

/**
 * @description dialogs page
 * @param {Array} usersInfo user information
 * @param {Array} messagesInfo users messages information
 */
const Dialogs = ({usersInfo, messagesInfo}) => {
    const users = usersInfo.map(({id, name, avatar}) => (
        <li key={id} className="users__itemWrapper">
            <User linkId={id} avatar={avatar} name={name}/>
        </li>
    ));
    const messages = messagesInfo.map(({id, isMyMessage, ...rest}) => {
        const leftMessage = isMyMessage ? '' : styles.messages__itemWrapper_left
        return (
            <li key={id} className={`${styles.messages__itemWrapper} ${leftMessage}`}>
                <Message left={!isMyMessage} {...rest}/>
            </li>
        );
    });

    return (
        //TODO: применить фрагмент
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