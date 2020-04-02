import React from 'react';
import FormText from '../FormText';
import styles from './dialogs.module.scss';
import Message from './Message';
import User from './User';

/**
 * @description dialogs page
 * @param {Array} usersInfo user information
 * @param {Array} currentMessageText current message text in textarea
 * @param {Array} messagesInfo users messages information
 * @param {Function} addMessage callback, adding new message
 * @param {Function} updateMessageText callback, saving new text in the textarea
 */
const Dialogs = (props) => {
    const {usersInfo, currentMessageText, messagesInfo} = props;
    const {addMessage, updateMessageText} = props;
    const messageCreateRef = React.createRef();

    /**
     * @description send new message to state
     */
    const onSubmit = event => {
        event.preventDefault();
        addMessage();
        updateMessageText('');
    };

    /**
     * @description send text message to state
     */
    const onChange = () => {
        const text = messageCreateRef.current.value;
        updateMessageText(text);
    };

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
                <FormText textareaRef={messageCreateRef}
                            onSubmit={onSubmit}
                            onChange={onChange}
                            placeholder={'Write message...'}
                            value={currentMessageText}
                            />
            </section>
        </div>
    );
};

export default Dialogs;