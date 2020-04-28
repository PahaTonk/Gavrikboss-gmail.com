import React from 'react';
import styles from './form-text.module.scss';
import Button from '../Button';

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
			<Button type='submit' text='Send' classes={styles.form__send}/>
		</form>
	);
};

export default FormText;
