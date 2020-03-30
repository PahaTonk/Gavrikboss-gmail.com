import React from 'react';
import styles from './form-text.module.scss';

const FormText = ({onSubmit, onChange, textareaRef, placeholder, value}) => {
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <textarea className={styles.form__textarea}
                        placeholder={placeholder}
                        onChange={onChange}
                        ref={textareaRef}
                        value={value}
                        />
            <input className={styles.form__send} type="submit" value="Send"/>
        </form>
    );
};

export default FormText;