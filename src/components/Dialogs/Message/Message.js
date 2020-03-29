import React, { Fragment } from 'react';
import styles from './../dialogs.module.scss';
import { NavLink } from 'react-router-dom';

/**
 * @description dialog page
 * @param {Object} messageInfo user message information
 */
const Message = ({left, idUser, messageInfo : { text }, avatar}) => {
    return  (
        <Fragment>
            <div className={`${styles.messages__item} list__item`}>
                {text}
            <NavLink className={`${styles.messages__avatar} ${left && styles.messages__avatar_left} list__item`}
                        to={`/profile/${idUser}`}
                        >
                <img className="image" src={avatar} alt="Message" />
            </NavLink>
            </div>
        </Fragment>
    );
};

export default Message;