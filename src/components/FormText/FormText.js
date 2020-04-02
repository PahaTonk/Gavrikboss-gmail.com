import React from 'react';
import styles from './form-text.module.scss';

/**
 * @description component for send data
 * @param {Function} onSubmit form submit handler
 * @param {Function} onChange text change handler
 * @param {Object} textareaRef element reference
 * @param {String} placeholder placeholder text
 * @param {String} value current saved text
 */
const FormText = ({ onSubmit, onChange, textareaRef, placeholder, value }) => {
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<textarea
				className={styles.form__textarea}
				placeholder={placeholder}
				onChange={onChange}
				ref={textareaRef}
				value={value}
			/>
			<input className={styles.form__send} type='submit' value='Send' />
		</form>
	);
};

export default FormText;
