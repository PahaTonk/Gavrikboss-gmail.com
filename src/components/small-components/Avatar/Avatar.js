import React from 'react';
import styles from './avatar.module.scss';
import cat from './default-avatars/cat.png';
import dog from './default-avatars/dog.png';

/**
 * @description create default avatar
 */
const Avatar = ({ avatar, name, classes, kind }) => {
	let path = avatar;

	if (!avatar) {
		path = kind === 'dog' ? dog : cat;

	}

	return (
		<div className={`${styles.avatar} ${classes}`}>
			<img src={path} className='image' alt={name} />
		</div>
	);
};

export default Avatar;
