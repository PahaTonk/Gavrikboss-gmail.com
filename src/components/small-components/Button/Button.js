import React from 'react';
import styles from './button.module.scss';

const Button = props => {
    const {type, text, classes} = props;

    return (
        <button type={type || 'button'} className={`${classes} ${styles.buttonDefault}`}>
            {text}
        </button>
    )
}

export default Button;