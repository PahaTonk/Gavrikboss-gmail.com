import React, { Fragment } from 'react';
import styles from './../dialogs.module.scss';

/**
 * @description dialog page
 * @param {Object} messageInfo user message information
 */
const Message = ({messageInfo : { text }}) => {
    return  (
        <Fragment>
            <div className={`${styles.messages__item} list__item`}>
                {text}
            </div>
        </Fragment>
    );
};

export default Message;