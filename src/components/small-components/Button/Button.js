import React from 'react';
import styles from './button.module.scss';

/**
 * @description create default button
 */
const Button = props => {
    const { type, text, classes, ref, clickCB } = props;

    return (
        <button
            type={type || 'button'}
            className={`${classes} ${styles.buttonDefault}`}
            ref={ref}
            onClick={clickCB}
        >
            {text}
        </button>
    );
};

export default Button;
